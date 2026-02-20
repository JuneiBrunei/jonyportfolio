export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-2xl mx-auto px-6 py-20">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Zhangir Yerkassym</h1>
          <p className="text-lg text-slate-600 mb-6">Software Engineer & AI Researcher</p>
          <div className="flex gap-5 text-sm font-medium text-blue-600">
            <a href="https://linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="hover:text-blue-800 transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" className="hover:text-blue-800 transition-colors">GitHub</a>
            <a href="mailto:your-email@ubc.ca" className="hover:text-blue-800 transition-colors">Email</a>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">About</h2>
          <p className="text-[17px] leading-relaxed text-slate-700">
            I am a student at the <strong>University of British Columbia</strong>, 
            bridging the gap between pure Mathematics and Applied AI. I build 
            software that is both mathematically sound and engineering-efficient.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">Education</h2>
          <div className="group">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold text-lg text-slate-800">The University of British Columbia</h3>
              <span className="text-sm text-slate-400 font-mono italic">2023 — 2027</span>
            </div>
            <p className="text-slate-600 text-[16px]">B.Sc. in Computer Science and Mathematics</p>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">Projects</h2>
          <div className="space-y-10">
            <div className="group">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  AI Research Project <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </h3>
                <span className="text-[11px] font-mono bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">Python</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Description of your technical work, like optimizing LLMs or working with neural networks.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-[0.3em] font-mono">
          © 2026 / Built with Next.js & Tailwind
        </footer>

      </main>
    </div>
  );
}