import { useState, useEffect, useRef } from 'react';
import { Atom, Settings, Cloud, Bot } from 'lucide-react';

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
}

const SkillCard = ({ icon, title, description, tags }: SkillCardProps) => {
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
            className={`bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:bg-white/8 hover:border-[#667eea] hover:shadow-[0_10px_40px_rgba(102,126,234,0.3)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="text-[#667eea] mb-4">{icon}</div>
            <h3 className="text-2xl mb-4 text-[#667eea]">{title}</h3>
            <p className="text-[#cbd5e0] leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-[rgba(102,126,234,0.2)] px-3 py-1.5 rounded-full text-sm text-[#cbd5e0]">{tag}</span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
const skills = [
    {
        icon: <Atom size={48} />,
        title: "Frontend",
        description: "Next.jsとTypeScriptを活用した高度なフロントエンド開発。SSR最適化やPrefetch/Suspenseによるパフォーマンス改善、Auth.jsによる認証実装",
        tags: ["Next.js", "TypeScript", "React", "Zod", "Auth.js", "SSR"]
    },
    {
        icon: <Settings size={48} />,
        title: "Backend",
        description: "Azure FunctionsとPythonによるサーバーレスAPI開発。HTML→Office形式変換APIの設計・実装とデプロイ",
        tags: ["Python", "Azure Functions", "API開発", "PostgreSQL", "Cosmos DB"]
    },
    {
        icon: <Cloud size={48} />,
        title: "Cloud & DevOps",
        description: "複数のAzureサービスを組み合わせたクラウドインフラ構築。BlobStorage、KeyVault、VNetなどを活用したセキュアな環境設計",
        tags: ["Azure", "BlobStorage", "KeyVault", "VNet", "Docker", "App Service"]
    },
    {
        icon: <Bot size={48} />,
        title: "AI & LLM",
        description: "Azure OpenAI Serviceを活用した社内生成AIプロダクトの開発。RAGによる情報検索、プロンプト設計、AIレスポンスの処理・表示の実装",
        tags: ["Azure OpenAI", "RAG", "プロンプトエンジニアリング", "LLMアプリケーション"]
    }
];

    return (
        <section id="skills" className="py-20 px-[5%] max-w-[1400px] mx-auto">
            <h2 className="text-4xl mb-12 text-center gradient-text-white">Skills & Expertise</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
