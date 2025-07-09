
import { motion } from "framer-motion";
import { ChevronLeft, Home, Users, TrendingUp, Settings, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const LendiProject = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/90 to-luxury-950/90 backdrop-blur-sm"></div>
        
        <div className="relative container mx-auto px-4 py-16">
          <Link to="/projects" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors group">
            <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-800 rounded-xl flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 text-gradient">
                  Lendi Group / Aussie Homes
                </h1>
                <p className="text-luxury-200 text-lg">Operations Manager - Buying (2025 - Present)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-luxury-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20">
            <h2 className="text-2xl font-display font-bold text-gold-400 mb-4">Our Mission</h2>
            <p className="text-luxury-100 text-lg leading-relaxed">
              At Lendi / Aussie Homes, our mission is to make Aussie the destination for home buying, delivering an integrated experience that brings together home loans, buyer's agent services, property search, selling, conveyancing, insurance, and more. We make it possible for Australians to Find, Buy & Own all in one place.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Role Overview */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-luxury-900/30 backdrop-blur-sm p-8 rounded-xl border border-luxury-700">
            <h2 className="text-2xl font-display font-bold text-white mb-6">Role Overview</h2>
            <p className="text-luxury-100 text-lg leading-relaxed mb-8">
              As the Operations Manager for Buying, I lead the systems, strategy, and execution across the entire buyer journey from first enquiry to settlement and beyond. My focus is on removing friction, enabling scale, and aligning every part of the business.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Key Responsibilities */}
      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-display font-bold text-center text-white mb-12">Key Responsibilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Revenue Operations (RevOps)",
                description: "Designing and implementing scalable processes that connect marketing, sales, buyer's agents, and brokers, for growth and visibility."
              },
              {
                icon: Settings,
                title: "CRM and Systems Enablement",
                description: "Leading end-to-end systems architecture for the buying journey, ensuring our tools empower high performance across every customer touchpoint."
              },
              {
                icon: Target,
                title: "Marketing & Attribution",
                description: "Partnering with growth and marketing teams to map lead sources, track channel performance, and drive ROI-positive decision-making."
              },
              {
                icon: Users,
                title: "Cross-Sell & Collaboration",
                description: "Building seamless collaboration between buyer's agents, brokers, and other verticals increasing attachment rates across home loans, selling services, and insurance."
              },
              {
                icon: Home,
                title: "Buyer's Agent Services Product",
                description: "Supporting the evolution of our buyer's agent proposition, including workflows, tech stack, and customer experience ensuring it scales with efficiency and impact."
              },
              {
                icon: Zap,
                title: "Property Search Platform",
                description: "Shaping product strategy and operational readiness for our new listing platform and buyer app — a tech-forward tool enabling agents to list for free, and buyers to search exclusive and off-market properties."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-luxury-900/50 backdrop-blur-sm p-6 rounded-xl border border-luxury-700 hover:border-gold-500/30 transition-all hover-lift"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-600 to-gold-800 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-luxury-200 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Major Achievement */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gold-900/20 to-luxury-900/20 backdrop-blur-sm p-8 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-display font-bold text-gold-400 mb-4">Major Achievement</h2>
            <h3 className="text-xl font-semibold text-white mb-4">Franchise Rollout</h3>
            <p className="text-luxury-100 text-lg leading-relaxed">
              Built and launched Australia's largest buyer's agent franchise model, driving the shift from internal teams to scalable, systemised national operations, including playbooks, compliance, and onboarding.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LendiProject;
