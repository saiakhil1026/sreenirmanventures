
import React, { useState } from 'react';
import { CONTACT_EMAIL } from '../constants';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [smsConsent, setSmsConsent] = useState(false);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequestConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill in all the details before requesting a consultation.");
      return;
    }

    if (!smsConsent) {
      alert("Please agree to the terms and authorize notifications to proceed.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing in .env file');
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSmsConsent(false);
      // alert("Message sent successfully!");
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      // alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => `w-full bg-[#111] border py-4 px-6 text-white font-light placeholder:text-white/20 transition-all duration-500 outline-none
    ${focusedField === fieldName
      ? 'border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.1)] bg-[#161616]'
      : 'border-white/10 hover:border-white/20'}`;

  const labelClasses = "text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-2 block";

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden scroll-mt-24">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#d4af37] text-sm uppercase tracking-[0.5em] mb-4 block font-medium">Inquiry</span>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-6">
            Let's <span className="gold-gradient italic">Connect</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            We are ready to turn your vision into reality. Reach out and let's discuss about project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-display text-white mb-8 border-b border-white/10 pb-6 relative">
                Contact Information
                <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#d4af37]"></span>
              </h3>

              <div className="space-y-8">
                <div className="flex gap-6 group items-start">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37] transition-all duration-500 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 font-semibold">Phone</p>
                    <a href="tel:+918688637899" className="block text-white text-xl font-light tracking-wide hover:text-[#d4af37] transition-colors duration-300">
                      +91 86886 37899
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 group items-start">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37] transition-all duration-500 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 font-semibold">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="block text-white/90 text-lg font-light tracking-wide hover:text-[#d4af37] transition-colors duration-300 break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 group items-start">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/5 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37] transition-all duration-500 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 font-semibold">Office</p>
                    <a
                      href="https://www.google.com/maps/place/Dr+Rajesh+marudalam+-smileline+dental+care+and+implant+centre/@16.3120893,80.4333558,19z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3a4a755fae324b0b:0xe097f6a8d4ce9ae6!2sKoritepadu,+Guntur,+Andhra+Pradesh+522007!3b1!8m2!3d16.3150785!4d80.4347383!16s%2Fg%2F1tfcls0b!3m5!1s0x3a4a75ff7b45444b:0x3b505c4ae8d29e4f!8m2!3d16.312088!4d80.4339995!16s%2Fg%2F11fhvqz691?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/90 text-lg font-light tracking-wide leading-relaxed hover:text-[#d4af37] transition-colors duration-300"
                    >
                      Koritipadu Main Road<br />
                      Guntur, Andhra Pradesh - 522005
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <h4 className="text-xl font-display text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                Working Hours
              </h4>
              <ul className="space-y-4 text-white/60 font-light tracking-wide text-sm">
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40"></span>
                    <span>Sunday - Saturday</span>
                  </div>
                  <span className="text-white">10:00 AM - 6:00 PM</span>
                </li>
                {/* <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-white">10:00 AM - 4:00 PM</span></li> */}
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40"></span>
                    <span>Tuesday</span>
                  </div>
                  <span className="text-[#d4af37] italic">By Appointment Only</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#050505] border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#d4af37]/10 to-transparent pointer-events-none"></div>

            <h3 className="text-3xl font-display text-white mb-2">Send a Message</h3>
            <p className="text-white/40 text-sm font-light mb-10">We will respond to your inquiry within 24 hours.</p>

            <form className="space-y-6" onSubmit={handleRequestConsultation}>
              <div className="space-y-1">
                <label className={labelClasses}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Sree"
                  className={inputClasses('name')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className={labelClasses}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="sree@example.com"
                    className={inputClasses('email')}
                  />
                </div>
                <div className="space-y-1">
                  <label className={labelClasses}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="+91 98765 43210"
                    className={inputClasses('phone')}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelClasses}>Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Write your message here..."
                  className={inputClasses('message')}
                ></textarea>
              </div>

              {/* Disclaimer and Consent */}
              <div className="space-y-4">
                <p className="text-white/60 text-xs leading-relaxed">
                  By clicking Submit Request, you agree to our <span className="text-[#d4af37]">Terms of Service</span> and that you have read our <span className="text-[#d4af37]">Privacy Policy</span>
                </p>
                <div className="flex items-start gap-3">
                  <div className="relative flex items-center pt-1">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="peer h-4 w-4 appearance-none border border-white/20 bg-transparent checked:border-[#d4af37] checked:bg-[#d4af37] transition-all cursor-pointer rounded-sm"
                    />
                    <svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5 top-1.5 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <label htmlFor="smsConsent" className="text-white/60 text-xs cursor-pointer select-none">
                    I hereby authorize to send notification on SMS/Messages/Promotional/Informational messages <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full py-5 bg-[#d4af37] text-black overflow-hidden mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                <span className="relative text-xs font-bold uppercase tracking-[0.4em] group-hover:tracking-[0.5em] transition-all duration-300">
                  {isSubmitting ? 'Sending...' : 'Request Consultation'}
                </span>
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm text-center mt-2 tracking-wide">Message sent successfully! We will contact you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2 tracking-wide">Failed to send message. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
