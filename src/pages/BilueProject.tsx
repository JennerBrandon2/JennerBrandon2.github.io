
import { motion } from "framer-motion";
import { ChevronLeft, Star, Trophy, Target, Check, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const projectStats = {
  rating: 4.9,
  reviews: 12,
  highlights: [
    "Award-winning Design",
    "Enterprise Solutions",
    "Mobile Excellence",
    "Digital Transformation"
  ]
};

const outcomes = [
  {
    metric: "4,500+",
    label: "Monthly Visitors",
    description: "Consistent organic traffic growth"
  },
  {
    metric: "24.6%",
    label: "User Engagement",
    description: "Increase in active users"
  },
  {
    metric: "15x",
    label: "Traffic Growth",
    description: "Year over year improvement"
  },
  {
    metric: "1st",
    label: "Page Rankings",
    description: "For key industry terms"
  }
];

const projectDetails = [
  {
    title: "Brand Strategy",
    icon: Trophy,
    items: [
      "Cohesive nautical theme",
      "Clear brand guidelines",
      "Compelling narrative"
    ]
  },
  {
    title: "Technical Delivery",
    icon: Target,
    items: [
      "WordPress to Webflow migration",
      "Performance optimization",
      "Mobile-first approach"
    ]
  },
  {
    title: "Business Impact",
    icon: BarChart3,
    items: [
      "Increased lead generation",
      "Higher conversion rates",
      "Improved brand perception"
    ]
  }
];

const BilueProject = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-950/90 via-luxury-900/80 to-gold-900/70 backdrop-blur-lg"></div>
        
        <div className="relative container mx-auto px-4 py-12">
          <Link to="/projects" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-start justify-between flex-wrap gap-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
                Bilue Digital Transformation
              </h1>
              
              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gold-200">{projectStats.rating}</div>
                  <div className="text-sm text-luxury-100">Rating</div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(projectStats.rating) ? 'text-gold-500' : 'text-luxury-700'}`}
                      fill={i < Math.floor(projectStats.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xl text-luxury-100 max-w-2xl">
              Transforming Bilue's digital presence through strategic brand development and technical excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-display font-bold text-gold-200 mb-2">
                {outcome.metric}
              </div>
              <div className="text-lg font-semibold mb-2">{outcome.label}</div>
              <div className="text-luxury-100">{outcome.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {projectDetails.map((section, index) => (
              <div
                key={section.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gold-900/20">
                    <section.icon className="w-6 h-6 text-gold-200" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gold-500" />
                      <span className="text-luxury-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Case Study Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gold-900/20">
                  <Users className="w-6 h-6 text-gold-200" />
                </div>
                <h3 className="text-xl font-display font-bold">NIB Health App Case Study</h3>
              </div>
              <p className="text-luxury-100 mb-6">
                Transforming customer experience through innovative mobile solutions for Australia's fourth-largest health fund.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold-500" />
                  <span className="text-luxury-100">One unified mobile platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold-500" />
                  <span className="text-luxury-100">24.6% increase in active users</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold-500" />
                  <span className="text-luxury-100">World-first digital health card</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-luxury-900/50">
              <img 
                src="/lovable-uploads/548f4370-34a9-4609-a05f-64a3734d5f40.png" 
                alt="NIB Health App Interface" 
                className="w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BilueProject;
