import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-luxury-950 text-white">
      {/* Background pattern layer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      {/* Gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-900/90 via-gold-800/80 to-black opacity-90"></div>
      
      {/* Multiple animated gradient overlays */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-[length:200%_100%] animate-[gradient_8s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-gold-300 via-transparent to-gold-300 bg-[length:100%_200%] animate-[gradient-y_12s_ease-in-out_infinite]"></div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-200/20 animate-float"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 15 + 's'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[150%] h-[100px] bg-gradient-to-r from-transparent via-gold-200/20 to-transparent rotate-[30deg] animate-ray"
            style={{
              top: `${Math.random() * 100}%`,
              left: '-50%',
              animationDelay: `${i * 3}s`,
              transform: `rotate(${30 + i * 15}deg)`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center bg-gold-900/30 backdrop-blur-sm px-4 py-2 rounded-full text-gold-200 animate-fade-in">
            <ChevronRight className="w-4 h-4 mr-2" />
            <span className="text-sm">Strategic Growth & RevOps Leader</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-in [animation-delay:200ms]">
            Innovate.<br />Transform.<br />Scale.
          </h1>
          
          <p className="text-lg md:text-xl text-luxury-100 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Empowering revenue growth through strategic RevOps leadership and seamless operations across global SaaS & marketplace platforms.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-gold-200 hover:bg-gold-100 text-luxury-950 px-8 py-3 rounded-full font-medium inline-flex items-center transition-all"
            >
              View Projects
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gold-200/30 hover:border-gold-200/50 px-8 py-3 rounded-full font-medium inline-flex items-center transition-all hover:bg-gold-200/10">
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
