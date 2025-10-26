interface ProjectDetailsProps {}

const ProjectDetailsSection: React.FC<ProjectDetailsProps> = () => {
  return (
    <section id="project-details" className="py-20 px-[5%] max-w-[1400px] mx-auto">
      <h2 className="text-4xl mb-12 text-center gradient-text-white">Project Deep Dive</h2>
      
      {/* E-Commerce Platform Detail */}
      <div className="bg-white/[0.03] rounded-3xl p-12 max-md:p-6 mb-12 border border-white/10 transition-all duration-300 hover:border-[#667eea]/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10 max-md:flex-col max-md:text-center">
          <div className="text-6xl w-[100px] h-[100px] flex items-center justify-center gradient-bg-light rounded-3xl border-2 border-[#667eea]/30 max-md:w-20 max-md:h-20 max-md:text-5xl">🛒</div>
          <div>
            <h3 className="text-3xl mb-2 text-white max-md:text-2xl">E-Commerce Platform</h3>
            <p className="text-[#a0aec0] text-lg">フルスタックECサイト構築プロジェクト</p>
          </div>
        </div>
        
        <div className="text-[#cbd5e0]">
          <div className="mb-8">
            <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">📋 プロジェクト概要</h4>
            <p className="leading-relaxed">中小企業向けの本格的なECプラットフォーム。リアルタイム在庫管理、セキュアな決済処理、管理者用ダッシュボードを統合したフルスタックアプリケーション。月間1万PVを達成し、コンバージョン率3.5%を実現。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">✨ 主要機能</h4>
              <ul className="list-none p-0 detail-list">
                <li className="py-2 pl-6 relative leading-normal">商品検索・フィルタリングシステム</li>
                <li className="py-2 pl-6 relative leading-normal">ショッピングカート・ウィッシュリスト</li>
                <li className="py-2 pl-6 relative leading-normal">Stripe連携による決済処理</li>
                <li className="py-2 pl-6 relative leading-normal">注文追跡・履歴管理</li>
                <li className="py-2 pl-6 relative leading-normal">レビュー・評価システム</li>
                <li className="py-2 pl-6 relative leading-normal">在庫管理・自動通知</li>
                <li className="py-2 pl-6 relative leading-normal">クーポン・割引機能</li>
                <li className="py-2 pl-6 relative leading-normal">管理者用CMS</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">🔧 技術スタック</h4>
              <ul className="list-none p-0 detail-list">
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Frontend:</strong> Next.js 14, TypeScript, Tailwind CSS</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Backend:</strong> Next.js API Routes, Prisma ORM</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Database:</strong> PostgreSQL</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Payment:</strong> Stripe API</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Storage:</strong> AWS S3 (商品画像)</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Deployment:</strong> Vercel</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Auth:</strong> NextAuth.js</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">💡 技術的チャレンジと解決策</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">在庫管理の同期問題</strong>
                <p className="text-sm leading-relaxed">複数ユーザーが同時に購入する際の在庫競合を、楽観的ロックとトランザクション処理で解決。在庫不足エラーを95%削減。</p>
              </div>
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">決済セキュリティ</strong>
                <p className="text-sm leading-relaxed">Stripe Webhookを活用した非同期決済処理により、セキュアかつ信頼性の高い決済フローを実装。PCI DSS準拠。</p>
              </div>
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">画像最適化</strong>
                <p className="text-sm leading-relaxed">Next.js Image Optimizationと遅延読み込みにより、初期ロード時間を60%短縮。Core Web Vitalsスコア90+を達成。</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">1万+</div>
              <div className="text-sm text-[#a0aec0]">月間PV</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">3.5%</div>
              <div className="text-sm text-[#a0aec0]">CV率</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">0.8秒</div>
              <div className="text-sm text-[#a0aec0]">平均読み込み</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">95+</div>
              <div className="text-sm text-[#a0aec0]">Lighthouse</div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Detail */}
      <div className="bg-white/[0.03] rounded-3xl p-12 max-md:p-6 mb-12 border border-white/10 transition-all duration-300 hover:border-[#667eea]/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10 max-md:flex-col max-md:text-center">
          <div className="text-6xl w-[100px] h-[100px] flex items-center justify-center gradient-bg-light rounded-3xl border-2 border-[#667eea]/30 max-md:w-20 max-md:h-20 max-md:text-5xl">📊</div>
          <div>
            <h3 className="text-3xl mb-2 text-white max-md:text-2xl">Analytics Dashboard</h3>
            <p className="text-[#a0aec0] text-lg">リアルタイムデータ分析プラットフォーム</p>
          </div>
        </div>
        
        <div className="text-[#cbd5e0]">
          <div className="mb-8">
            <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">📋 プロジェクト概要</h4>
            <p className="leading-relaxed">企業のKPI追跡とデータ分析を目的とした、リアルタイムダッシュボードシステム。複数のデータソースを統合し、カスタマイズ可能なウィジェットで視覚化。チーム全体のデータドリブンな意思決定をサポート。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">✨ 主要機能</h4>
              <ul className="list-none p-0 detail-list">
                <li className="py-2 pl-6 relative leading-normal">リアルタイムデータ更新（WebSocket）</li>
                <li className="py-2 pl-6 relative leading-normal">ドラッグ&ドロップでカスタマイズ可能なレイアウト</li>
                <li className="py-2 pl-6 relative leading-normal">10種類以上のチャート・グラフ</li>
                <li className="py-2 pl-6 relative leading-normal">複数データソース統合（API、CSV、DB）</li>
                <li className="py-2 pl-6 relative leading-normal">カスタムアラート・通知設定</li>
                <li className="py-2 pl-6 relative leading-normal">PDFレポート自動生成</li>
                <li className="py-2 pl-6 relative leading-normal">チーム共有・権限管理</li>
                <li className="py-2 pl-6 relative leading-normal">ダークモード対応</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">🔧 技術スタック</h4>
              <ul className="list-none p-0 detail-list">
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Frontend:</strong> React 18, TypeScript, Recharts</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">State Management:</strong> Zustand</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Backend:</strong> Node.js, Express</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Real-time:</strong> Socket.io</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Database:</strong> MongoDB, Redis (キャッシュ)</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Data Processing:</strong> Apache Kafka</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Deployment:</strong> Docker, AWS ECS</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">💡 技術的チャレンジと解決策</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">大量データのパフォーマンス</strong>
                <p className="text-sm leading-relaxed">仮想スクロール、データページネーション、Redisキャッシングにより、100万件のデータを瞬時に表示。レスポンスタイムを80%改善。</p>
              </div>
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">リアルタイム同期</strong>
                <p className="text-sm leading-relaxed">Socket.ioとRedis Pub/Subを活用し、複数クライアント間でのデータ同期を実現。遅延を50ms以下に抑制。</p>
              </div>
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">複雑なチャート描画</strong>
                <p className="text-sm leading-relaxed">Web Workerでのデータ処理とCanvas最適化により、複雑なグラフもスムーズに描画。60FPSを維持。</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">100万+</div>
              <div className="text-sm text-[#a0aec0]">処理データ件数</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">&lt;50ms</div>
              <div className="text-sm text-[#a0aec0]">更新遅延</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-[#a0aec0]">同時接続</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-[#a0aec0]">稼働率</div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Chat App Detail */}
      <div className="bg-white/[0.03] rounded-3xl p-12 max-md:p-6 mb-12 border border-white/10 transition-all duration-300 hover:border-[#667eea]/50 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10 max-md:flex-col max-md:text-center">
          <div className="text-6xl w-[100px] h-[100px] flex items-center justify-center gradient-bg-light rounded-3xl border-2 border-[#667eea]/30 max-md:w-20 max-md:h-20 max-md:text-5xl">💬</div>
          <div>
            <h3 className="text-3xl mb-2 text-white max-md:text-2xl">Real-time Chat Application</h3>
            <p className="text-[#a0aec0] text-lg">エンタープライズ向けチャットシステム</p>
          </div>
        </div>
        
        <div className="text-[#cbd5e0]">
          <div className="mb-8">
            <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">📋 プロジェクト概要</h4>
            <p className="leading-relaxed">企業内コミュニケーションを効率化する、フル機能のリアルタイムチャットアプリケーション。Slackライクなインターフェースで、1000人以上のユーザーが同時利用可能。エンドツーエンド暗号化により、セキュアなコミュニケーションを実現。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">✨ 主要機能</h4>
              <ul className="list-none p-0 detail-list">
                <li className="py-2 pl-6 relative leading-normal">1対1・グループチャット</li>
                <li className="py-2 pl-6 relative leading-normal">ファイル・画像共有（最大100MB）</li>
                <li className="py-2 pl-6 relative leading-normal">音声・ビデオ通話（WebRTC）</li>
                <li className="py-2 pl-6 relative leading-normal">メッセージ検索・フィルタ</li>
                <li className="py-2 pl-6 relative leading-normal">既読・未読管理</li>
                <li className="py-2 pl-6 relative leading-normal">リアクション・スレッド返信</li>
                <li className="py-2 pl-6 relative leading-normal">通知設定・ミュート機能</li>
                <li className="py-2 pl-6 relative leading-normal">メンション・@通知</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">🔧 技術スタック</h4>
              <ul className="list-none p-0 detail-list">
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Frontend:</strong> Vue.js 3, TypeScript, Pinia</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">UI:</strong> Element Plus, Custom Components</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Backend:</strong> Node.js, NestJS</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Real-time:</strong> Socket.io, WebRTC</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Database:</strong> PostgreSQL, Redis</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Storage:</strong> MinIO (自社ホスト)</li>
                <li className="py-2 pl-6 relative leading-normal"><strong className="text-white">Encryption:</strong> End-to-End Encryption</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-[#667eea] text-xl mb-4 flex items-center gap-2">💡 技術的チャレンジと解決策</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">スケーラビリティ</strong>
                <p className="text-sm leading-relaxed">Redis Adapter + Socket.io Clusteringにより、水平スケーリングを実現。1000人以上の同時接続をサポート。</p>
              </div>
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">メッセージ配信の信頼性</strong>
                <p className="text-sm leading-relaxed">ACK機構とメッセージキューにより、ネットワーク不安定時でもメッセージロストゼロを実現。再接続時の自動同期機能を実装。</p>
              </div>
              <div className="bg-[#667eea]/10 p-6 rounded-xl border border-[#667eea]/20">
                <strong className="block text-[#667eea] mb-2 text-lg">セキュリティ</strong>
                <p className="text-sm leading-relaxed">Signal Protocolベースのエンドツーエンド暗号化により、サーバー管理者でもメッセージ内容を閲覧不可能に。</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-sm text-[#a0aec0]">同時接続</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">10万+</div>
              <div className="text-sm text-[#a0aec0]">日次メッセージ</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">100ms</div>
              <div className="text-sm text-[#a0aec0]">メッセージ遅延</div>
            </div>
            <div className="text-center p-6 bg-[#667eea]/5 rounded-xl border border-[#667eea]/20">
              <div className="text-3xl font-bold gradient-text mb-2">E2E</div>
              <div className="text-sm text-[#a0aec0]">暗号化</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
