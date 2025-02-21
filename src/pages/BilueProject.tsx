
import { motion } from "framer-motion";
import { ChevronLeft, Star, Trophy, Target, Check, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const projectStats = {
  skills: [
    { name: "Mobile Development", rating: 5 },
    { name: "UI/UX Design", rating: 5 },
    { name: "Enterprise Architecture", rating: 4.8 },
    { name: "Cloud Solutions", rating: 4.9 },
    { name: "Digital Transformation", rating: 5 }
  ],
  achievements: [
    "Built Australia's leading health insurance app",
    "Reduced operational costs by 32%",
    "500,000+ Active Users",
    "App Store Rating of 4.8",
    "Successful Digital Transformation"
  ],
  highlights: [
    "Native iOS & Android Development",
    "Cloud-First Architecture",
    "Microservices Implementation",
    "Automated CI/CD Pipeline",
    "User-Centered Design Process",
    "Real-time Data Integration"
  ]
};

const outcomes = [{
  metric: "98%",
  label: "Client Satisfaction",
  description: "Based on post-project surveys"
}, {
  metric: "24.6%",
  label: "User Engagement",
  description: "Increase in active users"
}, {
  metric: "15x",
  label: "ROI",
  description: "Average client return"
}];

const caseStudies = [{
  title: "NIB Health App",
  description: "Complete digital transformation of Australia's fourth-largest health fund",
  metrics: ["500k+ Active Users", "4.8 App Store Rating", "32% Cost Reduction"],
  image: "/lovable-uploads/548f4370-34a9-4609-a05f-64a3734d5f40.png"
}];

const BilueProject = () => {
  return <div className="min-h-screen bg-gradient-to-b from-luxury-950 to-luxury-900">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <Link to="/projects" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl bg-luxury-800/50 backdrop-blur-xl border border-white/10"
            >
              <div className="p-8">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                    Bilue Digital
                  </h1>
                </div>

                <p className="text-xl text-luxury-100 mb-6">
                  Premier digital transformation partner specializing in enterprise solutions and innovative mobile experiences.
                </p>

                {/* Skills Rating */}
                <div className="space-y-4 mb-8">
                  {projectStats.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between gap-4">
                      <span className="text-luxury-100 min-w-[180px]">{skill.name}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(skill.rating)
                                ? "text-gold-500"
                                : "text-luxury-700"
                            }`}
                            fill={i < Math.floor(skill.rating) ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                  <div className="flex flex-wrap gap-3">
                    {projectStats.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex items-center gap-2 bg-gold-900/20 text-gold-200 px-3 py-1.5 rounded-full text-sm"
                      >
                        <Trophy className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projectStats.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-luxury-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-luxury-800/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-gold-500" />
                    <span className="text-luxury-100">{highlight}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Case Studies */}
            {caseStudies.map((study) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-luxury-800/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-luxury-100 mb-6">{study.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {study.metrics.map(metric => (
                      <div key={metric} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold-500" />
                        <span className="text-luxury-100">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Stats & Outcomes */}
          <div className="space-y-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.metric}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-luxury-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-luxury-800/40 transition-colors"
              >
                <div className="text-3xl font-display font-bold text-gold-200 mb-2">
                  {outcome.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {outcome.label}
                </div>
                <div className="text-luxury-100">{outcome.description}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sticky top-8 bg-luxury-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Ready to Transform?
              </h3>
              <p className="text-luxury-100 mb-6">
                Join leading enterprises who trust Bilue for their digital transformation journey.
              </p>
              <button className="w-full bg-gold-500 hover:bg-gold-600 text-luxury-950 font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Brandon
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>;
};

export default BilueProject;
