export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
      {/* Главный контейнер с плавной анимацией появления */}
      <main className="max-w-2xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
            Zhangir Yerkassym
          </h1>
          <p className="text-lg text-slate-600 mb-6 font-medium">Software Engineer & AI Researcher</p>
          <div className="flex gap-5 text-sm font-semibold">
            <a href="https://linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-100 hover:border-blue-600">LinkedIn</a>
            <a href="https://github.com" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-100 hover:border-blue-600">GitHub</a>
            <a href="mailto:your-email@ubc.ca" className="text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-100 hover:border-blue-600">Email</a>
          </div>
        </header>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Background</h2>
          <p className="text-[17px] leading-relaxed text-slate-700">
            I am a student at the <span className="text-slate-900 font-semibold">University of British Columbia</span>, 
            focusing on Computer Science and Mathematics. I'm passionate about building elegant solutions 
            to complex problems, specifically in the realms of AI optimization and scalable systems.
          </p>
        </section>

        {/* Experience - С красивой линией слева */}
        <section className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Experience</h2>
          <div className="space-y-12 border-l-2 border-slate-100 ml-1 pl-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900">UBC Research Assistant</h3>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">2024 — PRES</span>
              </div>
              <p className="text-sm text-slate-500 mb-3">Department of Mathematics</p>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                Analyzing algorithmic efficiency and implementing mathematical models for AI research.
              </p>
            </div>
          </div>
        </section>

        {/* Projects - Карточки */}
        <section className="mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Selected Projects</h2>
          <div className="grid gap-6">
            <div className="group p-6 rounded-2xl border border-slate-200/60 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-lg">
                  AI Portfolio Engine
                </h3>
                <div className="flex gap-2">
                  <span className="text-[9px] font-bold font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-md uppercase">Next.js</span>
                  <span className="text-[9px] font-bold font-mono bg-blue-50 text-blue-500 px-2 py-1 rounded-md uppercase">TS</span>
                </div>
              </div>
              <p className="text-slate-600 text-[14px] leading-relaxed mb-4">
                A high-performance personal portfolio built with a focus on speed, SEO, and minimalist aesthetics.
              </p>
              <a href="#" className="text-[12px] font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                View Project <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-40 pt-10 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-[0.4em] font-mono text-center">
          Handcrafted by Zhangir / 2026
        </footer>

      </main>
    </div>
  );
}