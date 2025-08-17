import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white p-6 min-h-screen">
      {/* プロフィールセクション */}
      <div className="mb-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-700 rounded-full mb-3 flex items-center justify-center overflow-hidden">
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              width={64} 
              height={64}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ナビゲーションメニュー */}
      <nav className="space-y-2">
        <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>ホーム</span>
        </Link>
        
        <Link href="/about" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
          <span>自己紹介</span>
        </Link>
        
        <Link href="/career" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>職歴・学歴</span>
        </Link>
        
        <Link href="/skills" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>スキル</span>
        </Link>
        
        <Link href="/contact" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>お問い合わせ</span>
        </Link>
      </nav>
    </aside>
  );
}
