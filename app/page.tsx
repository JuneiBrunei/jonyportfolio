export default function Home() {
  const experiences = [
    {
      title: "Student Ambassador",
      org: "Alma Mater Studiorum – Università di Bologna",
      date: "Feb 2026 — Present",
      desc: "Representing the oldest university in the Western world in Bologna, Italy."
    },
    {
      title: "Founder & CEO",
      org: "NIS Media League / Football Association",
      date: "Mar 2023 — May 2025",
      desc: "Founded a league with 130+ participants, established 6 regional branches, and developed the digital ecosystem (web & social media)."
    },
    {
      title: "Student Council Parliament Speaker",
      org: "Nazarbayev Intellectual Schools",
      date: "Jan 2023 — Feb 2025",
      desc: "Led the student government at the top-tier school network in Kazakhstan."
    },
    {
      title: "Assistant Economic Analyst (Internship)",
      org: "Government of Kazakhstan (Akimat)",
      date: "Jan 2024 — Sep 2024",
      desc: "Agriculture management and economic analysis in Rayimbek and Talgar districts."
    }
  ];

  const publications = [
    {
      title: "Price Rise: A Threat or a Chance?",
      journal: "Ogni Alatau newspaper",
      link: "https://ognialatau.kz/news/cat-1/30382/"
    },
    {
      title: "Food Products in Kazakhstan: Causes and Solutions",
      journal: "Central Asian Scientific Journal",
      link: "https://cajournal.kz/vol/2024/vol4(23).pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-2xl mx-auto px-6 py-20 animate-fade-in">
        
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Zhangir Yerkassym</h1>
          <p className="text-lg text-slate-600 mb-6 italic">Economics & Finance at Università di Bologna</p>
          <div className="flex gap-5 text-sm font-semibold">
            <a href="https://www.linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="text-blue-600 border-b border-blue-100 hover:border-blue-600">LinkedIn</a>
            <a href="mailto:your-email@studio.unibo.it" className="text-blue-600 border-b border-blue-100 hover:border-blue-600">Email</a>
          </div>
        </header>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900">Alma Mater Studiorum – Università di Bologna</h3>
              <p className="text-sm text-slate-600 font-medium">Laurea, Economics and Finance (2025 — 2028)</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Nazarbayev Intellectual Schools (NIS)</h3>
              <p className="text-sm text-slate-600">Grade 12, GPA 5.0/5.0 (2019 — 2025)</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Professional Experience</h2>
          <div className="space-y-10 border-l border-slate-100 ml-1 pl-6">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[29px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                <h3 className="font-bold text-slate-900 leading-tight">{exp.title}</h3>
                <p className="text-xs text-blue-600 font-semibold mb-2">{exp.org} • {exp.date}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Publications</h2>
          <div className="grid gap-4">
            {publications.map((pub, i) => (
              <a key={i} href={pub.link} target="_blank" className="p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow block">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{pub.title}</h3>
                <p className="text-[11px] text-slate-400 uppercase font-mono">{pub.journal}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-32 pt-10 border-t border-slate-100 text-[10px] text-slate-400 tracking-[0.4em] font-mono text-center uppercase">
          Bologna / Almaty / 2026
        </footer>
      </main>
    </div>
  );
}