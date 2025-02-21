
import { motion } from "framer-motion";
import { ChevronLeft, Anchor, Waves, Globe, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  {
    title: "Brand Refresh & Storytelling",
    description: "Crafted a cohesive nautical-themed brand identity with compelling narrative and guidelines.",
    icon: Anchor,
    metrics: ["Unified Brand Identity", "Clear Brand Guidelines", "Consistent Messaging"]
  },
  {
    title: "Website Redesign",
    description: "Migrated from WordPress to modern Webflow platform for enhanced performance.",
    icon: Globe,
    metrics: ["Faster Load Times", "Improved UX", "Modern Design"]
  },
  {
    title: "SEO & Organic Growth",
    description: "Implemented comprehensive SEO strategy with remarkable results.",
    icon: BarChart,
    metrics: ["4,500+ Monthly Visitors", "1st Page Rankings", "15x Traffic Growth"]
  },
  {
    title: "Enterprise Case Studies",
    description: "Created detailed case studies showcasing successful enterprise deliveries.",
    icon: Waves,
    metrics: ["Expanded Portfolio", "Enterprise Wins", "Proven Track Record"]
  }
];

const BilueProject = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white relative">
      {/* Animated background with glass effect */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-950/90 via-luxury-900/80 to-gold-900/70 backdrop-blur-xl"></div>
        
        {/* Animated glass bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-md"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/90 to-luxury-950/90 backdrop-blur-sm"></div>
          
          <div className="relative container mx-auto px-4 py-16">
            <Link to="/projects" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Bilue Digital Transformation
              </h1>
              <p className="text-xl text-luxury-100 max-w-2xl">
                Leading a comprehensive brand transformation and growth strategy, repositioning Bilue as a market leader in mobile development.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 rounded-lg bg-gold-900/20">
                      <achievement.icon className="w-6 h-6 text-gold-200" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-gold-200 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-luxury-100">
                        {achievement.description}
                      </p>
                      <div className="space-y-3">
                        {achievement.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-gold-500" />
                            <span className="text-luxury-100">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 space-y-6">
                <h2 className="font-display text-3xl font-bold text-white">
                  NIB Health App Case Study
                </h2>
                <p className="text-luxury-100">
                  Working closely with nib Group, Australia's fourth-largest health fund, Bilue built a suite of next-generation mobile apps that transformed cumbersome claims processes into fast, fun and contactless customer experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <p className="text-luxury-100">One unified mobile platform</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <p className="text-luxury-100">24.6% increase in active users</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <p className="text-luxury-100">World-first digital health card</p>
                  </div>
                </div>
              </div>
              <div className="bg-luxury-900/50 p-8 lg:p-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/548f4370-34a9-4609-a05f-64a3734d5f40.png" 
                  alt="NIB Health App Interface" 
                  className="w-full max-w-md rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BilueProject;
