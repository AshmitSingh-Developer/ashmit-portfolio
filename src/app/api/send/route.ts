import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

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
    const htmlForMe = `
     <div style="font-family: 'Inter', 'Segoe UI', sans-serif; max-width: 640px; margin: 40px auto; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #0a0a0a 100%); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 24px; padding: 42px 34px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px rgba(0, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.12); position: relative; overflow: hidden;">

        <!-- Subtle Background Animation -->
        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 30% 40%, rgba(0, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(124, 227, 255, 0.06) 0%, transparent 50%); animation: float 25s ease-in-out infinite; pointer-events: none;"></div>

        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 36px; position: relative;">
          <!-- Avatar Image -->
          <img 
            src="https://ashmit-portfolio-gamma.vercel.app/my-avatar2.png" 
            alt="Ashmit Singh" 
            style="
              width: 72px; 
              height: 72px; 
              border-radius: 50%; 
              background: rgba(255, 255, 255, 0.025); 
              border: 1.5px solid rgba(0, 255, 255, 0.15);
              box-shadow:
                0 0 6px rgba(0, 255, 255, 0.2),
                0 0 12px rgba(0, 255, 255, 0.25),
                0 0 20px rgba(0, 255, 255, 0.3);
              backdrop-filter: blur(4px);
            " 
          />
          
          <h1 style="margin: 18px 0 6px; font-size: 22px; background: linear-gradient(135deg, #00F6FF, #7CE3FF, #00FFE0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent; font-weight: 600; text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);">
            🎯 New Opportunity Alert! ✨
          </h1>
          <p style="font-size: 14px; color: #A3B4CE; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);">
            💼 Someone is interested in working with you
          </p>
        </div>

        <!-- Client Information Section -->
        <div style="background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 20px; padding: 32px 28px; margin-bottom: 32px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 255, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2);">
          
          <h2 style="color: #F0F6FF; margin: 0 0 24px 0; font-size: 17px; font-weight: 600; display: flex; align-items: center; gap: 10px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">
            👤 Client Information
          </h2>
          
          <div style="border-top: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 24px; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);"></div>
          
          <div style="display: grid; gap: 24px;">
            <!-- Name Field -->
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(0, 255, 255, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #7CE3FF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">${fullName}</p>
            </div>
            
            <!-- Email Field -->
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(0, 255, 224, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #00FFE0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📧 Email Address</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); word-break: break-all;">${email}</p>
            </div>
            
            <!-- Mobile Field (Conditional) -->
            ${mobile ? `
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(124, 227, 255, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #7CE3FF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📱 Mobile Number</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">${mobile}</p>
            </div>
            ` : ''}
            
            <!-- Company Field (Conditional) -->
            ${company ? `
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #60A5FA; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🏢 Company</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">${company}</p>
            </div>
            ` : ''}
          </div>
        </div>

        <!-- Meeting Preferences Section (Conditional) -->
        ${suitableDate || time || communication ? `
        <div style="background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 20px; padding: 32px 28px; margin-bottom: 32px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 255, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2);">
          
          <h2 style="color: #F0F6FF; margin: 0 0 24px 0; font-size: 17px; font-weight: 600; display: flex; align-items: center; gap: 10px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">
            📅 Meeting Preferences
          </h2>
          
          <div style="border-top: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 24px; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);"></div>
          
          <div style="display: grid; gap: 24px;">
            ${suitableDate ? `
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(0, 255, 255, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #00FFE0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📆 Preferred Date</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">${new Date(suitableDate).toDateString()}</p>
            </div>
            ` : ''}
            
            ${time ? `
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(124, 227, 255, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #7CE3FF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🕐 Preferred Time</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">${time}</p>
            </div>
            ` : ''}
            
            ${communication ? `
            <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 16px; padding: 16px 20px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
              <span style="color: #60A5FA; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">💬 Communication Method</span>
              <p style="margin: 6px 0 0 0; color: #F0F6FF; font-size: 16px; font-weight: 600; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">${communication}</p>
            </div>
            ` : ''}
          </div>
        </div>
        ` : ''}

        <!-- Project Message Section -->
        <div style="background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 20px; padding: 32px 28px; margin-bottom: 32px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 255, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2);">
          
          <h2 style="color: #F0F6FF; margin: 0 0 24px 0; font-size: 17px; font-weight: 600; display: flex; align-items: center; gap: 10px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">
            💌 Project Message
          </h2>
          
          <div style="border-top: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 24px; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);"></div>
          
          <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(0, 255, 255, 0.2); border-radius: 16px; padding: 20px 24px; position: relative; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);">
            
            <div style="color: #E6EDF5; font-size: 15px; line-height: 1.6; font-weight: 400; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); word-wrap: break-word;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div style="background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 20px; padding: 32px 28px; margin-bottom: 36px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 255, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.2); text-align: center;">
          
          <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 700; color: #F0F6FF; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);">
            🎯 Ready to Connect?
          </h3>
          <p style="margin: 0; font-size: 14px; color: #A3B4CE; font-weight: 500; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);">
            This client is waiting for your response
          </p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; font-size: 12.5px; color: #8897AD; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);">
          
          <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 15px; flex-wrap: wrap;">
            <div style="width: 6px; height: 6px; background: #00F6FF; border-radius: 50%; animation: pulse-dot 2s ease-in-out infinite; box-shadow: 0 0 8px rgba(0, 255, 255, 0.6);"></div>
            <span style="color: #A3B4CE; font-size: 13px; font-weight: 500; text-align: center;">🌌 Generated via Ashmit Portfolio</span>
            <div style="width: 6px; height: 6px; background: #7CE3FF; border-radius: 50%; animation: pulse-dot 2s ease-in-out infinite reverse; box-shadow: 0 0 8px rgba(124, 227, 255, 0.6);"></div>
          </div>
          
          <p style="margin: 0; text-align: center;">© ${new Date().getFullYear()} <strong style="color: #00FFD6;">Ashmit Technology</strong> — All Rights Reserved</p>
        </div>

        </div>

        <style>
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
             
        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.9); }
        }
        
        /* Responsive Design */
        @media screen and (max-width: 768px) {
            .container { margin: 20px 10px !important; padding: 24px 20px !important; }
            h1 { font-size: 20px !important; }
            h2 { font-size: 16px !important; }
            img[alt="Ashmit Singh"] { width: 60px !important; height: 60px !important; }
        }
        
        @media screen and (max-width: 480px) {
            .container { margin: 15px 8px !important; padding: 20px 16px !important; }
            h1 { font-size: 18px !important; }
            div[style*="padding: 32px 28px"] { padding: 20px 16px !important; }
            div[style*="padding: 16px 20px"] { padding: 12px 16px !important; }
        }
        </style>
    `;
 
 
    // ✅ Build HTML email content for sender
    const htmlForSender = `
      <div style="font-family: 'Inter', 'Segoe UI', sans-serif; max-width: 640px; margin: 40px auto; background: linear-gradient(135deg, #0A0E1A 0%, #1A1B3A 25%, #2D1B69 50%, #1A1B3A 75%, #0A0E1A 100%); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 24px; padding: 42px 34px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px rgba(0, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.12); position: relative; overflow: hidden; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

        <!-- Subtle Background Animation -->
        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 30% 40%, rgba(0, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(124, 227, 255, 0.06) 0%, transparent 50%); pointer-events: none; z-index: 0;"></div>

        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 36px; position: relative; z-index: 1;">

          <!-- Avatar Image -->
          <img src="https://ashmit-portfolio-gamma.vercel.app/my-avatar2.png" alt="Ashmit Singh" style="width: 72px; height: 72px; border-radius: 50%; background: rgba(255, 255, 255, 0.025); border: 1.5px solid rgba(0, 255, 255, 0.15); box-shadow: 0 0 4px rgba(0, 255, 255, 0.12), 0 0 8px rgba(0, 255, 255, 0.1), 0 0 16px rgba(0, 255, 255, 0.15); transition: all 0.3s ease; display: block; margin: 0 auto; -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;" />

          <!-- Main Title -->
          <h1 style="margin: 18px 0 6px; font-size: 22px; background: linear-gradient(135deg, #00F6FF, #7CE3FF, #00FFE0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #00F6FF; font-weight: 600; text-shadow: 0 0 20px rgba(0, 255, 255, 0.3); text-align: center; line-height: 1.2; -webkit-font-smoothing: antialiased;">
            Thanks for Reaching Out ✨
          </h1>

          <!-- Subtitle -->
          <p style="font-size: 14px; color: #A3B4CE; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); text-align: center; margin: 0; line-height: 1.4; -webkit-font-smoothing: antialiased;">
            Your message has been safely received by Ashmit Singh
          </p>
        </div>

        <!-- Main Content Card -->
        <div style="background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 18px; padding: 28px 24px; font-size: 15px; color: #E6EDF5; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1); position: relative; z-index: 1;">

          <!-- Greeting -->
          <p style="font-size: 17px; margin: 0 0 24px 0; color: #F0F6FF; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); line-height: 1.4; -webkit-font-smoothing: antialiased;">
            Hi <span style="background: linear-gradient(135deg, #00F6FF 0%, #7CE3FF 25%, #00FFE0 50%, #60A5FA 75%, #00F6FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #00F6FF; font-weight: 700; text-shadow: 0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(124, 227, 255, 0.4); filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));">${fullName}</span>,
          </p>

          <!-- Main Content Text -->
          <p style="font-size: 15px; line-height: 1.6; color: #E6EDF5; margin: 0 0 24px 0; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); -webkit-font-smoothing: antialiased;">
            Thank you for taking the time to connect through my portfolio. Whether you're sharing a suggestion, a kind message, a thoughtful idea, or just saying hello — these are deeply appreciated and it genuinely means a lot to me.
          </p>

          <!-- Message Info Box -->
          <div style="background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(0,0,0,0.1)); border: 1px solid rgba(124, 227, 255, 0.25); border-radius: 12px; padding: 18px 20px; margin: 24px 0; font-size: 14.6px; line-height: 1.7; color: #E1EDFF;">
            <strong style="color: #7CE3FF; font-weight: 600;">📬 Message received on:</strong> ${new Date().toDateString()}
          </div>

          <!-- Second Content Text -->
          <p style="font-size: 15px; line-height: 1.6; color: #E6EDF5; margin: 0 0 24px 0; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); -webkit-font-smoothing: antialiased;">
            I'll review your message and reach out personally at the earliest. In the meantime, feel free to explore more at <a href="https://ashmit-portfolio-gamma.vercel.app/" style="color: #00FFE0; text-decoration: none; text-shadow: 0 0 8px rgba(0, 255, 224, 0.4);">ashmitsingh.dev</a> and connect with me through various platforms.
          </p>
          
          <!-- Social Links Section -->
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://www.linkedin.com/in/ashmit-singh-gps-ixb-1b89b6235/" style="display: inline-block; margin: 0 8px 8px 8px; padding: 8px 12px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(0, 255, 255, 0.2); color: #7CE3FF; text-decoration: none; font-size: 12px; transition: all 0.3s ease; font-weight: 500;">💼 LinkedIn</a>
            <a href="https://github.com/AshmitSingh-Developer" style="display: inline-block; margin: 0 8px 8px 8px; padding: 8px 12px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(0, 255, 255, 0.2); color: #7CE3FF; text-decoration: none; font-size: 12px; transition: all 0.3s ease; font-weight: 500;">💻 GitHub</a>
            <a href="mailto:ashmit25092001singh@gmail.com" style="display: inline-block; margin: 0 8px 8px 8px; padding: 8px 12px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(0, 255, 255, 0.2); color: #7CE3FF; text-decoration: none; font-size: 12px; transition: all 0.3s ease; font-weight: 500;">✉️ Email</a>
          </div>

          <!-- Divider -->
          <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.15); margin: 28px 0; box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);" />

          <!-- Signature -->
          <div style="font-size: 15px; margin-top: 32px; color: #F0F6FF; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); line-height: 1.5; -webkit-font-smoothing: antialiased;">
            Warm regards,<br />
            <strong style="background: linear-gradient(135deg, #00F6FF, #7CE3FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #00F6FF; text-shadow: 0 0 10px rgba(0, 255, 255, 0.4); font-weight: 600;">Ashmit Singh</strong><br />
            <span style="color: #A3B4CE; font-size: 14px; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4); font-weight: 400;">Web Developer • Passionate Creator</span>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; font-size: 12.5px; margin-top: 38px; color: #8897AD; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); position: relative; z-index: 1; line-height: 1.4; -webkit-font-smoothing: antialiased;">
          <p style="margin: 0 0 6px 0;">This message was automatically generated via Ashmit's portfolio.</p>
          <p style="margin: 0;">© ${new Date().getFullYear()} <strong style="background: linear-gradient(135deg, #00FFD6, #7CE3FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #00FFD6; text-shadow: 0 0 8px rgba(0, 255, 214, 0.4); font-weight: 600;">Ashmit Technology</strong> — All Rights Reserved.</p>
        </div>
      </div>

      <!-- Media Queries for Responsive Design (Place in <style> tag in email head) -->
      <style>
      @media only screen and (max-width: 640px) {
        .email-container {
          margin: 20px auto !important;
          padding: 30px 20px !important;
          border-radius: 18px !important;
        }
        
        .main-title {
          font-size: 20px !important;
        }
        
        .greeting {
          font-size: 16px !important;
        }
        
        .content-text {
          font-size: 14px !important;
        }
        
        .avatar {
          width: 60px !important;
          height: 60px !important;
        }
        
        .info-box {
          padding: 15px !important;
          font-size: 13px !important;
        }
        
        .social-link {
          margin: 0 4px 6px 4px !important;
          padding: 6px 10px !important;
          font-size: 11px !important;
        }
      }

      @media only screen and (max-width: 480px) {
        .email-container {
          margin: 15px auto !important;
          padding: 25px 18px !important;
          border-radius: 15px !important;
        }
        
        .content-card {
          padding: 20px 16px !important;
          border-radius: 12px !important;
        }
        
        .main-title {
          font-size: 18px !important;
          margin: 15px 0 5px !important;
        }
        
        .subtitle {
          font-size: 13px !important;
        }
        
        .greeting {
          font-size: 15px !important;
          margin-bottom: 20px !important;
        }
        
        .content-text {
          font-size: 13px !important;
          line-height: 1.5 !important;
          margin-bottom: 20px !important;
        }
        
        .avatar {
          width: 50px !important;
          height: 50px !important;
        }
        
        .info-box {
          padding: 12px !important;
          font-size: 12px !important;
          margin: 20px 0 !important;
        }
        
        .signature {
          font-size: 14px !important;
          margin-top: 25px !important;
        }
        
        .signature-title {
          font-size: 13px !important;
        }
        
        .footer {
          font-size: 11px !important;
          margin-top: 30px !important;
        }
        
        .social-link {
          display: block !important;
          margin: 0 0 8px 0 !important;
          padding: 8px !important;
        }
      }
      </style>
    `;
   
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
