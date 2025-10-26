import SkillCard from './SkillCard';

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = () => {
  const skills = [
    {
      icon: "⚛️",
      title: "Frontend",
      description: "モダンなUIライブラリとフレームワークを使用した、レスポンシブなWebアプリケーション開発",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: "🔧",
      title: "Backend",
      description: "スケーラブルで保守性の高いサーバーサイドアプリケーションの設計と実装",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "クラウドインフラの構築と、CI/CDパイプラインによる自動化",
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      icon: "🎨",
      title: "Design",
      description: "ユーザー中心のデザイン思考とプロトタイピング",
      skills: ["Figma", "UI/UX", "Design Systems", "Accessibility"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-[5%] max-w-[1400px] mx-auto">
      <h2 className="text-4xl mb-12 text-center gradient-text-white">Skills & Expertise</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            skills={skill.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
