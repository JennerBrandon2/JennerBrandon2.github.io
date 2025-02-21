
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Bilue",
    description: "Digital Innovation Partner",
    image: "/lovable-uploads/bfbce4d2-a37c-421c-8e52-8ce770ad2171.png",
    category: "Digital Transformation"
  },
  {
    id: 2,
    name: "Sculpted",
    description: "Wellness & Fitness Platform",
    image: "/lovable-uploads/75591996-686b-4c22-bcb7-67ab0850c840.png",
    category: "Health Tech"
  },
  {
    id: 3,
    name: "Wedded Wonderland",
    description: "Wedding Planning Platform",
    image: "/lovable-uploads/9d0e04fb-5687-4d69-9697-d09de3f7be77.png",
    category: "Marketplace"
  },
  {
    id: 4,
    name: "Campaign Monitor",
    description: "Email Marketing Platform",
    image: "/lovable-uploads/dab4bcfc-a9c3-40e9-bbcc-a24f9c428a55.png",
    category: "MarTech"
  },
  {
    id: 5,
    name: "St Trinity Property Group",
    description: "Real Estate Development",
    image: "/st-trinity-logo.png",
    category: "Property"
  },
  {
    id: 6,
    name: "Wonder Group",
    description: "Innovation Consultancy",
    image: "/wonder-group-logo.png",
    category: "Consulting"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white relative">
      {/* Glassy background with movement */}
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
        {/* Header with gradient */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/90 to-luxury-950/90 backdrop-blur-sm"></div>
          
          <div className="relative container mx-auto px-4 py-16">
            <Link to="/" className="inline-flex items-center text-gold-200 hover:text-gold-100 mb-8 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Featured Projects
            </h1>
            <p className="text-luxury-100 max-w-2xl text-lg">
              Explore our portfolio of successful partnerships and transformative solutions across various industries.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="space-y-2">
                    <span className="text-gold-200 text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-luxury-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
