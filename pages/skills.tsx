import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Skills() {
  return (
    <Layout>
      <Section title="スキル">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">得意分野・専門技術</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">得意分野</h4>
                <p className="text-gray-700">Webアプリ詳細設計・実装、Webアプリ保守・運用</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">得意技術</h4>
                <p className="text-gray-700">HTML5, CSS, jQuery, Javaによるバックエンド開発</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">得意工程</h4>
                <p className="text-gray-700">WEBサービスの開発・構築</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">技術スキル詳細</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">カテゴリ</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">スキル</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">経験年数</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">レベル</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">言語</td>
                    <td className="px-4 py-3 text-sm text-gray-900">TypeScript</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">基本的な構文や概念を理解し、簡単なタスクを実行できる</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">JavaScript</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">調べながらであれば作業可能、Adobeプラグインバグの案件で改修経験あり</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">HTML</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">高度なアーキテクチャや最適化に関する深い理解があり、他の開発者に指導や支援できる</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">CSS</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">大規模なプロジェクトの開発や、技術的な課題の解決に取り組むことができ、技術的なサポートや指導を提供できる</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">Java</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">少し複雑な問題にも対処でき、ドキュメントやオンラインリソースを活用しながら開発できる</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">DB</td>
                    <td className="px-4 py-3 text-sm text-gray-900">Microsoft SQLServer</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">基本的なCRUDは使用できるレベル</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">OracleDB</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">基本的なCRUDは使用できるレベル</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">サーバーOS</td>
                    <td className="px-4 py-3 text-sm text-gray-900">Windows</td>
                    <td className="px-4 py-3 text-sm text-gray-900">7年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">基本的な概念や機能を理解しており、単純なタスクやプロジェクトを遂行できるレベル</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">フレームワーク・ツール</td>
                    <td className="px-4 py-3 text-sm text-gray-900">Vue.js</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">調べながらであれば作業可能、バージョンアップの際にキャッチアップしながら使用した経験あり</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">React.js</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">調べながらであれば作業可能、バージョンアップの際にキャッチアップしながら使用した経験あり</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">jQuery</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">基本的な構文や概念を理解し、簡単なタスクを実行できる</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900"></td>
                    <td className="px-4 py-3 text-sm text-gray-900">Next.js</td>
                    <td className="px-4 py-3 text-sm text-gray-900">1年</td>
                    <td className="px-4 py-3 text-sm text-gray-700">調べながらであれば作業可能、バージョンアップの際にキャッチアップしながら使用した経験あり</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">学習・経験</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <h4 className="font-medium text-gray-800">プログラミングスクールZERUQアカデミー</h4>
                <p className="text-sm text-gray-600">2024年1月〜10月：HTML5, CSS, jQuery, Javaを中心とした実践的な学習</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <h4 className="font-medium text-gray-800">SCSKニアショアシステムズ株式会社</h4>
                <p className="text-sm text-gray-600">2024年11月〜2025年4月：第一営業本部 福井開発部での実務経験</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">プロジェクト経験</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Adobeプラグインバグ対応 (2025年1月〜4月)</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><span className="font-medium">概要:</span> EdgeのIEモードで資産画面と管理費画面の帳票ボタンを押すとフリーズするバグの対応</p>
                  <p><span className="font-medium">対応内容:</span> 既存とは別のドメインを発行し、リダイレクトするように改修</p>
                  <p><span className="font-medium">担当工程:</span> 詳細設計、コーディング、単体テスト(UT)、結合テスト(TTA, TTB)</p>
                  <p><span className="font-medium">技術スタック:</span> JavaScript, Java, Vue.js, Spring Framework, Microsoft SQLServer</p>
                  <p><span className="font-medium">役割・規模:</span> PG、開発7名、PdM1名</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">アクセスエラーログ対応 (2024年11月〜2025年4月)</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><span className="font-medium">概要:</span> EログやSQLログなどから、エラーの種類の識別を行う</p>
                  <p><span className="font-medium">担当工程:</span> 保守・運用</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">職務要約</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                2024年11月に企業に入社し、大手保険会社向けプロジェクトにSEとして参加。
                ソフトウェアの修正・保守業務（システムエラーログ対応など）を担当。
              </p>
              <p>
                詳細設計から開発、結合テストまで幅広く担当し、豊富な経験を積むことができました。
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">自己PR・成果</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                SCSKニアショアシステムズ株式会社に中途入社し、インフラ系プロジェクトでの運用・保守業務を担当。
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">GitHub ポートフォリオ</h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <a 
                href="https://github.com/akitoxiii/calculator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                https://github.com/akitoxiii/calculator
              </a>
              <p className="text-sm text-gray-600 mt-2">計算機アプリケーションのソースコードを公開しています</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">今後の学習目標</h3>
            <div className="space-y-2 text-gray-700">
              <p>• バックエンド技術（Node.js, Express等）の習得</p>
              <p>• データベース設計・SQLの理解</p>
              <p>• クラウドサービス（AWS, Vercel等）の活用</p>
              <p>• テスト駆動開発（TDD）の実践</p>
              <p>• パフォーマンス最適化の技術習得</p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
