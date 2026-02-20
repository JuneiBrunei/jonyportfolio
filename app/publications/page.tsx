import Link from 'next/link';

export default function Publications() {
  const pubs = [
    {
      title: "PRICE RISE: A THREAT OR A CHANCE?",
      source: "Ogni Alatau newspaper",
      date: "Sep 27, 2024",
      link: "https://ognialatau.kz/news/cat-1/30382/",
      description: "Analysis of inflation trends and their impact on regional economies."
    },
    {
      title: "FOOD PRODUCTS IN KAZAKHSTAN: CAUSES AND SOLUTIONS",
      source: "Central Asian Scientific Journal",
      date: "Sep 22, 2024",
      link: "https://cajournal.kz/vol/2024/vol4(23).pdf",
      description: "Scientific research on supply chain issues and price stabilization in Central Asia."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans p-8">
      <main className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-8 block">← Back to Home</Link>
        
        <h1 className="text-3xl font-black mb-12 italic tracking-tight">PUBLICATIONS</h1>
        
        <div className="space-y-12">
          {pubs.map((pub, i) => (
            <article key={i} className="group">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{pub.date}</span>
              <h2 className="text-xl font-bold mt-2 group-hover:text-blue-600 transition-colors">
                <a href={pub.link} target="_blank">{pub.title}</a>
              </h2>
              <p className="text-sm text-slate-500 mt-1 mb-4 italic">{pub.source}</p>
              <p className="text-slate-600 leading-relaxed">{pub.description}</p>
              <a href={pub.link} className="text-xs font-bold text-blue-600 uppercase tracking-tighter mt-4 block">Read Publication ↗</a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}