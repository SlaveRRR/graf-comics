import { IChapter } from '@/components/Chapter/types';
import { ITom } from '@/components/Tom/types';
import { imgUploader } from '@/services';
import prisma from '@/services/prisma';
import { IComics } from '@/store/comics/types';
import { Focus, Genre, Tag } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse, type NextRequest } from 'next/server';
import { v4 as uuid } from 'uuid';
import { options } from '../auth/[...nextauth]/options';

// prettier-ignore
const stringToEnum : Record<string,Tag | Genre | Focus> = {
  "au": Tag.AU,
  "ангст": Tag.ANGST,
  'нецензурная лексика': Tag.NSFW,
  'hurt/comfort': Tag.HURT_COMFORT,
  "психология": Tag.PSYCHOLOGY,
  'смерть основных персонажей': Tag.CHARACTER_DEATH,
  "дружба": Tag.FRIENDSHIP,
  "насилие": Tag.VIOLENCE,
  "фэнтези": Tag.FANTASY,
  'веб-комикс': Focus.WEB_COMIC,
  "манга": Focus.MANGA,
  "сингл": Focus.SINGLE,
  "мини": Focus.MINI,
  "макси": Focus.MAXI,
  'омнибус (сборник)': Focus.OMNIBUS,
  "комедия": Genre.COMEDY,
  "боевик": Genre.ACTION,
  "драма": Genre.DRAMA,
  "детектив": Genre.DETECTIVE,
  "триллер": Genre.THRILLER,
  "романтика": Genre.ROMANCE,
  "мелодрама": Genre.MELODRAMA,
  "повседневность": Genre.DAILY_LIFE,
  "спорт": Genre.SPORT,
  "хоррор": Genre.HORROR,
  'фантастика': Genre.SCI_FI,
  'историческая драма': Genre.HISTORICAL_DRAMA,
  "гарем": Genre.HAREM,
  "киберпанк": Genre.CYBERPUNK,
  "стимпанк": Genre.STEAMPUNK,
  "супергерои": Genre.SUPERHERO,
  'космическая опера': Genre.SPACE_OPERA,
  "апокалипсис": Genre.APOCALYPSE,
  "постапокалипсис": Genre.POST_APOCALYPSE,
  'боевые искусства': Genre.MARTIAL_ARTS,
  "айдолы": Genre.IDOLS,
  "меха": Genre.MECHA,
  "фансервис": Genre.FAN_SERVICE,
  "этти": Genre.ECHI,
};

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
    focus: comics['focus'].map((el) => stringToEnum[el.text]) as Focus[],
    genres: comics['genres'].map((el) => stringToEnum[el.text]) as Genre[],
    tags: comics['tags'].map((el) => stringToEnum[el.text]) as Tag[],
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
