import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
        
        {/* Navigation */}
        <Link href="/" className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-12 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>

        <header className="mb-20">
          <h1 className="text-4xl font-black tracking-tight mb-4 uppercase italic">Resume</h1>
          <p className="text-slate-500">Academic path and professional qualifications.</p>
        </header>

        {/* Education Section */}
<section className="mb-20">
  <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Education</h2>
  <div className="space-y-12">
    
    {/* Università di Bologna */}
    <div className="relative border-l border-slate-200 pl-8 ml-1">
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
      <h3 className="text-xl font-bold uppercase italic leading-tight">Università di Bologna</h3>
      <p className="text-sm font-bold text-blue-600 mb-1 tracking-tighter uppercase">Bachelor in Economics and Finance • 2025 — 2028</p>
      <p className="text-slate-500 text-xs italic">Bologna, Italy</p>
    </div>

    {/* NIS */}
    <div className="relative border-l border-slate-200 pl-8 ml-1">
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300"></div>
      <h3 className="text-xl font-bold uppercase italic leading-tight text-slate-700">Nazarbayev Intellectual School</h3>
      <p className="text-sm font-bold text-slate-500 mb-1 tracking-tighter uppercase font-mono">Physics and Mathematics • 2019 — 2025</p>
      <p className="text-slate-500 text-xs italic mb-4">Almaty, Kazakhstan</p>
      
      {/* Твои плашки с результатами теперь аккуратно снизу */}
      <div className="flex flex-wrap gap-2">
        <span className="text-[9px] font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded uppercase">GPA 5.0/5.0</span>
        <span className="text-[9px] font-bold px-2 py-1 bg-yellow-50 text-yellow-700 rounded uppercase">"Altyn Belgi" Award</span>
        <span className="text-[9px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">SAT 1400</span>
        <span className="text-[9px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">IELTS 8.0</span>
      </div>
    </div>

  </div>
</section>

        {/* Leadership & Experience */}
        <section className="mb-20">
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Leadership</h2>
          <div className="relative border-l border-slate-200 pl-8 ml-1">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900"></div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-xl font-bold uppercase italic leading-tight">Parliament Speaker</h3>
              <span className="text-[10px] font-mono text-slate-400">2023 — 2025</span>
            </div>
            <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest font-mono">Student Council • NIS Almaty</p>
            
            <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">/</span>
                <span>Developed a comprehensive student governance methodology and initiated <span className="text-slate-900 font-semibold">100+ event concepts</span>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">/</span>
                <span>Drafted <span className="text-slate-900 font-semibold">16 legislative acts</span> to institutionalize student council operations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">/</span>
                <span>Managed school-wide feedback loops via a digital suggestion box and sociological surveys.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">/</span>
                <span>Supervised class communities (Shanyraks), coordinated point-based competition systems and administrative events.</span>
              </li>
              <li className="flex gap-3 items-center">
  <span className="text-blue-500 font-bold">/</span>
  <span>
    Established an independent <span className="text-slate-900 font-semibold">Press Office</span> and managed institutional social media presence.
    <a 
      href="https://www.instagram.com/nisfm_studentcouncil/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="ml-1.5 inline-flex items-center gap-1 text-blue-600 font-bold border-b border-blue-200 hover:border-blue-600 transition-all"
    >
      Instagram
      <span className="text-[10px]">↗</span>
    </a>
  </span>
</li>
            </ul>
          </div>
        </section>

        {/* Awards */}
        <section className="mb-20">
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Awards</h2>
          <div className="grid gap-4">
            {[
              { title: "National Astronomy Competition", rank: "1st Place", date: "2022", desc: "Won among 90 participants and 40 research projects." },
              { title: "IX Al-Farabi Research Conference", rank: "3rd Place", date: "2022", desc: "Published investigation on scattered star clusters and numerical simulations." },
              { title: "Climate Science Olympiad", rank: "Semifinalist", date: "23 & 24", desc: "Top 55,000 participants globally. Missed finals by only 1 point." }
            ].map((award, i) => (
              <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold uppercase text-sm italic">{award.title}</h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-900 text-white rounded">{award.rank}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Qualifications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Qualifications</h2>
            <div className="space-y-4">
              <div className="group">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Certificates</p>
                <p className="text-sm font-bold text-slate-700 leading-tight">Trainer Degree (Tenge-ten Association)</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Courses</p>
                <p className="text-xs text-slate-600">Rice University: Principles of Economics</p>
                <p className="text-xs text-slate-600">UPenn: Fintech Foundations & Applications</p>
                <p className="text-xs text-slate-600">National Geographic: Young Explorers</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Languages</h2>
            <div className="space-y-4">
              {[
                { name: "English", level: "IELTS 8.0 / C1", width: "w-[95%]" },
                { name: "Kazakh", level: "Native", width: "w-[100%]" },
                { name: "Russian", level: "Native", width: "w-[100%]" },
                { name: "Italian / German", level: "A1/A2 Beginner", width: "w-[25%]" }
              ].map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-1.5 tracking-tighter">
                    <span>{lang.name}</span>
                    <span className="text-slate-400">{lang.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-slate-900 ${lang.width}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-32 text-center text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">
          • Zhangir Yerkassym •
        </footer>
      </main>
    </div>
  );
}