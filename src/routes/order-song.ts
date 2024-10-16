import { sendEmail } from '@service/send-email.service';
import { Router } from 'express';
import { prisma } from 'src';

const orderSongRoute = Router();

orderSongRoute.post('/order-song', async (req, res) => {
  try {
    const body = req.body;
    await prisma.orderSong.create({
      data: {
        email: body.email,
        content: body.content,
        name: body.name,
        youtubeUrl: body.youtubeUrl,
        forGroom: body.forGroom,
      },
    });
    await sendEmail({
      to: body.forGroom ? 'phamnanghung.25@gmail.com' : 'dothithuha140@gmail.com',
      subject: 'New Song Order Received!',
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
      background-color: #4CAF50;
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
      color: #4CAF50;
      text-decoration: none;
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
    <!-- Email Header -->
    <div class="header">
      <h1>New Song Order Received!</h1>
    </div>

    <!-- Email Body -->
    <div class="content">
      <p>Hi Admin,</p>
      <p>You have a new song order with the following details:</p>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>YouTube URL:</strong> <a href="${body.youtubeUrl}" target="_blank">${body.youtubeUrl}</a></p>
      <iframe
        className="border border-5 border-white w-100"
        style={{
          width: "100%",
          aspectRatio: "16/9",
        }}
        src={"${body.youtubeUrl}"}
        allowFullScreen
      ></iframe>

      <p>Please take action on this request as soon as possible.</p>

      <p>Thank you!</p>
    </div>

    <!-- Email Footer -->
    <div class="footer">
      <p>&copy; 2024 Your Music Platform. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`,
    });
    res.json({
      success: true,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default orderSongRoute;
