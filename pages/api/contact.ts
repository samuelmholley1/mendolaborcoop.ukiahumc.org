import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  jobDescription: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, jobDescription }: ContactFormData = req.body;

  // Validate required fields
  if (!name || !phone || !email || !jobDescription) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Create Zoho SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });

  const emailContent = `
New Inquiry from Mendo Labor Co-Op Website

Name: ${name}
Phone: ${phone}
Email: ${email}

Job Description:
${jobDescription}

---
This inquiry was submitted via the contact form at mendolaborcoop.ukiahumc.org
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2D5016; color: #FDF6E8; padding: 20px; text-align: center; }
    .content { background-color: #FDF6E8; padding: 20px; border: 2px solid #B8860B; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #B8860B; }
    .value { margin-top: 5px; }
    .job-description { background-color: #fff; padding: 15px; border-left: 4px solid #2D5016; margin-top: 10px; }
    .footer { font-size: 12px; color: #666; margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Inquiry</h1>
      <p>Mendo Labor Co-Op Website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Job Description:</div>
        <div class="job-description">${jobDescription.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      This inquiry was submitted via the contact form at mendolaborcoop.ukiahumc.org
    </div>
  </div>
</body>
</html>
  `.trim();

  try {
    await transporter.sendMail({
      from: '"Mendo Labor Co-Op New Inquiry" <alerts@samuelholley.com>',
      to: 'mendolaborcoop@gmail.com',
      bcc: 'sam@samuelholley.com',
      replyTo: email,
      subject: `New Inquiry: ${name}`,
      text: emailContent,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send inquiry. Please try calling us instead.' });
  }
}
