import { IChapter } from '@/components/Chapter/types';
import { ITom } from '@/components/Tom/types';
import { genresMap } from '@/constants';
import { imgUploader } from '@/services';
import prisma from '@/services/prisma';
import { IComics } from '@/store/comics/types';
import { Focus, Genre, Tag } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse, type NextRequest } from 'next/server';
import { v4 as uuid } from 'uuid';
import { options } from '../auth/[...nextauth]/options';

const cleanBase64 = (base64: string) => {
  return base64.replace(/^data:image\/\w+;base64,/, '').replace(/\s/g, '');
};

const isValidBase64 = (str: string) => {
  try {
    return Buffer.from(str, 'base64').toString('base64') === str;
  } catch {
    return false;
  }
};

interface PreparedTom extends Omit<ITom, 'tomId' | 'chapters'> {
  title: string;
  chapters: Omit<IChapter, 'chapterId'>[];
}

interface PreparedComics extends Omit<IComics, 'rating' | 'genres' | 'tags' | 'focus' | 'author' | 'id' | 'toms'> {
  rating: string;
  focus: Focus[];
  tags: Tag[];
  genres: Genre[];
  toms: PreparedTom[];
}

const updateComics = async (comics: IComics, userId: string): Promise<PreparedComics> => {
  const processImage = async (base64: string, type: string) => {
    const cleaned = cleanBase64(base64);
    if (!isValidBase64(cleaned)) {
      console.error(`Invalid ${type} image`);
      return null;
    }
    try {
      const result = await imgUploader({
        name: `${userId}-${type}-${uuid()}`,
        base64string: cleaned,
      });
      return result.url;
    } catch (err) {
      console.error(`Error uploading ${type}:`, err);
      return null;
    }
  };

  const updatedToms = await Promise.all(
    comics.toms.map(async (tom) => {
      const updatedChapters = await Promise.all(
        tom.chapters.map(async (chapter) => {
          const updatedImages = await Promise.all(
            chapter.images.map(async (image, index) => {
              const imageUrl = await processImage(image, 'image');
              return imageUrl;
            }),
          );

          return {
            images: updatedImages,
            isRead: chapter.isRead,
            likes: chapter.likes,
            timeCode: chapter.timeCode,
            title: chapter.title,
          };
        }),
      );

      return {
        title: tom.title,
        chapters: updatedChapters,
      };
    }),
  );

  const coversLinks = await Promise.all(comics.covers.map((el) => processImage(el, 'covers')));

  if (comics['banner']) {
    const bannerLink = await processImage(comics['banner'], 'banner');
    comics['banner'] = bannerLink;
  }

  return {
    ...comics,
    toms: updatedToms,
    rating: comics['rating'][0].text,
    focus: comics['focus'].map((el) => genresMap[el.text]) as Focus[],
    genres: comics['genres'].map((el) => genresMap[el.text]) as Genre[],
    tags: comics['tags'].map((el) => genresMap[el.text]) as Tag[],
    covers: coversLinks,
  };
};

// 67078946e03b72cd20ffcdf5_name_cover_id
export const POST = async (request: NextRequest) => {
  try {
    const session = await getServerSession(options);

    const data: IComics = await request.json();
    console.log(data);
    const comics = await updateComics(data, session.user.id);

    const createdComics = await prisma.comics.create({
      data: {
        title: comics['title'],
        banner: comics['banner'],
        description: comics['description'],
        rating: comics['rating'],
        status: comics['status'],
        covers: comics['covers'],
        focus: comics['focus'],
        genres: comics['genres'],
        tags: comics['tags'],
        toms: {
          create: comics.toms.map((tom) => ({
            title: tom.title,
            chapters: {
              create: tom.chapters.map((chapter) => ({
                name: chapter.title,
                likes: chapter.likes,
                timeCode: chapter.timeCode,
                images: chapter.images,
                isRead: chapter.isRead,
              })),
            },
          })),
        },
        authorId: session.user.id,
      },
    });

    return NextResponse.json(createdComics);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    );
  }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Получаем параметры фильтрации из URL
    const genre = searchParams.get('genre');
    const focusParam = searchParams.get('focus');
    const tag = searchParams.get('tag');
    const statusParam = searchParams.get('status');
    const rating = searchParams.get('rating');
    const sort = searchParams.get('sort') || 'createdAt_desc';
    const search = searchParams.get('search');

    // Строим условия фильтрации
    const where: any = {
      isApproved: true,
    };

    if (genre) {
      const genreEnum = genresMap[genre.toLowerCase()];
      if (genreEnum) {
        where.genres = { has: genreEnum };
      }
    }

    if (focusParam) {
      const focusEnum = genresMap[focusParam.toLowerCase()];
      if (focusEnum) {
        where.focus = { has: focusEnum };
      }
    }

    if (tag) {
      const tagEnum = genresMap[tag.toLowerCase()];
      if (tagEnum) {
        where.tags = { has: tagEnum };
      }
    }

    if (statusParam) {
      where.status = statusParam;
    }

    if (rating) {
      where.rating = rating;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Сортировка
    const [sortField, sortOrder] = sort.split('_');
    const orderBy = { [sortField]: sortOrder };

    const comics = await prisma.comics.findMany({
      where,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        toms: {
          include: {
            chapters: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy,
    });

    return NextResponse.json(comics);
  } catch (error) {
    console.error('Error fetching comics:', error);
    return NextResponse.json({ message: 'Error fetching comics' }, { status: 500 });
  }
}
