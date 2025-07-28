'use client';
import { useState } from 'react';
import { Plus, Upload, Github, Globe, Sparkles, Check, Loader2 } from 'lucide-react';

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
      alert('Something went wrong!');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-4 flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Main Form Container */}
        <div className="backdrop-blur-2xl bg-white/[0.08] border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-500/15 via-slate-500/15 to-gray-600/15 blur-sm"></div>
          <div className="absolute inset-[1px] rounded-3xl bg-slate-900/60 backdrop-blur-2xl"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-600 to-slate-600 mb-4 shadow-lg shadow-gray-900/25">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-slate-200 bg-clip-text text-transparent mb-2">
                Add Project
              </h1>
              <p className="text-slate-400">Add your project to your portfolio</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {fields.map((field, idx) => {
                const Icon = field.icon;
                const isActive = focusedField === field.name || form[field.name as keyof typeof form];
                
                return (
                  <div key={idx} className="group">
                    <label className="block text-sm font-medium text-slate-300 mb-2 group-hover:text-white transition-colors">
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                        isActive ? 'text-slate-300' : 'text-slate-500'
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
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm text-white placeholder-slate-500 rounded-2xl border transition-all duration-300 resize-none ${
                            isActive 
                              ? 'border-slate-400/50 shadow-lg shadow-slate-900/20 bg-white/10' 
                              : 'border-slate-700/50 hover:border-slate-600/50'
                          } focus:outline-none focus:border-slate-400/50 focus:shadow-lg focus:shadow-slate-900/20`}
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
                          className={`w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm text-white placeholder-slate-500 rounded-2xl border transition-all duration-300 ${
                            isActive 
                              ? 'border-slate-400/50 shadow-lg shadow-slate-900/20 bg-white/10' 
                              : 'border-slate-700/50 hover:border-slate-600/50'
                          } focus:outline-none focus:border-slate-400/50 focus:shadow-lg focus:shadow-slate-900/20`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="group relative w-full py-4 px-8 bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-600 hover:to-gray-600 text-white font-semibold rounded-2xl shadow-lg shadow-slate-900/50 hover:shadow-slate-900/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center space-x-2">
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Adding Project...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        <span>Add Project</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-700/40 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-emerald-300">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Project added successfully!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}