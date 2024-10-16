import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'phamnanghung.25@gmail.com',
    pass: 'wcffnontkuuifvle',
  },
});

export const sendEmail = async (data: Mail.Options): Promise<boolean> => {
  try {
    await transporter.sendMail(data);
    return true;
  } catch {
    return false;
  }
};
