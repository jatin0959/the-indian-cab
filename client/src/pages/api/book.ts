import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { name, phone, email, pickup, drop, datetime, cabType } = req.body;

  try {
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: 'support@theindiancab.com',
          pass: process.env.EMAIL_PASS,
        },
        logger: true,
        debug: true,
      });
      await transporter.verify();

      
      
    

    await transporter.sendMail({
      from: 'support@theindiancab.com',
      to: 'support@theindiancab.com',
      subject: `New Cab Booking Request from ${name}`,
      html: `
        <h2>Cab Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Drop:</strong> ${drop}</p>
        <p><strong>Date & Time:</strong> ${datetime}</p>
        <p><strong>Cab Type:</strong> ${cabType}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email sending failed' });
  }
}
