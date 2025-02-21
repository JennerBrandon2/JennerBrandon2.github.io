
import { motion } from "framer-motion";
import { ChevronLeft, Globe, Handshake, Users, ArrowRight, Trophy, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  {
    icon: Globe,
    title: "APAC Operations Leadership",
    description: "Successfully managed day-to-day operations across multiple APAC markets during complex merger integration"
  },
  {
    icon: Handshake,
    title: "Change Management",
    description: "Developed and executed comprehensive change management strategies aligned with global merger objectives"
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Led cross-functional teams and acted as primary liaison between regional leadership and key stakeholders"
  },
  {
    icon: ArrowRight,
    title: "Process Optimization",
    description: "Streamlined workflows and implemented unified operational model across newly merged entity"
  },
  {
    icon: Trophy,
    title: "Integration Success",
    description: "Ensured business continuity and successful workforce integration during merger transition"
  },
  {
    icon: ChartBar,
    title: "Growth & Revenue",
    description: "Aligned operational improvements with GTM strategies to support customer acquisition and revenue growth"
  }
];

const CampaignMonitorProject = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/dab4bcfc-a9c3-40e9-bbcc-a24f9c428a55.png"
            alt="Campaign Monitor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-950/90 to-luxury-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/projects" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Campaign Monitor
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-luxury-100 max-w-2xl text-lg"
          >
            Operational Leadership & Change Management during CM Group and Cheetah Digital Merger
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-2xl font-display font-bold text-gold-200 mb-4">Overview</h2>
              <p className="text-luxury-100">
                At Campaign Monitor by Marigold, I played a crucial role in ensuring operational consistency across APAC markets during the merger of CM Group and Cheetah Digital. My responsibilities encompassed workforce integration, change management, and streamlining operations, all while aligning regional processes with global merger objectives to support revenue growth and GTM strategies.
              </p>
            </motion.div>

            {/* Achievements Grid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-gold-200">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 3) }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <achievement.icon className="w-8 h-8 text-gold-200 mb-4" />
                    <h3 className="font-display font-bold text-xl mb-2">{achievement.title}</h3>
                    <p className="text-luxury-100">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <h3 className="font-display font-bold text-xl mb-4 text-gold-200">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-luxury-100">Industry</dt>
                  <dd className="font-medium">MarTech</dd>
                </div>
                <div>
                  <dt className="text-luxury-100">Region</dt>
                  <dd className="font-medium">APAC</dd>
                </div>
                <div>
                  <dt className="text-luxury-100">Focus Areas</dt>
                  <dd className="font-medium">Operational Integration, Change Management</dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <h3 className="font-display font-bold text-xl mb-4 text-gold-200">Impact</h3>
              <p className="text-luxury-100">
                This role enhanced expertise in managing complex operational transformations while developing strategic insight and cross-functional leadership skills crucial for driving growth and optimizing RevOps initiatives. The successful integration ensured business continuity, talent retention, and operational alignment, positioning APAC for sustained growth post-merger.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignMonitorProject;
