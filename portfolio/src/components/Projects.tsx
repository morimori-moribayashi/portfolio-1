import { useState, useEffect, useRef } from 'react';

interface ProjectCardProps {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    demoLink: string;
    githubLink: string;
}

const ProjectCard = ({ icon, title, description, tags, demoLink, githubLink }: ProjectCardProps) => {
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
                    {demoLink !== "" &&
                    <a href={demoLink} className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">View Demo →</a>
                    }
                    <a href={githubLink} className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">GitHub →</a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            icon: "🛒",
            title: "日報自動作成ツール",
            description: "業務での朝夕の業務報告書の作成を効率化するReactアプリケーション。TODO/実績項目を管理し、定型文を自動生成してワンクリックでコピーできます。",
            tags: ["React", "Javascript", "Tailwind CSS"],
            demoLink: "https://morimori-moribayashi.github.io/Commit-Create/",
            githubLink: "https://github.com/morimori-moribayashi/Commit-Create"
        },
        {
            icon: "📧",
            title: "SES営業メール自動生成・案件リサーチシステム",
            description: "AI駆動の営業メール自動生成システム。Gmail API連携による案件リサーチ機能とWebSocketを活用したリアルタイム処理で営業活動を効率化。",
            tags: ["Next.js", "TypeScript", "OpenAI API", "Socket.IO", "Gmail API"],
            demoLink: "",
            githubLink: "https://github.com/morimori-moribayashi/auto-sales-email"
        },
    ];

    return (
        <section id="projects" className="py-20 px-[5%] max-w-[1400px] mx-auto">
            <h2 className="text-4xl mb-12 text-center gradient-text-white">個人開発プロジェクト</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-md:grid-cols-1">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
