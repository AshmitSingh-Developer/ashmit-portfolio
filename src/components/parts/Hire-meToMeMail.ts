export const HireMeToMeMailTemplate =({
  fullName,
  email,
  mobile,
  company,
  message,
  suitableDate,
  time,
  communication,
}: {
  fullName: string
  email: string
  mobile?: string
  company?: string
  message: string
  suitableDate?: string
  time?: string
  communication?: string
}) => {
    return `
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
    `
}