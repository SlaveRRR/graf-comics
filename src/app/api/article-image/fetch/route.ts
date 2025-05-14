import prisma from '@/services/prisma';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { NextResponse, type NextRequest } from 'next/server';
import { options } from '../../auth/[...nextauth]/options';

export const POST = async (request: NextRequest) => {
  try {
    const session = await getServerSession(options);
    const { url }: { url: string } = await request.json();
    // prettier-ignore
    const fileName = `${url.slice(11,(url.length / 2) - 1)}_${url.slice(url.lastIndexOf('/') + 1)}_${session.user.id}`;

    const image = await prisma.articleImage.findUnique({
      where: {
        name: fileName,
      },
    });

    if (image) {
      const existedUrl = `data:image/${image.type};base64,${image.image.toString('base64')}`;
      return NextResponse.json({
        success: 1,
        file: {
          url: existedUrl,
        },
      });
    }
    let base64Url: string;
    if (!url.includes('data:image')) {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
      });
      const result = await prisma.articleImage.create({
        data: {
          name: fileName,
          image: response.data,
          userId: session.user.id,
        },
      });
      base64Url = `data:image/jpeg;base64,${result.image.toString('base64')}`;
    } else {
      const type = url.slice(11, url.indexOf(';'));
      console.log(type);
      base64Url = url;
      await prisma.articleImage.create({
        data: {
          name: fileName,
          image: Buffer.from(url, 'base64'),
          userId: session.user.id,
          type: type,
        },
      });
    }

    return NextResponse.json({
      success: 1,
      file: {
        url: base64Url,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: 0,
        file: {
          url: '',
        },
        message: error,
      },
      {
        status: 500,
      },
    );
  }
};
