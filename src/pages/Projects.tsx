
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Bilue",
    description: "Digital Innovation Partner",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    category: "Digital Transformation"
  },
  {
    id: 2,
    name: "Sculpted",
    description: "Wellness & Fitness Platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    category: "Health Tech"
  },
  {
    id: 3,
    name: "Wedded Wonderland",
    description: "Wedding Planning Platform",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    category: "Marketplace"
  },
  {
    id: 4,
    name: "Campaign Monitor",
    description: "Email Marketing Platform",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    category: "MarTech"
  },
  {
    id: 5,
    name: "St Trinity Property Group",
    description: "Real Estate Development",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    category: "Property"
  },
  {
    id: 6,
    name: "Wonder Group",
    description: "Innovation Consultancy",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    category: "Consulting"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-luxury-950 text-white">
      {/* Header with gradient and pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/90 to-luxury-950/90"></div>
        
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
              className="group relative overflow-hidden rounded-xl bg-luxury-900 hover:bg-luxury-800 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
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
  );
};

export default Projects;
