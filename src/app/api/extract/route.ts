import { NextResponse, type NextRequest } from 'next/server';
import mammoth from 'mammoth';

const options = {
  convertImage: mammoth.images.imgElement(function (image) {
    return image.read('base64').then(function (imageBuffer) {
      return {
        src: 'data:' + image.contentType + ';base64,' + imageBuffer,
      };
    });
  }),
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.formData();
    const file: any = body.get('file');
    const buffer = await file.arrayBuffer();
    const res = await mammoth.convertToHtml({ buffer: buffer }, options);
    return NextResponse.json(res.value);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
};
