import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { EmailTemplate } from "../../../../emails/my-email";
import React from "react";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectDetails, budget, deadline } = body;

    if (!name || !email || !phone || !projectDetails || !budget || !deadline) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Secure SMTP credentials via environment variables
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465, // Use 587 for TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_MAIL_ID, // Replace with your Zoho email
        pass: process.env.ZOHO_MAIL_PASS, // Use the app password if MFA is enabled
      },
    });

    const emailHtml = await render(
      React.createElement(EmailTemplate, { ...body })
    );

    await transporter.sendMail({
      from: "raj@tectratechnologies.com", // Use a verified domain email
      to: "riturajsingh3001@gmail.com",
      replyTo: email, // This ensures replies go to the user's email
      subject: `New Project Inquiry from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Email sending failed", error: errorMessage },
      { status: 500 }
    );
  }
}
