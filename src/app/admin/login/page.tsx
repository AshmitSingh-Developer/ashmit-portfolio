'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/important/toast';
import BrandLogo from '@/components/important/LogoIcon';


export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
    toast.error('Access requires a authorized email and password');
    return; 
    }
    if (!email.trim()) {
    toast.success('Please enter your email.');
    return; 
    }
    if ( !password.trim()) {
    toast.error('Please enter your password.');
    return; 
    }

    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (res.ok) {
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 300);
      } else {
        setError('Invalid credentials');
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Enhanced dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-teal-950/20"></div>
      
      {/* Animated background elements */}
      <div 
        className={`absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl transition-all duration-1000 ${
          mounted ? 'animate-pulse opacity-100' : 'opacity-0'
        }`}
        style={{ 
          animation: mounted ? 'float 6s ease-in-out infinite' : 'none' 
        }}
      />
      <div 
        className={`absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-l from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
          mounted ? 'animate-pulse opacity-100' : 'opacity-0'
        }`}
        style={{ 
          animation: mounted ? 'float 8s ease-in-out infinite reverse' : 'none' 
        }}
      />
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl transition-all duration-1000 delay-1000 ${
          mounted ? 'animate-pulse opacity-100' : 'opacity-0'
        }`}
        style={{ 
          animation: mounted ? 'float 10s ease-in-out infinite' : 'none' 
        }}
      />

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-cyan-400/20 rounded-full transition-all duration-1000 delay-${i * 100} ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: mounted ? `twinkle 3s ease-in-out infinite ${i * 0.5}s` : 'none'
            }}
          />
        ))}
      </div>

      {/* Login form container */}
      <div 
        className={`relative z-10 w-full max-w-sm sm:max-w-md transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <form
          onSubmit={handleLogin}
          className="group relative bg-white/[0.02] backdrop-blur-3xl border border-cyan-400/20 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 overflow-hidden"
        >
          {/* Enhanced glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent rounded-2xl sm:rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-teal-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Form content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-6 unselectable sm:space-y-8">
            {/* Header */}
            <div 
              className={`text-center space-y-3 sm:space-y-4 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-black/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25 transition-transform duration-300  "
                style={{ 
                  animation: mounted ? 'glow 2s ease-in-out infinite alternate' : 'none' 
                }}
              >
               
                <BrandLogo className="w-7 h-7 sm:w-8 sm:h-8"/>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Admin Portal
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">Only permitted members are allowed to log in</p>
            </div>

            {/* Error message */}
            {error && (
              <div 
                className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-3 sm:p-4 text-red-400 text-center text-sm animate-shake"
                style={{ 
                  animation: 'shake 0.5s ease-in-out, fadeInUp 0.3s ease-out' 
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Email input */}
            <div 
              className={`space-y-2 transition-all duration-700 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <label className="text-sm sm:text-base font-medium text-cyan-300 block">Authorized Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-cyan-400/60 group-focus-within:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="admin@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/[0.03] backdrop-blur-sm border border-cyan-400/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] text-sm sm:text-base"
                  
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Password input */}
            <div 
              className={`space-y-2 transition-all duration-700 delay-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <label className="text-sm sm:text-base font-medium text-cyan-300 block">Authorized Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-cyan-400/60 group-focus-within:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-14 py-3 sm:py-4 bg-white/[0.03] backdrop-blur-sm border border-cyan-400/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] text-sm sm:text-base"
                  
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-cyan-400/60 hover:text-cyan-400 focus:text-cyan-400 transition-all duration-200 transform hover:scale-110"
                >
                  <div className="relative">
                    {showPassword ? (
                      <svg className="w-5 h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </div>
                </button>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            {/* Login button */}
            <div 
              className={`transition-all duration-700 delay-900 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative py-3 sm:py-4 px-6 bg-gradient-to-r from-cyan-500 via-teal-600 to-emerald-600 hover:from-cyan-600 hover:via-teal-700 hover:to-emerald-700 font-Helvetica text-black/90 font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden text-sm sm:text-base group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Sign In</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-600 to-emerald-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </button>
            </div>

            {/* Footer */}
            <div 
              className={`text-center pt-2 transition-all duration-700 delay-1100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center space-x-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Protected by Ashmit Technology security</span>
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
          100% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.6), 0 0 40px rgba(20, 184, 166, 0.3); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 640px) {
          .animate-pulse {
            animation-duration: 3s;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}