
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
    <div className="min-h-screen bg-[#0EA5E9]/5">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] text-white">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative container mx-auto px-4 py-16">
          <Link to="/projects" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors">
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
              Bilue Brand & Digital Transformation
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
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
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#0EA5E9]/10">
                    <achievement.icon className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {achievement.description}
                    </p>
                    <div className="space-y-2">
                      {achievement.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                          {metric}
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
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                NIB Health App Case Study
              </h2>
              <p className="text-gray-600 mb-6">
                Working closely with nib Group, Australia's fourth-largest health fund, Bilue built a suite of next-generation mobile apps that transformed cumbersome claims processes into fast, fun and contactless customer experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <p className="text-gray-700">One unified mobile platform</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <p className="text-gray-700">24.6% increase in active users</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                  <p className="text-gray-700">World-first digital health card</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 lg:p-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/548f4370-34a9-4609-a05f-64a3734d5f40.png" 
                alt="NIB Health App Interface" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilueProject;
