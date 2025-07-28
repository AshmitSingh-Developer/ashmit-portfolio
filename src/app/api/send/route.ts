import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import {HireMeToMeMailTemplate} from '@/components/parts/Hire-meToMeMail'
import {HireMeToSenderMailTemplate} from '@/components/parts//Hire-meToSenderMail'

// ✅ Zod schema
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  suitableDate: z.string().optional(),
  time: z.string().optional(),
  communication: z.string().optional(),
});

export async function POST(req: Request) {
  try {
   
    const body = await req.json();
   
    const parsed = formSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
        { success: false, error: parsed.error.issues },
        { status: 400 }
      );
    }

        // ✅ Check Gmail credentials BEFORE using them
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error("GMAIL credentials are missing in .env");
    }

    const {
      fullName,
      email,
      mobile,
      company,
      message,
      suitableDate,
      time,
      communication,
    } = parsed.data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });


    // ✅ Build HTML email content for ourselve
    const htmlForMe =  HireMeToMeMailTemplate({
      fullName,email, mobile,company,message,suitableDate,time, communication,
    });
 
 
    // ✅ Build HTML email content for sender
    const htmlForSender = HireMeToSenderMailTemplate({ fullName });
   
    // ✅ Send the email to ourselves    
    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.GMAIL_USER, // your inbox
      subject: `New Hire-Me Form Submission from ${fullName}`,
      html: htmlForMe,
    });
        
    // ✅ Auto-reply to the sender
    await transporter.sendMail({
      from: `"Ashmit Singh Portfolio" <your_email@gmail.com>`, // your brand name and email
      to: email, // sender's email
      subject: `Thank you for contacting Ashmit Singh`,
      html: htmlForSender,
    });
    
     
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🚨 Email send error:", error);
    return NextResponse.json({ success: false, error: "Something went wrong!" }, { status: 500 });
  }
}
