import { useState, useEffect, useRef } from 'react';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, tags, demoLink = "#", githubLink = "#" }) => {
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
      className={`bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)] hover:border-[#667eea] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full h-[200px] gradient-bg flex items-center justify-center text-5xl">{icon}</div>
      <div className="p-6">
        <h3 className="text-2xl mb-4 text-white">{title}</h3>
        <p className="text-[#cbd5e0] mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[rgba(102,126,234,0.2)] px-3 py-1.5 rounded-full text-sm text-[#cbd5e0]">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href={demoLink} className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">View Demo →</a>
          <a href={githubLink} className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">GitHub →</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
