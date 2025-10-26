import { useState, useEffect, useRef } from 'react';

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

export default ProjectDetails;
