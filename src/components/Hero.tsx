
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-luxury-950 text-white">
      {/* Background layers for depth and movement */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gold-900/90 via-gold-800/80 to-black opacity-90"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 bg-[length:200%_100%] animate-[gradient_8s_ease-in-out_infinite]"></div>
      
      {/* Moving particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-200/20 animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 15 + 's'
              }}
            ></div>
          ))}
        </div>
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
            <button className="bg-gold-500 hover:bg-gold-400 text-black px-8 py-3 rounded-full font-medium inline-flex items-center transition-all">
              View Projects
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gold-700/50 hover:border-gold-600 px-8 py-3 rounded-full font-medium inline-flex items-center transition-all">
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
