import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const projects = [
    {
      icon: "🛒",
      title: "E-Commerce Platform",
      description: "React、Next.js、Stripeを使用した本格的なECサイト。リアルタイム在庫管理と決済システムを実装。",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "データビジュアライゼーションに特化したダッシュボード。リアルタイムデータ更新とカスタマイズ可能なウィジェット。",
      tags: ["React", "D3.js", "WebSocket"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: "💬",
      title: "Real-time Chat App",
      description: "WebSocketを活用したリアルタイムチャットアプリケーション。グループチャット、ファイル共有機能を搭載。",
      tags: ["Vue.js", "Socket.io", "Redis"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-[5%] max-w-[1400px] mx-auto">
      <h2 className="text-4xl mb-12 text-center gradient-text-white">Featured Projects</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-md:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
