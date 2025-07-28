'use client';
import { useState } from 'react';
import { Plus, Upload, Github, Globe, Sparkles, Check, Loader2 } from 'lucide-react';
import { toast } from '@/components/important/toast';

export default function AddProject() {
  const [form, setForm] = useState({
    title: '',
    des: '',
    img: '',
    iconLists: '',
    link: '',
    github: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


     // Validate all fields are filled
    const isFormValid = Object.values(form).every(value => value.trim() !== '');
    if (!isFormValid) {
      toast.error('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    setSuccess(false);

    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        iconLists: form.iconLists.split(',').map(s => s.trim())
      })
    });

    if (res.ok) {
      setForm({
        title: '',
        des: '',
        img: '',
        iconLists: '',
        link: '',
        github: ''
      });
      setSuccess(true);
    } else {
      toast.error('Something went wrong!');
    }
    

    setLoading(false);
  };

  const fields = [
    { 
      name: 'title', 
      placeholder: 'Enter project title', 
      label: 'Project Title',
      icon: Sparkles
    },
    { 
      name: 'des', 
      placeholder: 'Describe your amazing project...', 
      label: 'Description',
      textarea: true,
      icon: Plus
    },
    { 
      name: 'img', 
      placeholder: 'https://example.com/image.jpg', 
      label: 'Project Image',
      icon: Upload
    },
    { 
      name: 'iconLists', 
      placeholder: 'React, Next.js, TypeScript, Tailwind', 
      label: 'Technologies Used',
      icon: Plus
    },
    { 
      name: 'link', 
      placeholder: 'https://yourproject.com', 
      label: 'Live Demo URL',
      icon: Globe
    },
    { 
      name: 'github', 
      placeholder: 'https://github.com/username/repo', 
      label: 'GitHub Repository',
      icon: Github
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-stone-50 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Soft Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/60 backdrop-blur-sm"></div>
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative w-full max-w-2xl">
        {/* Main Form Container */}
        <div className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl p-10 shadow-2xl shadow-gray-500/10 relative">
          {/* Soft Inner Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-white/30 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-3xl shadow-inner shadow-gray-100/50"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-600 mb-6 shadow-xl shadow-gray-400/20">
                <Plus className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <h1 className="text-5xl font-bold text-gray-800 mb-3 tracking-tight drop-shadow-sm">
                Add Project
              </h1>
              <p className="text-gray-600 text-lg font-medium">Create a new portfolio entry</p>
            </div>

            {/* Form */}
            <div className="space-y-8">
              {fields.map((field, idx) => {
                const Icon = field.icon;
                const isActive = focusedField === field.name || form[field.name as keyof typeof form];
                
                return (
                  <div key={idx} className="group">
                    <label className="block text-sm font-bold text-gray-800 mb-3 tracking-wide uppercase">
                      {field.label} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                        isActive ? 'text-gray-700 scale-110' : 'text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {field.textarea ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField('')}
                          rows={4}
                          required
                          className={`w-full pl-14 pr-6 py-5 bg-gray-50/60 text-gray-800 placeholder-gray-400 rounded-2xl border-2 transition-all duration-200 resize-none font-medium ${
                            isActive 
                              ? 'border-gray-700 bg-white/90 shadow-lg shadow-gray-400/15 ring-4 ring-gray-200/40' 
                              : 'border-gray-200/80 hover:border-gray-300 hover:bg-white/70'
                          } focus:outline-none`}
                        />
                      ) : (
                        <input
                          type="text"
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField('')}
                          required
                          className={`w-full pl-14 pr-6 py-5 bg-gray-50/60 text-gray-800 placeholder-gray-400 rounded-2xl border-2 transition-all duration-200 font-medium ${
                            isActive 
                              ? 'border-gray-700 bg-white/90 shadow-lg shadow-gray-400/15 ring-4 ring-gray-200/40' 
                              : 'border-gray-200/80 hover:border-gray-300 hover:bg-white/70'
                          } focus:outline-none`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="group relative w-full py-6 px-8 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-bold rounded-2xl shadow-xl shadow-gray-500/25 hover:shadow-2xl hover:shadow-gray-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01] active:scale-[0.99] text-lg tracking-wide"
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center space-x-3">
                    {loading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>ADDING PROJECT...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-6 h-6" />
                        <span>ADD PROJECT</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-2xl">
                <div className="flex items-center space-x-3 text-emerald-800">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">Project added successfully!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Professional Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 font-medium">
            All fields are required for a complete portfolio entry
          </p>
        </div>
      </div>
    </div>
  );
}