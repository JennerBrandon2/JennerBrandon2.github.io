
import { Briefcase, ArrowUpRight } from "lucide-react";

const timelineData = [
  {
    period: "2024 - Present",
    role: "Strategy & Operations Manager",
    company: "Wonder Group",
    description: "Leading strategic initiatives and operational excellence across Wonder Group's portfolio of companies.",
  },
  {
    period: "2023 - 2024",
    role: "Product & Growth Manager",
    company: "Wedded Wonderland (Wonder Group)",
    description: "Drove product development and growth strategies for Wedded Wonderland, a key Wonder Group subsidiary in the wedding industry space.",
  },
  {
    period: "2022 - 2022",
    role: "Head of Talent",
    company: "St Trinity (Wonder Group)",
    description: "Led talent acquisition and development strategies at St Trinity, establishing strong foundations for Wonder Group's talent initiatives.",
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
