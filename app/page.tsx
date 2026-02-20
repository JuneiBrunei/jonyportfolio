import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <main className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
        
        {/* Live Status */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Currently in Bologna, Italy</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-5xl font-black tracking-tight mb-4 uppercase">Zhangir Yerkassym</h1>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
            1st year <span className="text-slate-900 font-semibold">Economics and Finance</span> student at Università di Bologna. 
            Blending economic research with leadership in sports and student governance.
          </p>
        </header>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <Link href="/publications" className="p-4 rounded-2xl bg-slate-900 text-white text-center font-bold text-sm hover:bg-slate-800 transition-all uppercase tracking-tighter">
            Publications
          </Link>
          <Link href="/resume" className="p-4 rounded-2xl bg-white border border-slate-200 text-center font-bold text-sm hover:bg-slate-50 transition-all uppercase tracking-tighter text-slate-600">
            Resume
          </Link>
          <Link href="/projects" className="p-4 rounded-2xl bg-white border border-slate-200 text-center font-bold text-sm hover:bg-slate-50 transition-all uppercase tracking-tighter text-slate-600">
            Projects
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          
          {/* Card 1 - Current Focus */}
          <div className="md:col-span-2 p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between min-h-[220px] shadow-sm">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Current Focus</h2>
            <div>
              <p className="text-2xl font-bold mb-2 leading-tight">Economics & Finance at UniBo</p>
              <p className="text-slate-500 text-sm">Specializing in market analysis, global trends, and financial technology.</p>
            </div>
          </div>

          {/* Card 2 - Student Ambassador */}
          <div className="p-8 rounded-[2rem] bg-blue-50 border border-blue-100 flex flex-col justify-between text-blue-900">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">University Role</h2>
            <p className="text-xl font-black leading-tight uppercase">Student Ambassador</p>
            <p className="text-[10px] font-bold uppercase opacity-60">Alma Mater Studiorum</p>
          </div>

          {/* Card 3 - NIS Media League */}
          <div className="p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between min-h-[200px] hover:shadow-md transition-all">
            <div className="text-3xl">⚽️</div>
            <div>
              <h3 className="font-bold text-lg leading-tight uppercase">Media League</h3>
              <p className="text-xs text-slate-500 mt-1">Founder. 130+ players. Developed ecosystem from scratch.</p>
            </div>
          </div>

          {/* Card 4 - Economic Analyst */}
          <div className="md:col-span-2 p-8 rounded-[2rem] bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
             <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Recent Experience</span>
               <span className="text-xs text-slate-400 font-mono uppercase">Gov of Kazakhstan</span>
             </div>
             <div>
                <p className="text-xl font-bold leading-tight">Assistant Economic Analyst</p>
                <p className="text-sm text-slate-500 mt-1 italic">Focus on agricultural subsidies and inflation research.</p>
             </div>
          </div>
        </div>

        {/* Footer with Contacts */}
        <footer className="mt-32 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Zhangir Yerkassym
          </div>
          <div className="flex gap-6 font-bold text-xs uppercase tracking-widest">
            <a href="https://linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="mailto:zhangirerkasym@gmail.com" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </footer>

      </main>
    </div>
  );
}