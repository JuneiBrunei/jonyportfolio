'use client';

import { useEffect, useState } from 'react';

const NEW_URL = 'https://zhangirportfolio.vercel.app'; // <-- Вставь сюда новый адрес

export default function Home() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = NEW_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100 flex flex-col justify-between">
      <main className="max-w-2xl mx-auto px-6 py-20 my-auto w-full">
        
        {/* Статус-бейдж в твоем стиле */}
        <div className="flex items-center gap-2 bg-white border border-slate-100 px-3 py-1.5 rounded-full shadow-sm w-fit mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Domain Updated • Redirecting in {seconds}s
          </span>
        </div>

        {/* Основная карточка в стиле Bento */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900 leading-[0.9] mb-4">
            We&apos;ve Moved
          </h1>
          
          <p className="text-lg text-slate-500 leading-snug font-medium mb-8">
            The portfolio of <span className="text-slate-900 font-bold">Zhangir Yerkassym</span> has moved to a new web address. Please update your bookmarks.
          </p>

          {/* Кнопка перехода */}
          <a
            href={NEW_URL}
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm"
          >
            Go to New Website →
          </a>

          <p className="mt-6 text-[11px] font-mono text-slate-400 break-all">
            New URL: <a href={NEW_URL} className="underline hover:text-blue-600">{NEW_URL}</a>
          </p>
        </div>

      </main>

      {/* Футер */}
      <footer className="max-w-2xl mx-auto w-full px-6 py-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 font-bold">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Zhangir Yerkassym
        </div>
        <div className="flex gap-6 text-[11px] uppercase tracking-widest italic font-black">
          <a href="https://linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="https://t.me/Jonyyverk" target="_blank" className="hover:text-blue-400 transition-colors">Telegram</a>
          <a href="mailto:zhangirerkasym@gmail.com" className="hover:text-slate-900 transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
}