import { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
    images?: string[];
}

const ProjectDetail = ({ icon, title, subtitle, overview, features, techStack, challenges, metrics, images }: ProjectDetailProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
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

                {images && images.length > 0 && (
                    <>
                        <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {images.map((image, index) => (
                                    <div key={index} className="bg-[#667eea]/10 p-4 rounded-xl border border-[#667eea]/20">
                                        <img 
                                            src={image} 
                                            alt={`${title} - 画像 ${index + 1}`}
                                            className="w-full h-80 md:h-96 object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                                            onClick={() => {
                                                setLightboxIndex(index);
                                                setLightboxOpen(true);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <Lightbox
                            open={lightboxOpen}
                            close={() => setLightboxOpen(false)}
                            index={lightboxIndex}
                            slides={images.map(src => ({ src }))}
                        />
                    </>
                )}

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
            </div>
        </div>
    );
};

const ProjectDetails = () => {
    const projectDetails = [
            {
            icon: "📝",
            title: "Commit-Create",
            subtitle: "朝会・終業報告自動生成ツール",
            overview: "日々の朝会メッセージと終業報告を効率的に作成できるWebアプリケーション。コミット内容をチェックリスト形式で管理し、達成率に応じた報告文を自動生成。LocalStorageによるデータ永続化で、入力内容を保持しながらスムーズな業務報告をサポート。",
            features: [
                "朝会メッセージの自動生成",
                "終業報告の自動生成（達成/未達の自動分類）",
                "チェックリスト形式のコミット管理",
                "達成率のパーセンテージ設定（0-90%）",
                "複数行対応のコミット入力",
                "ワンクリックでクリップボードにコピー",
                "LocalStorageによるデータ自動保存",
                "レスポンシブデザイン対応"
            ],
            techStack: [
                "Frontend: React 18, Vite",
                "Styling: Tailwind CSS",
                "State Management: React Hooks (useState, useEffect)",
                "Utilities: clsx (条件付きクラス管理)",
                "Storage: LocalStorage API",
                "Deployment: GitHub Pages",
                "Build Tool: Vite 6"
            ],
            challenges: [
                {
                    title: "データ永続化の最適化",
                    description: "useEffectと500msの遅延保存により、頻繁な入力変更でもパフォーマンスを維持しながらLocalStorageへの自動保存を実現。クリーンアップ処理でメモリリークを防止。"
                },
                {
                    title: "複数行テキストの整形処理",
                    description: "改行を含むコミット内容を適切にインデントして表示する文字列処理を実装。`\\n`を`\\n　　`に置換することで、報告文の可読性を向上。"
                },
                {
                    title: "UXの向上",
                    description: "コピーボタンの視覚的フィードバック（2秒間のラベル変更）、Ctrl+Enterでの項目追加、空文字列の自動フィルタリングなど、細かなUI/UX改善を実装。"
                }
            ],
            metrics: [
                { value: "500ms", label: "自動保存間隔" },
                { value: "2秒", label: "コピー完了表示" },
                { value: "100%", label: "データ永続化" },
                { value: "レスポンシブ", label: "対応デバイス" }
            ],
            images: ["/commit-create.png"]
        }
    ,
        {
            icon: "📧",
            title: "SES営業メール自動生成・案件リサーチシステム",
            subtitle: "OpenAIとGmailを活用した営業支援・求人マッチングツール",
            overview: "SES企業の営業担当者の業務効率化を目指し、個人開発で取り組んだAI活用型の営業支援ツールです。実際の営業現場の課題を解決するため、OpenAIとGmail APIを連携させた実用的なシステムを設計・実装しました。",
            features: [
                "AI駆動の営業メール自動生成・編集",
                "エンジニアプロファイルに基づくGmail検索クエリ作成",
                "PDFアップロードとマークダウン変換",
                "案件情報の深層分析と評価（DeepResearch）",
                "複数戦略に基づく案件検索とフィルタリング",
                "マッチング分析とアクション提案",
                "リアルタイムストリーミングレスポンス"
            ],
            techStack: [
                "Frontend: Next.js 15.5, React 19, Material UI, TailwindCSS",
                "Backend: Node.js, Express, Socket.IO",
                "AI: OpenAI GPT-4.1系列",
                "API: Gmail API連携",
                "Integration: WebSocket, Server-Sent Events",
                "Containerization: Docker",
                "State Management: React Hooks",
                "Form Processing: zod, FormData"
            ],
            challenges: [
                {
                    title: "複雑なAIプロンプト設計",
                    description: "複数ステップの深層分析を実現するための精密なAIプロンプト設計と応答解析システムを構築。戦略立案からフィルター生成、評価まで一貫したAI処理パイプラインを実装。"
                },
                {
                    title: "リアルタイムプロセス可視化",
                    description: "WebSocketとServer-Sent Eventsを活用し、長時間かかる処理をリアルタイムに進捗表示。複雑なAI処理ステップをユーザーに視覚的に伝えるインジケーターシステムを開発。"
                },
                {
                    title: "Gmail API統合と検索最適化",
                    description: "Gmail APIを効果的に活用するためのフィルター生成アルゴリズムと並列検索処理を実装。レート制限に対応し、大量メールの効率的な検索・分析を実現。"
                }
            ],
            metrics: [],
            images: ["/auto-sales-email.png"]
        },
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

export default ProjectDetails;
