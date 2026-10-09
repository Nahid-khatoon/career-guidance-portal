import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Info, ShieldCheck } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., student@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your question.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Valid submission simulated purely in frontend
      setIsSubmitted(true);
      setErrors({});
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-t border-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have a Career Guidance Query?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Send us feedback or questions about educational pathways, career resources, or suggestions for new guides.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
          {isSubmitted ? (
            /* Success Feedback Card */
            <div className="text-center py-8 px-4 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Message Received in Demo Mode!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your query about <em>"{formData.subject}"</em> has been verified successfully.
              </p>

              <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 max-w-md mx-auto text-xs text-purple-900 flex items-start gap-2.5 text-left">
                <Info className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Frontend Demo Notice:</strong> As this is a 100% static demo portal, your response has been handled entirely in your local browser session. No personal information has been transmitted, shared, or stored to a remote server.
                </span>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Nahid Shams"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${errors.fullName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                      }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. nahid@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${errors.email ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Subject / Topic <span className="text-rose-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Question regarding After Class 12 Computer Science paths"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${errors.subject ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                    }`}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe what specific advice or educational pathways you would like clarity on..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-y ${errors.message ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200'
                    }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Security & Static Note */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>We do not collect passwords, banking details, or sensitive IDs. Strictly informational.</span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry (Demo)</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
