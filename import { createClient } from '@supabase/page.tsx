import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <header className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-800">
        <h1 className="text-2xl font-black text-purple-400">⚡ AI-SaaS Boilerplate</h1>
        <div className="flex gap-4">
          <Link href="/login" className="text-slate-300 hover:text-white px-4 py-2 text-sm font-medium">تسجيل الدخول</Link>
          <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">ابدأ الآن</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 text-center max-w-4xl">
        <span className="bg-purple-950 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-800">أسرع طريقة لإطلاق منتجك الناشئ</span>
        <h2 className="text-5xl font-extrabold mt-6 mb-6 leading-tight">قالب SaaS متكامل مدعوم بالذكاء الاصطناعي</h2>
        <p className="text-slate-400 text-lg mb-10">مصادقة، إدارة قواعد بيانات Supabase، لوحة تحكم عصرية، وتكامل جاهز للذكاء الاصطناعي في قالب واحد بـ Next.js و TypeScript.</p>
        <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg transition">جرب لوحة التحكم فوراً 🚀</Link>
      </main>

      <footer className="container mx-auto px-6 py-6 border-t border-slate-800 text-center text-xs text-slate-500">
        جميع الحقوق محفوظة © 2026 - AI-SaaS Boilerplate
      </footer>
    </div>
  )
}
