import nodemailer from 'nodemailer';

interface Options {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const mailTranporter = nodemailer.createTransport({
  pool: true,
  service: 'Yandex',
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});
export const mailer = async (options: Options): Promise<void> => {
  try {
    const result = await mailTranporter.sendMail({
      from: process.env.MAIL,
      ...options,
    });
    if (result.response.slice(0, 3) !== '250') {
      throw new Error(result.response);
    }
  } catch (e) {
    console.log(`Error with sending mail.\n Response ${e}`);
  }
};
