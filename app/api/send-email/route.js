import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// This uses Gmail's SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // app password
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, title, mood, content } = body;

    if (!email || !content) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const mailOptions = {
      from: `"Your Journal" <${process.env.EMAIL_USER}>`,
      to: email, // send to whoever is logged in
      subject: `Your Journal Entry: ${title || "Untitled"}`,
      html: `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #4CAF50; margin-top: 0;">${title || "Untitled"}</h2>
          <p style="font-size: 16px;"><strong>Mood:</strong> ${mood || "Not specified"}</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
          <div style="font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
            ${content}
          </div>
          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            Sent via <strong>Your Daily Journal</strong>
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent", info });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
