
import { ChevronRight, RocketLaunch } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-luxury-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-900 to-black opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center bg-gold-900/30 backdrop-blur-sm px-4 py-2 rounded-full text-gold-200 animate-fade-in">
            <RocketLaunch className="w-4 h-4 mr-2" />
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
            <button className="border border-luxury-700 hover:border-luxury-600 px-8 py-3 rounded-full font-medium inline-flex items-center transition-all">
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
