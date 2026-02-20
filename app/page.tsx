import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <main className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
        
        {/* Top Section: Status & Location */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Bologna, Italy</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Feb 2026</div>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-black tracking-tight mb-4 italic uppercase">Zhangir Y.</h1>
          <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
            Building the future of <span className="text-slate-900 underline decoration-blue-500/30 decoration-4 underline-offset-4 font-semibold">Media Sports</span> and studying Economics at Università di Bologna.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          
          {/* Main Card - Education */}
          <div className="md:col-span-2 p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col justify-between min-h-[240px]">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Current Focus</h2>
            <div>
              <p className="text-2xl font-medium mb-2 leading-tight text-blue-100 text-balance">Economics & Finance at UniBo</p>
              <p className="text-slate-400 text-sm">Specializing in market analysis and global economic trends.</p>
            </div>
          </div>

          {/* Side Card - Achievement */}
          <div className="p-8 rounded-[2rem] bg-blue-50 border border-blue-100 flex flex-col justify-between text-blue-900">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">GPA</h2>
            <p className="text-5xl font-black italic">5.0</p>
            <p className="text-xs font-semibold uppercase opacity-60">NIS Excellence</p>
          </div>

          {/* NIS Media League Card */}
          <div className="md:col-span-1 p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between min-h-[200px] hover:shadow-xl transition-shadow cursor-default group">
            <div className="text-3xl group-hover:scale-110 transition-transform origin-left">⚽️</div>
            <div>
              <h3 className="font-bold text-lg leading-tight">NIS Media League</h3>
              <p className="text-xs text-slate-500 mt-1">Founded & Managed 130+ players</p>
            </div>
          </div>

          {/* Gov Internship Card */}
          <div className="md:col-span-2 p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-default group">
             <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Internship</span>
               <span className="text-xs text-slate-400 group-hover:text-blue-500 transition-colors uppercase font-mono">Government of KZ</span>
             </div>
             <p className="text-xl font-bold mt-4 leading-tight">Assistant Economic Analyst at Akimat</p>
          </div>
        </div>

        {/* Links / Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono uppercase tracking-tighter">
          <a href="https://linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="p-4 rounded-2xl bg-white border border-slate-100 text-center font-bold text-sm hover:bg-slate-50 transition-colors">LinkedIn</a>
          <Link href="/publications" className="p-4 rounded-2xl bg-white border border-slate-100 text-center font-bold text-sm hover:bg-slate-50 transition-colors">Pubs</Link>
          <a href="mailto:your-email@studio.unibo.it" className="p-4 rounded-2xl bg-slate-900 text-white text-center font-bold text-sm hover:opacity-90 transition-opacity">Contact</a>
          <div className="p-4 rounded-2xl bg-slate-100 text-slate-400 text-center font-bold text-sm cursor-not-allowed">CV (Soon)</div>
        </div>

        <footer className="mt-24 text-center text-[10px] font-mono text-slate-400 uppercase tracking-[0.5em]">
          Inspired by Bologna • {new Date().getFullYear()}
        </footer>

      </main>
    </div>
  );
}