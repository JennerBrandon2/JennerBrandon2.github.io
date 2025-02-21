
import { motion } from "framer-motion";
import { ChevronLeft, Lock, Star, Trophy, Heart, Ring } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  {
    icon: Ring,
    title: "Wedded Concierge & Network",
    description: "Led development of exclusive concierge services and professional network platforms"
  },
  {
    icon: Heart,
    title: "Media & Content",
    description: "Spearheaded Wedded Media initiatives and content strategy across platforms"
  },
  {
    icon: Trophy,
    title: "Platform Innovation",
    description: "Developed CRM SaaS platform and Venue Wonderland marketplace"
  },
  {
    icon: Star,
    title: "AI Integration",
    description: "Implemented advanced AI chatbot system for automated assistance"
  },
  {
    icon: Lock,
    title: "Business Growth",
    description: "Created B2B masterclass platform for industry education and networking"
  }
];

const WeddedWonderlandProject = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white">
      {/* Hero Section with Secret Theme */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/9d0e04fb-5687-4d69-9697-d09de3f7be77.png"
            alt="Wedded Wonderland"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-950/95 to-luxury-900/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/projects" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center bg-luxury-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-500/20">
              <Lock className="w-4 h-4 text-gold-500 mr-2" />
              <span className="text-gold-200 text-sm font-medium">Shhh, it's still a secret</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Wedded Wonderland
            </h1>
            <p className="text-luxury-100 max-w-2xl text-lg">
              Operating at the intersection of luxury weddings, destination travel, and business growth—connecting brands, venues, and planners in ways that seem effortless but are anything but.
            </p>
          </motion.div>
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
                My role spans RevOps, marketing operations, and strategy, though the real magic lies in what happens behind the scenes. Through innovative platforms and strategic initiatives, we're revolutionizing how the wedding industry connects and operates.
              </p>
            </motion.div>

            {/* Achievements Grid */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-gold-200">Key Initiatives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 3) }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors border border-gold-500/10"
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
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gold-500/10"
            >
              <h3 className="font-display font-bold text-xl mb-4 text-gold-200">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-luxury-100">Industry</dt>
                  <dd className="font-medium">Luxury Weddings & Events</dd>
                </div>
                <div>
                  <dt className="text-luxury-100">Focus Areas</dt>
                  <dd className="font-medium">Platform Development, RevOps, Strategy</dd>
                </div>
                <div>
                  <dt className="text-luxury-100">Key Platforms</dt>
                  <dd className="font-medium">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Wedded Concierge</li>
                      <li>Wedded Network</li>
                      <li>Venue Wonderland</li>
                      <li>CRM SaaS Platform</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gold-500/10"
            >
              <h3 className="font-display font-bold text-xl mb-4 text-gold-200">Innovation</h3>
              <div className="space-y-4">
                <div className="bg-luxury-800/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">AI Integration</h4>
                  <p className="text-luxury-100 text-sm">
                    Advanced chatbot system providing automated assistance and personalized recommendations
                  </p>
                </div>
                <div className="bg-luxury-800/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">B2B Platform</h4>
                  <p className="text-luxury-100 text-sm">
                    Comprehensive masterclass platform for industry education and networking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddedWonderlandProject;

