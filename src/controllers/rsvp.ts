import { StatusCode } from '@constant/statusCode';
import { createRSVP, getRSVP } from '@service/rsvp';
import { sendEmail } from '@service/send-email.service';
import { Request, Response } from 'express';
import { ListRSVP, RSVP } from 'src/dtos/rsvp';
import { validator } from 'src/utils/validator';

export const getRSVPController = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const page = parseInt(query.page as string);
    const limit = parseInt(query.limit as string);
    await validator<ListRSVP>({ page, limit }, ListRSVP);
    const dataRSVP = await getRSVP(page, limit);
    res.json({
      rsvp: dataRSVP,
    });
  } catch (error: unknown) {
    res.status(StatusCode.BadRequest).json({
      message: error,
    });
  }
};

export const createRSVPController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const rsvp = await validator<RSVP>(body, RSVP);
    const dataRSVP = await createRSVP(rsvp);
    await sendEmail({
      to: 'phamnanghung.25@gmail.com',
      subject: 'New Wish Received!',
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
            color: #333;
          }
          .content p {
            margin: 10px 0;
            line-height: 1.6;
          }
          .content a {
            color: #007BFF;
            text-decoration: none;
          }
          .button {
            display: block;
            width: 200px;
            margin: 20px auto;
            padding: 10px 0;
            background-color: #007BFF;
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
          }
          .footer {
            text-align: center;
            padding: 10px;
            background-color: #f4f4f4;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Wish Received!</h1>
          </div>
          <div class="content">
            <p>Hi Admin,</p>
            <p>You have received a new wish with the following details:</p>
            <p><strong>Name:</strong> ${rsvp.name}</p>
            <p><strong>Email:</strong>  ${rsvp.email}</p>
            <p><strong>Message:</strong></p>
            <p>${rsvp.content}</p>
            <a href="https://hungpn256.click/verify-rsvp?id=${dataRSVP.id}" class="button">View All Wishes</a>
          </div>
          <div class="footer">
            <p>&copy; 2024 Your Wishes Platform. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
`,
    });
    res.json({
      rsvp: dataRSVP,
    });
  } catch (error: unknown) {
    res.status(StatusCode.BadRequest).json({
      message: error,
    });
  }
};
