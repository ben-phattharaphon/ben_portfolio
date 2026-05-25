"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const mailtoUrl = `mailto:phattharaphon.spk@gmail.com?subject=${encodeURIComponent(subject || "Contact from Portfolio")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = mailtoUrl;
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col h-full bg-[#ECE9D8] font-tahoma select-none">
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-6">
            <img
              src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png"
              alt="Success"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-[#003399]">Message Sent Successfully!</h2>
            <p className="text-[12px] mt-2">Your message has been delivered to Phattharaphon.</p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-1 bg-[#ECE9D8] border-2 border-b-[#808080] border-r-[#808080] border-t-white border-l-white active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white text-[12px]"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#ECE9D8] font-tahoma select-none overflow-hidden relative">
      {isSending && (
        <div className="absolute inset-0 bg-white/50 z-50 flex flex-col items-center justify-center">
          <div className="bg-[#ECE9D8] border-2 border-white shadow-md p-4 flex flex-col items-center gap-3">
            <span className="text-[12px] text-black">Sending message...</span>
            <div className="w-48 h-4 bg-white border border-[#808080] overflow-hidden relative">
              <div className="h-full bg-[#215dc6] animate-[progress_1.5s_infinite]" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Outlook Express style header */}
      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-[#215dc6] to-[#4c89ee] text-white">
        <img src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png" alt="mail" className="w-4 h-4 mr-2 filter brightness-200" />
        <span className="text-[11px] font-bold">New Message</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center px-1 py-1 bg-[#ECE9D8] border-b border-[#D4D0C8] gap-1 bg-gradient-to-b from-[#f9f8f4] to-[#ece9d8]">
        <button
          onClick={handleSubmit}
          disabled={isSending}
          className="flex flex-col items-center px-2 py-1 border border-transparent hover:border-[#b0b0b0] hover:bg-[#e0e0e0] active:bg-[#c0c0c0] active:border-[#808080] rounded-[2px]"
        >
          <img src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png" className="w-6 h-6" alt="Send" />
          <span className="text-[10px] font-bold">Send</span>
        </button>

      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2 text-[11px]">
        <div className="flex items-center border-b border-[#D4D0C8] pb-1">
          <label htmlFor="name" className="w-16 text-[#808080]">From:</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 bg-transparent border-none outline-none px-1"
          />
        </div>
        <div className="flex items-center border-b border-[#D4D0C8] pb-1">
          <label htmlFor="email" className="w-16 text-[#808080]">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="your-email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent border-none outline-none px-1"
          />
        </div>
        <div className="flex items-center border-b border-[#D4D0C8] pb-1">
          <label htmlFor="subject" className="w-16 text-[#808080]">Subject:</label>
          <input
            id="subject"
            type="text"
            placeholder="Inquiry about your services"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none px-1"
          />
        </div>

        <div className="mt-4 flex flex-col flex-1 min-h-0">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="flex-1 bg-white border border-[#7F9DB9] p-2 outline-none resize-none font-sans text-[13px] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] custom-scrollbar"
            style={{ height: '180px' }}
            placeholder="Type your message here..."
          />
        </div>

        {/* Footer / Social Links */}
        <div className="mt-4 flex items-center justify-between border-t border-[#D4D0C8] pt-2">
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/phattharaphon-saengphak-70b210338"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline text-[#003399]"
            >
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" className="w-[18px] h-[18px]" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline text-[#003399]"
            >
              <img src="https://cdn.simpleicons.org/github" className="w-4 h-4" alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
          <span className="text-[#808080]">Recipients: Phattharaphon</span>

        </div>
      </form>
    </div>
  );
}
