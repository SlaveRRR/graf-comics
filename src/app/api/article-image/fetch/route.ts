import { NextResponse, type NextRequest } from 'next/server';
import axios from 'axios';
import prisma from '@/services/prisma';
import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';

export const POST = async (request: NextRequest) => {
  try {
    const session = await getServerSession(options);
    const { url }: { url: string } = await request.json();
    const fileName = `${url.slice(url.lastIndexOf('/') + 1)}_${session.user.id}`;
    const image = await prisma.articleImage.findUnique({
      where: {
        name: fileName,
      },
    });
    if (image) {
      const existedUrl = `data:image/jpeg;base64,${image.image.toString('base64')}`;
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
      base64Url = url;
      await prisma.articleImage.create({
        data: {
          name: fileName,
          image: Buffer.from(url, 'base64'),
          userId: session.user.id,
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
      }
    );
  }
};
