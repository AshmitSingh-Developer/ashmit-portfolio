export const HireMeToSenderMailTemplate=({
  fullName,
}: {
  fullName: string
}) => {
    return `
    <div style="font-family: 'Inter', 'Segoe UI', sans-serif; max-width: 640px; margin: 40px auto; background: linear-gradient(135deg, #0A0E1A 0%, #1A1B3A 25%, #2D1B69 50%, #1A1B3A 75%, #0A0E1A 100%); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 24px; padding: 42px 34px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px rgba(0, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.12); position: relative; overflow: hidden; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

        <!-- Subtle Background Animation -->
        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 30% 40%, rgba(0, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(124, 227, 255, 0.06) 0%, transparent 50%); pointer-events: none; z-index: 0;"></div>

        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 36px; position: relative; z-index: 1;">

          <!-- Avatar Image -->
          <img src="https://ashmit-portfolio-gamma.vercel.app/my-avatar2.png" 
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
            " />

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
            <a href="https://wa.me/919936416928?text=Hey%20Ashmit%20%F0%9F%91%8B%2C%20I%20just%20visited%20your%20portfolio%20%F0%9F%91%80%20and%20was%20really%20impressed%20%E2%9C%A8.%20Let%E2%80%99s%20chat%20when%20you%E2%80%99re%20free%20%E2%8F%B3." style="display: inline-block; margin: 0 8px 8px 8px; padding: 8px 12px; border-radius: 8px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(0, 255, 255, 0.2); color: #7CE3FF; text-decoration: none; font-size: 12px; transition: all 0.3s ease; font-weight: 500;">💬 WhatsApp</a>
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
    `
}