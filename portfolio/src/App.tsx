import { useState, useEffect, useRef } from 'react';

// Header Component
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 w-full px-[5%] py-6 backdrop-blur-md z-[1000] border-b border-white/10 transition-all duration-300 ${isScrolled ? 'bg-[rgba(10,10,10,0.95)]' : 'bg-[rgba(10,10,10,0.9)]'}`}>
            <nav className="flex justify-between items-center max-w-[1400px] mx-auto">
                <div className="text-2xl font-bold gradient-text">TY</div>
                <ul className="flex gap-8 list-none md:gap-4">
                    <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Home</a></li>
                    <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Skills</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Projects</a></li>
                    <li><a href="#project-details" onClick={(e) => scrollToSection(e, 'project-details')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Details</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Hero Component
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-[5%] py-8 relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(102,126,234,0.3)_0%,transparent_70%)] -top-[250px] -right-[250px] animate-float"></div>
            <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(118,75,162,0.3)_0%,transparent_70%)] -bottom-[200px] -left-[200px] animate-float-slow"></div>
            
            <div className="max-w-[1400px] w-full z-10">
                <h1 className="text-[clamp(2.5rem,8vw,5rem)] mb-4 gradient-text-white animate-fadeInUp">Taro Yamada</h1>
                <h2 className="text-[clamp(1.2rem,3vw,2rem)] text-[#a0aec0] mb-8 animate-fadeInUp-delay-1">Full Stack Developer</h2>
                <p className="text-lg text-[#cbd5e0] max-w-[600px] leading-relaxed mb-10 animate-fadeInUp-delay-2">
                    モダンな技術スタックを駆使して、ユーザー体験を重視したWebアプリケーションを開発しています。
                    クリーンなコードと革新的なソリューションで、ビジネス課題を解決します。
                </p>
                <div className="flex gap-4 flex-wrap animate-fadeInUp-delay-3">
                    <a href="#projects" className="px-8 py-4 rounded-full no-underline font-semibold transition-all duration-300 gradient-bg text-white hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)]">View Projects</a>
                    <a href="#contact" className="px-8 py-4 rounded-full no-underline font-semibold transition-all duration-300 bg-transparent text-white border-2 border-[#667eea] hover:bg-[rgba(102,126,234,0.1)] hover:-translate-y-1">Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

// Skill Card Component
interface SkillCardProps {
    icon: string;
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
            <div className="text-5xl mb-4">{icon}</div>
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

// Skills Component
const Skills = () => {
    const skills = [
        {
            icon: "⚛️",
            title: "Frontend",
            description: "モダンなUIライブラリとフレームワークを使用した、レスポンシブなWebアプリケーション開発",
            tags: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
        },
        {
            icon: "🔧",
            title: "Backend",
            description: "スケーラブルで保守性の高いサーバーサイドアプリケーションの設計と実装",
            tags: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            description: "クラウドインフラの構築と、CI/CDパイプラインによる自動化",
            tags: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
        },
        {
            icon: "🎨",
            title: "Design",
            description: "ユーザー中心のデザイン思考とプロトタイピング",
            tags: ["Figma", "UI/UX", "Design Systems", "Accessibility"]
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

// Project Card Component
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
                    <a href={demoLink} className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">View Demo →</a>
                    <a href={githubLink} className="text-[#667eea] no-underline font-semibold transition-colors duration-300 hover:text-[#764ba2]">GitHub →</a>
                </div>
            </div>
        </div>
    );
};

// Projects Component
const Projects = () => {
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
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

// Project Detail Component
interface Metric {
    value: string;
    label: string;
}

interface Challenge {
    title: string;
    description: string;
}

interface ProjectDetailProps {
    icon: string;
    title: string;
    subtitle: string;
    overview: string;
    features: string[];
    techStack: string[];
    challenges: Challenge[];
    metrics: Metric[];
}

const ProjectDetail = ({ icon, title, subtitle, overview, features, techStack, challenges, metrics }: ProjectDetailProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const detailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (detailRef.current) {
            observer.observe(detailRef.current);
        }

        return () => {
            if (detailRef.current) {
                observer.unobserve(detailRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={detailRef}
            className={`bg-white/[0.03] rounded-3xl p-12 max-md:p-6 mb-12 border border-white/10 transition-all duration-500 hover:border-[#667eea]/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10 max-md:flex-col max-md:text-center">
                <div className="text-6xl w-[100px] h-[100px] flex items-center justify-center gradient-bg-light rounded-3xl border-2 border-[#667eea]/30 max-md:w-20 max-md:h-20 max-md:text-5xl">{icon}</div>
                <div>
                    <h3 className="text-3xl mb-2 text-white max-md:text-2xl">{title}</h3>
                    <p className="text-[#a0aec0] text-lg">{subtitle}</p>
                </div>
            </div>
            
            <div className="text-[#cbd5e0]">
                <div className="mb-8">
                    <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">📋 プロジェクト概要</h4>
                    <p className="leading-relaxed">{overview}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">✨ 主要機能</h4>
                        <ul className="list-none p-0 detail-list">
                            {features.map((feature, index) => (
                                <li key={index} className="py-2 pl-6 relative leading-normal">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">🔧 技術スタック</h4>
                        <ul className="list-none p-0 detail-list">
                            {techStack.map((tech, index) => (
                                <li key={index} className="py-2 pl-6 relative leading-normal" dangerouslySetInnerHTML={{ __html: tech }}></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">💡 技術的チャレンジと解決策</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                                <strong className="block text-[#667eea] mb-2 text-lg">{challenge.title}</strong>
                                <p className="text-sm leading-relaxed">{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
                    {metrics.map((metric, index) => (
                        <div key={index} className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
                            <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                            <div className="text-sm text-[#a0aec0]">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Project Details Component
const ProjectDetails = () => {
    const projectDetails = [
        {
            icon: "🛒",
            title: "E-Commerce Platform",
            subtitle: "フルスタックECサイト構築プロジェクト",
            overview: "中小企業向けの本格的なECプラットフォーム。リアルタイム在庫管理、セキュアな決済処理、管理者用ダッシュボードを統合したフルスタックアプリケーション。月間1万PVを達成し、コンバージョン率3.5%を実現。",
            features: [
                "商品検索・フィルタリングシステム",
                "ショッピングカート・ウィッシュリスト",
                "Stripe連携による決済処理",
                "注文追跡・履歴管理",
                "レビュー・評価システム",
                "在庫管理・自動通知",
                "クーポン・割引機能",
                "管理者用CMS"
            ],
            techStack: [
                "<strong class='text-white'>Frontend:</strong> Next.js 14, TypeScript, Tailwind CSS",
                "<strong class='text-white'>Backend:</strong> Next.js API Routes, Prisma ORM",
                "<strong class='text-white'>Database:</strong> PostgreSQL",
                "<strong class='text-white'>Payment:</strong> Stripe API",
                "<strong class='text-white'>Storage:</strong> AWS S3 (商品画像)",
                "<strong class='text-white'>Deployment:</strong> Vercel",
                "<strong class='text-white'>Auth:</strong> NextAuth.js"
            ],
            challenges: [
                {
                    title: "在庫管理の同期問題",
                    description: "複数ユーザーが同時に購入する際の在庫競合を、楽観的ロックとトランザクション処理で解決。在庫不足エラーを95%削減。"
                },
                {
                    title: "決済セキュリティ",
                    description: "Stripe Webhookを活用した非同期決済処理により、セキュアかつ信頼性の高い決済フローを実装。PCI DSS準拠。"
                },
                {
                    title: "画像最適化",
                    description: "Next.js Image Optimizationと遅延読み込みにより、初期ロード時間を60%短縮。Core Web Vitalsスコア90+を達成。"
                }
            ],
            metrics: [
                { value: "1万+", label: "月間PV" },
                { value: "3.5%", label: "CV率" },
                { value: "0.8秒", label: "平均読み込み" },
                { value: "95+", label: "Lighthouse" }
            ]
        },
        {
            icon: "📊",
            title: "Analytics Dashboard",
            subtitle: "リアルタイムデータ分析プラットフォーム",
            overview: "企業のKPI追跡とデータ分析を目的とした、リアルタイムダッシュボードシステム。複数のデータソースを統合し、カスタマイズ可能なウィジェットで視覚化。チーム全体のデータドリブンな意思決定をサポート。",
            features: [
                "リアルタイムデータ更新（WebSocket）",
                "ドラッグ&ドロップでカスタマイズ可能なレイアウト",
                "10種類以上のチャート・グラフ",
                "複数データソース統合（API、CSV、DB）",
                "カスタムアラート・通知設定",
                "PDFレポート自動生成",
                "チーム共有・権限管理",
                "ダークモード対応"
            ],
            techStack: [
                "<strong class='text-white'>Frontend:</strong> React 18, TypeScript, Recharts",
                "<strong class='text-white'>State Management:</strong> Zustand",
                "<strong class='text-white'>Backend:</strong> Node.js, Express",
                "<strong class='text-white'>Real-time:</strong> Socket.io",
                "<strong class='text-white'>Database:</strong> MongoDB, Redis (キャッシュ)",
                "<strong class='text-white'>Data Processing:</strong> Apache Kafka",
                "<strong class='text-white'>Deployment:</strong> Docker, AWS ECS"
            ],
            challenges: [
                {
                    title: "大量データのパフォーマンス",
                    description: "仮想スクロール、データページネーション、Redisキャッシングにより、100万件のデータを瞬時に表示。レスポンスタイムを80%改善。"
                },
                {
                    title: "リアルタイム同期",
                    description: "Socket.ioとRedis Pub/Subを活用し、複数クライアント間でのデータ同期を実現。遅延を50ms以下に抑制。"
                },
                {
                    title: "複雑なチャート描画",
                    description: "Web Workerでのデータ処理とCanvas最適化により、複雑なグラフもスムーズに描画。60FPSを維持。"
                }
            ],
            metrics: [
                { value: "100万+", label: "処理データ件数" },
                { value: "<50ms", label: "更新遅延" },
                { value: "500+", label: "同時接続" },
                { value: "99.9%", label: "稼働率" }
            ]
        },
        {
            icon: "💬",
            title: "Real-time Chat Application",
            subtitle: "エンタープライズ向けチャットシステム",
            overview: "企業内コミュニケーションを効率化する、フル機能のリアルタイムチャットアプリケーション。Slackライクなインターフェースで、1000人以上のユーザーが同時利用可能。エンドツーエンド暗号化により、セキュアなコミュニケーションを実現。",
            features: [
                "1対1・グループチャット",
                "ファイル・画像共有（最大100MB）",
                "音声・ビデオ通話（WebRTC）",
                "メッセージ検索・フィルタ",
                "既読・未読管理",
                "リアクション・スレッド返信",
                "通知設定・ミュート機能",
                "メンション・@通知"
            ],
            techStack: [
                "<strong class='text-white'>Frontend:</strong> Vue.js 3, TypeScript, Pinia",
                "<strong class='text-white'>UI:</strong> Element Plus, Custom Components",
                "<strong class='text-white'>Backend:</strong> Node.js, NestJS",
                "<strong class='text-white'>Real-time:</strong> Socket.io, WebRTC",
                "<strong class='text-white'>Database:</strong> PostgreSQL, Redis",
                "<strong class='text-white'>Storage:</strong> MinIO (自社ホスト)",
                "<strong class='text-white'>Encryption:</strong> End-to-End Encryption"
            ],
            challenges: [
                {
                    title: "スケーラビリティ",
                    description: "Redis Adapter + Socket.io Clusteringにより、水平スケーリングを実現。1000人以上の同時接続をサポート。"
                },
                {
                    title: "メッセージ配信の信頼性",
                    description: "ACK機構とメッセージキューにより、ネットワーク不安定時でもメッセージロストゼロを実現。再接続時の自動同期機能を実装。"
                },
                {
                    title: "セキュリティ",
                    description: "Signal Protocolベースのエンドツーエンド暗号化により、サーバー管理者でもメッセージ内容を閲覧不可能に。"
                }
            ],
            metrics: [
                { value: "1000+", label: "同時接続" },
                { value: "10万+", label: "日次メッセージ" },
                { value: "100ms", label: "メッセージ遅延" },
                { value: "E2E", label: "暗号化" }
            ]
        }
    ];

    return (
        <section id="project-details" className="py-20 px-[5%] max-w-[1400px] mx-auto">
            <h2 className="text-4xl mb-12 text-center gradient-text-white">Project Deep Dive</h2>
            {projectDetails.map((detail, index) => (
                <ProjectDetail key={index} {...detail} />
            ))}
        </section>
    );
};

// Contact Component
const Contact = () => {
    const socialLinks = [
        { icon: "G", title: "GitHub", href: "#" },
        { icon: "in", title: "LinkedIn", href: "#" },
        { icon: "𝕏", title: "Twitter", href: "#" },
        { icon: "✉", title: "Email", href: "mailto:example@email.com" }
    ];

    return (
        <section id="contact" className="py-20 px-[5%] max-w-[1400px] mx-auto">
            <div className="text-center bg-white/[0.03] rounded-3xl p-16 max-md:p-8 border border-white/10">
                <h2 className="text-4xl mb-4 gradient-text-white">Let's Connect</h2>
                <p className="text-[#cbd5e0] text-lg max-w-[600px] mx-auto mb-8">
                    新しいプロジェクトやコラボレーションの機会について、お気軽にご連絡ください。
                </p>
                <div className="flex justify-center gap-8 mt-8 max-sm:gap-4">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index}
                            href={link.href} 
                            className="w-[60px] h-[60px] rounded-full bg-[#667eea]/10 flex items-center justify-center text-[#667eea] no-underline text-2xl border-2 border-[#667eea]/30 transition-all duration-300 hover:bg-[#667eea] hover:text-white hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)]" 
                            title={link.title}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="text-center py-8 px-[5%] text-[#718096] border-t border-white/10">
            <p>&copy; 2025 Taro Yamada. All rights reserved.</p>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <ProjectDetails />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
