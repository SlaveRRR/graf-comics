import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import { v4 as uuid } from 'uuid';
import { getServerSession } from 'next-auth';
import { options } from '../../auth/[...nextauth]/options';

export const POST = async (request: NextRequest) => {
  try {
    const session = await getServerSession(options);

    const formData = await request.formData();
    const file = formData.get('image') as File;
    console.log(file);
    const fileName = `${file.name}_${session.user.id}`;
    console.log(fileName);

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

    const result = await prisma.articleImage.create({
      data: {
        name: fileName,
        image: Buffer.from(await file.arrayBuffer()),
        userId: session.user.id,
      },
    });
    const responseUrl = `data:image/jpeg;base64,${result.image.toString('base64')}`;
    return NextResponse.json({
      success: 1,
      file: {
        url: responseUrl,
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
