import Link from 'next/link';

export default function Publications() {
  const published = [
    {
      title: "PRICE RISE: A THREAT OR A CHANCE?",
      source: "Ogni Alatau newspaper",
      date: "Sep 2024",
      link: "https://ognialatau.kz/news/cat-1/30382/",
      description: "A comprehensive analysis of inflation trends and their impact on regional economies in Kazakhstan. Focused on socio-economic challenges and potential policy interventions to mitigate rising living costs."
    },
    {
      title: "FOOD PRODUCTS IN KAZAKHSTAN: CAUSES AND SOLUTIONS",
      source: "Central Asian Scientific Journal",
      date: "Sep 2024",
      link: "https://cajournal.kz/vol/2024/vol4(23).pdf",
      description: "A multi-methodological study analyzing the escalation of food costs in Almaty (2022–2024). Based on field interviews with agricultural officials, farm owners, and business leaders to identify structural gaps in supply chains and the impact of regional geopolitical instability."
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
      {/* Декоративный элемент на фоне, чтобы заполнить пустоту */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-blue-50/30 -z-10 blur-3xl rounded-full translate-x-1/2"></div>

      <main className="max-w-4xl mx-auto px-6 py-20 animate-fade-in">
        <Link href="/" className="group inline-flex items-center text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-12 hover:opacity-70 transition-all">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Home
        </Link>
        
        <div className="relative mb-20">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
            Research & <br /> 
            <span className="text-blue-600">Publications</span>
          </h1>
          <div className="absolute -left-10 top-1/2 w-6 h-1 bg-blue-600 hidden md:block"></div>
        </div>
        
        {/* Section 1: Published Works */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Academic & Media</h2>
            <div className="h-px w-full bg-slate-100"></div>
          </div>

          <div className="space-y-16">
            {published.map((pub, i) => (
              <article key={i} className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10">
                <div className="hidden md:block">
                  <span className="text-xs font-mono font-bold text-blue-500/50 uppercase sticky top-24">{pub.date}</span>
                </div>
                <div className="relative pb-8 border-b border-slate-100 group-last:border-none">
                  <span className="md:hidden text-xs font-mono font-bold text-blue-500/50 uppercase block mb-2">{pub.date}</span>
                  <h3 className="text-3xl font-bold group-hover:text-blue-600 transition-colors leading-[1.1] mb-4 uppercase italic">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  </h3>
                  <p className="inline-block text-[10px] font-bold text-white bg-slate-900 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    {pub.source}
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">{pub.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Independent Research */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-full bg-slate-100"></div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Independent Research</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {independent.map((res, i) => (
              <a 
                key={i} 
                href={res.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-200 transition-all overflow-hidden"
              >
                {/* Эффект свечения при ховере */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[9px] font-black px-4 py-1.5 bg-blue-600 text-white rounded-full uppercase tracking-widest">{res.type}</span>
                    <span className="text-blue-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-2xl font-light">↗</span>
                  </div>
                  <h3 className="font-bold text-2xl leading-tight mb-6 group-hover:text-blue-600 transition-colors uppercase italic">{res.title}</h3>
                  <div className="mt-auto">
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-4">{res.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-48 pt-10 border-t border-slate-100 flex flex-col items-center">
           <div className="w-12 h-1 bg-blue-600 mb-8"></div>
           <p className="text-xs font-mono text-slate-300 uppercase tracking-[0.5em]">
             Zhangir Yerkassym • Research Portfolio
           </p>
        </footer>
      </main>
    </div>
  );
}