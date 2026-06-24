import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_ENDPOINT,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailBody = [
      `New appointment request from the website:`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: "Asha Counseling <ashacounsellingandtherapycenter@gmail.com>",
      to: "ashacounsellingandtherapycenter@gmail.com",
      subject: `New Appointment Request from ${name}`,
      text: emailBody,
      replyTo: "ashacounsellingandtherapycenter@gmail.com",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
