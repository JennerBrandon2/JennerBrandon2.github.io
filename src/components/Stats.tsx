
import { useState, useEffect } from 'react';

const stats = [
  { label: "Years Experience", value: 10 },
  { label: "Projects Delivered", value: 100 },
  { label: "AR Impressions", value: 40 },
  { label: "Team Members Led", value: 50 },
];

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prev => prev.map((count, i) => {
          if (i !== index) return count;
          const next = count + Math.ceil(stat.value / 30);
          return next >= stat.value ? stat.value : next;
        }));
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-24 bg-[#f2f7fc]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-[#1EAEDB] mb-2">
                {counts[index]}
                {index === 2 && "M+"}
                {index !== 2 && "+"}
              </div>
              <div className="text-sm text-[#555555]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
