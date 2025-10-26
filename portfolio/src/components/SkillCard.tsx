import { useState, useEffect, useRef } from 'react';

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, tags }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white/8 p-8 rounded-2xl border border-white/15 transition-all duration-500 hover:-translate-y-3 hover:bg-white/12 hover:border-[#8ba6ff] hover:shadow-[0_10px_40px_rgba(139,166,255,0.4)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl mb-4 text-[#8ba6ff]">{title}</h3>
      <p className="text-[#e2e8f0] leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[rgba(139,166,255,0.25)] px-3 py-1.5 rounded-full text-sm text-[#e2e8f0]">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
