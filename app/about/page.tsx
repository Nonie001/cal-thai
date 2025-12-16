import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Target,
  Gift,
  Zap,
  Calculator,
  TrendingUp,
  Receipt,
  Wallet,
  Home,
  FileText,
  Code2,
  Sparkles,
  Users,
  AlertTriangle,
  Mail,
  Heart,
  CheckCircle,
  Circle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - คำนวณเงิน | เครื่องมือคำนวณการเงินฟรี ไม่ต้องสมัคร",
  description: "เรื่องราวของเว็บไซต์คำนวณเงิน เครื่องมือคำนวณภาษี เงินผ่อน ดอกเบี้ย VAT สินเชื่อ และเงินเดือนสุทธิ ฟรี 100% ใช้งานง่าย ไม่ต้องสมัครสมาชิก พัฒนาด้วย Next.js React TypeScript สำหรับคนไทย",
  keywords: "เกี่ยวกับเรา, คำนวณเงิน, เครื่องมือการเงิน, คำนวณภาษี, คำนวณเงินผ่อน, คำนวณดอกเบี้ย, คำนวณ VAT, คำนวณสินเชื่อ, คำนวณเงินเดือน, ฟรี, ไม่ต้องสมัคร, Next.js, React, เครื่องมือการเงินไทย",
  authors: [{ name: "Cal-Thai" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.คำนวณเงิน.com/about",
  },
  openGraph: {
    title: "เกี่ยวกับเรา - คำนวณเงิน | เครื่องมือคำนวณการเงินฟรี",
    description: "เรื่องราวของเว็บไซต์คำนวณเงิน เครื่องมือคำนวณการเงินฟรี 6 เครื่องมือ ใช้งานง่าย ไม่ต้องสมัครสมาชิก",
    url: "https://www.คำนวณเงิน.com/about",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "เกี่ยวกับเรา - คำนวณเงิน",
    description: "เครื่องมือคำนวณการเงินฟรี 6 เครื่องมือ ใช้งานง่าย ไม่ต้องสมัคร",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "เกี่ยวกับเรา - คำนวณเงิน",
            "description": "เรื่องราวของเว็บไซต์คำนวณเงิน เครื่องมือคำนวณการเงินฟรีสำหรับคนไทย",
            "url": "https://www.คำนวณเงิน.com/about",
            "mainEntity": {
              "@type": "WebApplication",
              "name": "คำนวณเงิน",
              "applicationCategory": "FinanceApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "THB"
              },
              "featureList": [
                "คำนวณเงินผ่อน",
                "คำนวณดอกเบี้ย",
                "คำนวณภาษีเงินได้",
                "คำนวณเงินเดือนสุทธิ",
                "คำนวณสินเชื่อบ้าน/รถ",
                "คำนวณ VAT 7%"
              ]
            }
          })
        }}
      />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            เกี่ยวกับเรา - เครื่องมือคำนวณการเงินฟรีสำหรับคนไทย
          </h1>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#0A4174]" />
                <h2 className="text-xl font-semibold text-gray-900">สวัสดีครับ!</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ผมเป็นนักพัฒนาซอฟต์แวร์ที่สนใจเรื่องการเงินและเทคโนโลยี 
                เริ่มสร้างเว็บไซต์นี้ขึ้นมาเพราะเคยประสบปัญหาในการคำนวณเงินผ่อน 
                ดอกเบี้ย และเรื่องการเงินต่างๆ ที่ต้องไปหาเว็บไซต์หลายแห่งหรือใช้แอพที่ต้องสมัครสมาชิก
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#0A4174]" />
                <h2 className="text-xl font-semibold text-gray-900">เป้าหมายของเรา</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                ต้องการสร้างเครื่องมือคำนวณการเงินที่ใช้งานง่าย ฟรี และไม่ต้องสมัครสมาชิก 
                เพื่อให้ทุกคนสามารถเข้าถึงเครื่องมือพื้นฐานทางการเงินได้อย่างสะดวก
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">ฟรีตลอดไป</h3>
                    <p className="text-sm">ไม่มีค่าใช้จ่าย ไม่ต้องสมัครสมาชิก</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">ใช้งานง่าย</h3>
                    <p className="text-sm">ออกแบบให้เข้าใจง่าย คำนวณได้ทันที</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-[#0A4174]" />
                <h2 className="text-xl font-semibold text-gray-900">เครื่องมือคำนวณการเงินที่พัฒนา</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      <a href="/installment" className="hover:text-[#0A4174] transition-colors">คำนวณเงินผ่อน</a>
                    </h3>
                    <p className="text-sm">คำนวณยอดผ่อนรถ บ้าน พร้อมดอกเบี้ยรวม</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      <a href="/interest" className="hover:text-[#0A4174] transition-colors">คำนวณดอกเบี้ย</a>
                    </h3>
                    <p className="text-sm">เปรียบเทียบดอกเบี้ยคงที่และลดต้นลดดอก</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      <a href="/tax" className="hover:text-[#0A4174] transition-colors">คำนวณภาษี</a>
                    </h3>
                    <p className="text-sm">ภาษีเงินได้บุคคลธรรมดาพร้อมค่าลดหย่อน</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wallet className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      <a href="/salary" className="hover:text-[#0A4174] transition-colors">คำนวณเงินเดือนสุทธิ</a>
                    </h3>
                    <p className="text-sm">เงินเดือนหลังหักภาษีและประกันสังคม</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      <a href="/loan" className="hover:text-[#0A4174] transition-colors">คำนวณสินเชื่อ</a>
                    </h3>
                    <p className="text-sm">สินเชื่อบ้านและรถยนต์</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      <a href="/vat" className="hover:text-[#0A4174] transition-colors">คำนวณ VAT</a>
                    </h3>
                    <p className="text-sm">แยกราคาก่อนและหลังภาษีมูลค่าเพิ่ม</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-[#0A4174]" />
                <h2 className="text-xl font-semibold text-gray-900">เทคโนโลยีที่ใช้</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                เว็บไซต์นี้พัฒนาด้วย Next.js 15, React 19, TypeScript และ Tailwind CSS 
                โฮสติ้งบน Vercel เพื่อความรวดเร็วและเสถียรภาพ
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#0A4174]" />
                <h2 className="text-xl font-semibold text-gray-900">แผนอนาคต</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>เพิ่มเครื่องมือคำนวณการลงทุน</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>เครื่องมือคำนวณประกันภัย</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>เพิ่มการเปรียบเทียบผลิตภัณฑ์การเงิน</span>
                </li>
                <li className="flex items-center gap-3">
                  <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>แอพมือถือ (อยู่ระหว่างพิจารณา)</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#0A4174]" />
                <h2 className="text-xl font-semibold text-gray-900">ร่วมพัฒนา</h2>
              </div>
              <p className="text-gray-600 mb-4">
                หากคุณมีไอเดียเครื่องมือใหม่ หรือพบปัญหาการใช้งาน สามารถติดต่อมาได้
                ผมยินดีรับฟังและปรับปรุงเว็บไซต์ให้ดียิ่งขึ้น
              </p>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-[#0A4174] flex-shrink-0" />
                <span><strong>อีเมล:</strong> anas.aouming@gmail.com</span>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-semibold text-gray-900">ข้อจำกัดความรับผิดชอบ</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                ผลการคำนวณจากเว็บไซต์นี้เป็นเพียงการประมาณการเท่านั้น 
                ตัวเลขจริงอาจแตกต่างออกไปตามเงื่อนไขของสถาบันการเงินหรือหน่วยงานที่เกี่ยวข้อง 
                ควรตรวจสอบข้อมูลจริงและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจทางการเงิน
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
