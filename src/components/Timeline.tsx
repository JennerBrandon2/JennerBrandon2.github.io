
import { Briefcase, ArrowUpRight, ChevronRight } from "lucide-react";

const timelineData = [
  {
    period: "2025 - Present",
    role: "Operations Manager - Buying",
    company: "Lendi Group / Aussie Homes",
    description: "Leading systems, strategy, and execution across the entire buyer journey from first enquiry to settlement. Focus on RevOps, CRM systems enablement, marketing attribution, and scaling buyer's agent services including Australia's largest buyer's agent franchise model.",
    isWonderGroup: false
  },
  {
    period: "2024 - 2025",
    role: "Strategy & Operations Manager",
    company: "Wonder Group",
    description: "Leading strategic initiatives and operational excellence across Wonder Group's portfolio of companies.",
    isWonderGroup: true
  },
  {
    period: "2023 - 2024",
    role: "Product & Growth Manager",
    company: "Wedded Wonderland (Wonder Group)",
    description: "Drove product development and growth strategies for Wedded Wonderland, a key Wonder Group subsidiary in the wedding industry space.",
    isWonderGroup: true
  },
  {
    period: "2022 - 2022",
    role: "Head of Talent",
    company: "St Trinity (Wonder Group)",
    description: "Led talent acquisition and development strategies at St Trinity, establishing strong foundations for Wonder Group's talent initiatives.",
    isWonderGroup: true
  },
  {
    period: "2021 - 2022",
    role: "Operations Manager & Change Management",
    company: "Campaign Monitor",
    description: "Ensured operational consistency in APAC during the merger between CM Group and Cheetah Digital, overseeing APAC change management and workforce integration.",
    isWonderGroup: false
  },
  {
    period: "2019 - 2021",
    role: "Data & Cloud Sales & Recruitment Consultant",
    company: "NTT, Telstra, Fractal",
    description: "Built out cloud, data, DevOps & IT managed service division from scratch. Developed market strategies, secured key clients & trained junior consultants. Specialized in Data, Cloud & DevOps solutions across Australia, partnering with startups, consultancies & major enterprises.",
    isWonderGroup: false
  },
  {
    period: "2017 - 2019",
    role: "Founder & CEO",
    company: "Digital Marketing Agency",
    description: "Founded and led a successful digital marketing agency, pioneering AR-driven campaigns with 40M+ organic impressions.",
    isWonderGroup: false
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-luxury-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Career Journey</h2>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative group ${item.isWonderGroup ? 'ml-6' : ''}`}>
                <div className={`absolute left-0 top-0 w-px h-full 
                  ${item.isWonderGroup 
                    ? 'bg-gradient-to-b from-gold-500 to-gold-700 shadow-lg shadow-gold-500/20' 
                    : 'bg-luxury-800'} 
                  group-last:h-24`}
                ></div>
                
                {item.isWonderGroup && (
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                    <ChevronRight className="w-4 h-4 text-gold-500" />
                  </div>
                )}
                
                <div className="relative pl-8 transition-all">
                  <div className={`absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 
                    ${item.isWonderGroup 
                      ? 'border-gold-500 bg-gold-500/20 shadow-lg shadow-gold-500/30 ring-2 ring-gold-500/20 ring-offset-2 ring-offset-luxury-950' 
                      : 'border-gold-500 bg-luxury-950'}`}>
                  </div>
                  
                  <div className={`${item.isWonderGroup 
                    ? 'bg-gold-900/20 border border-gold-500/20 relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-gold-500/5 after:to-transparent after:opacity-50' 
                    : 'bg-luxury-900/50'} 
                    backdrop-blur-sm p-6 rounded-lg 
                    ${item.isWonderGroup ? 'hover:bg-gold-900/30' : 'hover:bg-luxury-800/50'} 
                    transition-all overflow-hidden`}>
                    <div className="text-gold-500 text-sm font-medium mb-2">{item.period}</div>
                    <h3 className="text-xl font-display text-white mb-1 relative z-10">{item.role}</h3>
                    <div className="text-luxury-300 text-sm mb-4 relative z-10">{item.company}</div>
                    <p className="text-luxury-100 relative z-10">{item.description}</p>
                    
                    <button className="mt-4 text-gold-400 hover:text-gold-300 inline-flex items-center text-sm font-medium transition-colors relative z-10">
                      Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
