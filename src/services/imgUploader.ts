import { imgbbUploader as uploader } from 'imgbb-uploader';

interface Options {
  apiKey: string;
  imagePath?: string;
  imageUrl?: string;
  base64string?: string;
  name?: string;
  expiration?: string;
}

const imgUploaderWrapper = (apiKey: string) => {
  return async (options: Omit<Options, 'apiKey'>) => {
    try {
      const uploadOptions: Options = {
        apiKey,
        ...options,
      };

      return await uploader(uploadOptions);
    } catch (error) {
      console.error(error);
    }
  };
};

export const imgUploader = imgUploaderWrapper(process.env.IMGBB_KEY);
