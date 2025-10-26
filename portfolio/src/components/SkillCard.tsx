interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, skills }) => {
  return (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-3 hover:bg-white/8 hover:border-[#667eea] hover:shadow-[0_10px_40px_rgba(102,126,234,0.3)]">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl mb-4 text-[#667eea]">{title}</h3>
      <p className="text-[#cbd5e0] leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-[rgba(102,126,234,0.2)] px-3 py-1.5 rounded-full text-sm text-[#cbd5e0]">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
