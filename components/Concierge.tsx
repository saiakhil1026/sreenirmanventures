
import React, { useState, useRef, useEffect } from 'react';
import { chatWithConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';

import { CONTACT_EMAIL } from '../constants';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Welcome to SREE NIRMAN VENTURES. I am your personal concierge. How may I assist you with our bespoke villas, plots, or interior services today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Intent Detection
    const lowerInput = inputValue.toLowerCase();
    const isSalesIntent = ['buy', 'purchase', 'invest', 'price', 'cost', 'quote', 'interested'].some(word => lowerInput.includes(word));
    const isContactIntent = ['contact', 'call', 'email', 'phone', 'talk', 'speak', 'owner'].some(word => lowerInput.includes(word));

    if (isSalesIntent || isContactIntent) {
      // Delayed response to simulate typing
      setTimeout(() => {
        const contactResponse: ChatMessage = {
          role: 'assistant',
          content: "I'd be delighted to assist you with that. To provide you with the most accurate information and personalized service, please connect directly with our sales team via your preferred method below:",
          actions: [
            { label: 'Chat on WhatsApp', url: 'https://wa.me/918688637899', type: 'whatsapp' },
            { label: 'Call Directly', url: 'tel:+918688637899', type: 'phone' },
            { label: 'Send Email', url: `mailto:${CONTACT_EMAIL}`, type: 'email' }
          ]
        };
        setMessages(prev => [...prev, contactResponse]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    const response = await chatWithConcierge(inputValue);

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Float Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#d4af37] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Sidebar Drawer */}
      <div className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-[#0d0d0d] border-l border-white/10 transform transition-transform duration-700 ease-in-out shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 border-bottom border-white/10 flex justify-between items-center bg-[#111]">
          <div>
            <h3 className="text-xl font-display text-white">Digital Concierge</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">Powered by SREE NIRMAN VENTURES Intelligence</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-4 text-sm leading-relaxed mb-2 ${msg.role === 'user' ? 'bg-[#d4af37] text-black' : 'bg-white/5 text-white/90 border border-white/10'}`}>
                {msg.content}
              </div>
              {msg.actions && (
                <div className="flex flex-col gap-2 w-[85%]">
                  {msg.actions.map((action, idx) => (
                    <a
                      key={idx}
                      href={action.url}
                      target="_blank" // For external links like WhatsApp/Email
                      rel="noopener noreferrer"
                      className="bg-[#111] border border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-black text-[#d4af37] text-xs uppercase tracking-widest py-3 px-4 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-4 flex space-x-2">
                <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-8 border-t border-white/10 bg-[#111]">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about our masterplans..."
              className="w-full bg-black border border-white/10 p-4 pr-12 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            <button
              onClick={handleSend}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4af37]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concierge;
