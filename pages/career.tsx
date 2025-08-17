import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Career() {
  return (
    <Layout>
      <Section title="職歴・学歴">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">学歴</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2018年4月</div>
                <div className="text-gray-800">N高等学校入学</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2021年3月</div>
                <div className="text-gray-800">N高等学校卒業</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2021年4月</div>
                <div className="text-gray-800">アリアーレビューティー専門学校入学</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2023年3月</div>
                <div className="text-gray-800">アリアーレビューティー専門学校卒業</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2024年1月</div>
                <div className="text-gray-800">プログラミングスクールZERUQアカデミー入学</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2024年10月</div>
                <div className="text-gray-800">プログラミングスクールZERUQアカデミー卒業</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">職歴</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2023年4月</div>
                <div className="text-gray-800">hair salon SHANBELG アルバイト 入社</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2024年3月</div>
                <div className="text-gray-800">hair salon SHANBELG アルバイト 退社</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2024年11月</div>
                <div className="text-gray-800">SCSKニアショアシステムズ株式会社 入社</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">配属</div>
                <div className="text-gray-800">第一営業本部 福井開発部</div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2025年4月</div>
                <div className="text-gray-800">一身上の都合により退職</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">資格・免許</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium text-gray-600 w-20">2019年8月</div>
                <div className="text-gray-800">普通自動二輪車免許</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
