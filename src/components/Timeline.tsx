
import { Briefcase, ArrowUpRight } from "lucide-react";

const timelineData = [
  {
    period: "2023 - Present",
    role: "Group Sales & Marketing Manager",
    company: "Wonder Group",
    description: "Leading sales and marketing strategies across Wonder Group's portfolio, driving revenue growth and brand expansion.",
  },
  {
    period: "2019 - 2023",
    role: "Data & Cloud Consultant",
    company: "NTT, Telstra, Fractal",
    description: "Managed large-scale cloud and data projects, collaborating with industry giants across Australia.",
  },
  {
    period: "2017 - 2019",
    role: "Founder & CEO",
    company: "Digital Marketing Agency",
    description: "Founded and led a successful digital marketing agency, pioneering AR-driven campaigns with 40M+ organic impressions.",
  },
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-luxury-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-12">Career Journey</h2>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-0 top-0 w-px h-full bg-luxury-800 group-last:h-24"></div>
                
                <div className="relative pl-8 transition-all">
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gold-500 bg-luxury-950"></div>
                  
                  <div className="bg-luxury-900/50 backdrop-blur-sm p-6 rounded-lg hover:bg-luxury-800/50 transition-all">
                    <div className="text-gold-500 text-sm font-medium mb-2">{item.period}</div>
                    <h3 className="text-xl font-display text-white mb-1">{item.role}</h3>
                    <div className="text-luxury-300 text-sm mb-4">{item.company}</div>
                    <p className="text-luxury-100">{item.description}</p>
                    
                    <button className="mt-4 text-gold-400 hover:text-gold-300 inline-flex items-center text-sm font-medium transition-colors">
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
