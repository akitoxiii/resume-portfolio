import Layout from "../components/Layout";
import Section from "../components/Section";

export default function About() {
  return (
    <Layout>
      <Section title="自己紹介">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">基本情報</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><span className="font-medium">氏名:</span> 黒田 滉斗 (くろだ あきと)</div>
              <div><span className="font-medium">生年月日:</span> 2002年6月22日 (満23歳)</div>
              <div><span className="font-medium">所在地:</span> 愛知県刈谷市</div>
              <div><span className="font-medium">メールアドレス:</span> akito62226@gmail.com</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">職務要約</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                2024年11月にSCSKニアショアシステムズ株式会社に入社し、大手保険会社向けプロジェクトにSEとして参加。
                ソフトウェアの修正・保守業務（システムエラーログ対応など）を担当しました。
              </p>
              <p>
                詳細設計から開発、結合テストまで幅広く担当し、豊富な経験を積むことができました。
                特にAdobeプラグインバグ対応プロジェクトでは、EdgeのIEモードでのフリーズ問題を解決し、
                既存とは別のドメインを発行してリダイレクトする改修を実施しました。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">自己PR・成果</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                中途入社後、インフラ系プロジェクトでの運用・保守業務を担当。
                効率的なエラー原因調査とログ抽出・整形を行う社内ツールを開発し、
                レスポンス時間の大幅な短縮とチーム効率の向上を実現しました。
              </p>
              <p>
                既存システム修正プロジェクトでは、フロントエンド（JavaScript/Vue.js）と
                バックエンド（Java/Spring）の修正タスクを幅広く担当。
                軽微なUI調整からサーバーサイドロジック修正、DB連携まで、
                柔軟な対応能力を発揮しています。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">志望動機・特技・アピールポイント</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                私は、新しい技術への挑戦意欲が高く、継続的な学習を大切にしています。
                プログラミングスクールZERUQアカデミーでHTML5, CSS, jQuery, Javaを学び、
                実践的なWeb開発スキルを身につけました。
              </p>
              <p>
                言語の壁を経験したことで、学習の重要性と継続的な成長の大切さを深く理解しています。
                この経験を活かし、ユーザーにとって使いやすく、魅力的なWebアプリケーションの開発に
                取り組みたいと考えています。
              </p>
              <p>
                チーム開発での協力を得意としており、コミュニケーションを大切にしながら
                プロジェクトの成功に貢献できるエンジニアを目指しています。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">得意分野・専門技術</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-medium">得意分野:</span> Webアプリ詳細設計・実装、Webアプリ保守・運用</p>
              <p><span className="font-medium">得意技術:</span> HTML5, CSS, jQuery, Javaによるバックエンド開発</p>
              <p><span className="font-medium">得意工程:</span> WEBサービスの開発・構築</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">趣味・関心事</h3>
            <p className="text-gray-700">
              プログラミング、新しい技術の学習、Webデザイン、ユーザビリティの向上など、
              フロントエンド開発に関連する分野に特に興味があります。
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
