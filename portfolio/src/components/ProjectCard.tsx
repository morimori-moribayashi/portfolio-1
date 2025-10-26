interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, technologies }) => {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)] hover:border-[#667eea]">
      <div className="w-full h-[200px] gradient-bg flex items-center justify-center text-5xl">{icon}</div>
      <div className="p-6">
        <h3 className="text-2xl mb-4 text-white">{title}</h3>
        <p className="text-[#cbd5e0] mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-[rgba(102,126,234,0.2)] px-3 py-1.5 rounded-full text-sm text-[#cbd5e0]">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a href="#" className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">View Demo →</a>
          <a href="#" className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">GitHub →</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
