import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Layout>
      <Section title="お問い合わせ">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">連絡先情報</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-700">メールアドレス: akito62226@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">所在地: 愛知県刈谷市</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">希望条件</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">職種</h4>
                <p>フロントエンド開発エンジニア</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">技術スタック</h4>
                <p>HTML5, CSS, jQuery, Java</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">勤務形態</h4>
                <p>正社員（リモートワーク可能な環境を希望）</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">その他の希望</h4>
                <p>貴社の規定に従います。新しい技術の学習機会や、チーム開発での成長を重視します。</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">メッセージ</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                プログラミングスクールZERUQアカデミーでHTML5, CSS, jQuery, Javaを学び、
                実践的なWeb開発スキルを身につけました。
              </p>
              <p>
                SCSKニアショアシステムズ株式会社での実務経験を通じて、
                チーム開発の重要性とコミュニケーションの大切さを学びました。
              </p>
              <p>
                新しい技術への挑戦意欲が高く、継続的な学習を大切にしています。
                ユーザーにとって使いやすく、魅力的なWebアプリケーションの開発に
                取り組みたいと考えています。
              </p>
              <p>
                ご連絡をお待ちしております。よろしくお願いいたします。
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
