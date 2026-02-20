import Link from 'next/link';

export default function Publications() {
  const published = [
    {
      title: "PRICE RISE: A THREAT OR A CHANCE?",
      source: "Ogni Alatau newspaper",
      date: "Sep 2024",
      link: "https://ognialatau.kz/news/cat-1/30382/",
      description: "Analysis of inflation trends and their impact on regional economies in Kazakhstan."
    },
    {
      title: "FOOD PRODUCTS IN KAZAKHSTAN: CAUSES AND SOLUTIONS",
      source: "Central Asian Scientific Journal",
      date: "Sep 2024",
      link: "https://cajournal.kz/vol/2024/vol4(23).pdf",
      description: "Research on price stabilization and agricultural supply chains in Central Asia."
    }
  ];

  const independent = [
    {
      title: "DOES STADIUM DESIGN INFLUENCE HOME ADVANTAGE?",
      type: "Sports Economics Research",
      link: "https://docs.google.com/document/d/12yRpuLwr4DTC_zljepQFwRndYe_aiZCuy_RfKRzZ19s/edit?usp=sharing",
      description: "A quantitative study of Serie A, Bundesliga, and Ligue 1 stadiums. Analysis of how running tracks and fan proximity mediate the home advantage effect."
    },
    {
      title: "ENHANCING STUDENT GOVERNANCE VIA ELECTION REFORM",
      type: "Political Science & Education",
      link: "https://docs.google.com/document/d/1HDlKMyaB9EeHCTIEoWn_7x1cUg-_jPj-X9BZAd3flPI/edit?usp=sharing",
      description: "A proposal for a parliamentary model of school governance. Research on minimizing administrative interference and institutionalizing student leadership."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
        <Link href="/" className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-12 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-black mb-16 italic tracking-tight uppercase">Research & Publications</h1>
        
        {/* Section 1: Published Works */}
        <section className="mb-20">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Academic & Media Publications</h2>
          <div className="space-y-12">
            {published.map((pub, i) => (
              <article key={i} className="group border-l-2 border-slate-200 pl-6 ml-1">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">{pub.date}</span>
                <h3 className="text-2xl font-bold mt-1 group-hover:text-blue-600 transition-colors leading-tight">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                </h3>
                <p className="text-sm text-slate-500 mb-3 uppercase tracking-tight font-semibold italic">{pub.source}</p>
                <p className="text-slate-600 text-base leading-relaxed">{pub.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Independent Research */}
        <section>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Independent Research Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {independent.map((res, i) => (
              <a 
                key={i} 
                href={res.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-full text-slate-600 uppercase tracking-widest">{res.type}</span>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity text-xl">↗</span>
                </div>
                <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-600 uppercase italic">{res.title}</h3>
                <p className="text-sm text-slate-500 leading-normal line-clamp-3">{res.description}</p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-40 text-center text-xs font-mono text-slate-300 uppercase tracking-[0.5em]">
          Zhangir Yerkassym • Research Portfolio
        </footer>
      </main>
    </div>
  );
}