import { Metadata } from "next";
import LoanCalculator from "./LoanCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft, CheckCircle, AlertCircle, Lightbulb, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณสินเชื่อบ้าน/รถ - วงเงินกู้ ยอดผ่อน | ฟรี",
  description: "คำนวณสินเชื่อบ้าน สินเชื่อรถ วงเงินกู้ ดอกเบี้ย ยอดผ่อนต่อเดือน สรุปดอกเบี้ยตลอดสัญญา ฟรี ใช้งานง่าย",
  keywords: "คำนวณสินเชื่อบ้าน, คำนวณสินเชื่อรถ, วงเงินกู้, ผ่อนบ้าน, ผ่อนรถ, ดอกเบี้ยบ้าน, ดอกเบี้ยรถ",
  alternates: { canonical: "https://www.คำนวณเงิน.com/loan" },
  openGraph: {
    title: "คำนวณสินเชื่อบ้าน/รถ",
    description: "วงเงินกู้ ยอดผ่อน ดอกเบี้ย ฟรี",
    url: "https://www.คำนวณเงิน.com/loan",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function LoanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "เครื่องคำนวณสินเชื่อบ้าน/รถ",
            "url": "https://www.คำนวณเงิน.com/loan",
            "description": "คำนวณวงเงินกู้ ยอดผ่อนต่อเดือน และดอกเบี้ยรวม ใช้งานฟรี",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "THB" }
          })
        }}
      />
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "กู้บ้านต้องมีรายได้เท่าไหร่", "acceptedAnswer": { "@type": "Answer", "text": "แนวทางทั่วไป ยอดผ่อนไม่ควรเกิน 30-40% ของรายได้ต่อเดือน และต้องมีเครดิตดีตามเกณฑ์ธนาคาร" } },
              { "@type": "Question", "name": "รถใหม่กับรถมือสอง ดอกต่างกันไหม", "acceptedAnswer": { "@type": "Answer", "text": "รถมือสองมักมีดอกเบี้ยสูงกว่ารถใหม่เล็กน้อย ขึ้นกับสถาบันการเงินและสภาพรถ" } },
              { "@type": "Question", "name": "MRR/MOR/MRR คืออะไร", "acceptedAnswer": { "@type": "Answer", "text": "เป็นอัตราอ้างอิงดอกเบี้ยของธนาคาร ใช้คำนวณดอกเบี้ยสินเชื่อบ้าน (ลดต้นลดดอก)" } }
            ]
          })
        }}
      />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#0A4174] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              คำนวณสินเชื่อบ้าน / รถ
            </h1>
            <p className="text-gray-500">
              คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยตลอดอายุสัญญา
            </p>
          </div>
          
          <LoanCalculator />
          
          {/* Info Section */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">ข้อควรรู้</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>สินเชื่อบ้าน</strong> มักใช้ดอกเบี้ยแบบลดต้นลดดอก (MRR) อัตราประมาณ 5-7% ต่อปี</li>
              <li>• <strong>สินเชื่อรถ</strong> มักใช้ดอกเบี้ยคงที่ อัตราประมาณ 2-4% ต่อปี</li>
              <li>• ระยะเวลากู้บ้านสูงสุด 30 ปี กู้รถสูงสุด 7 ปี</li>
              <li>• วงเงินกู้จริงขึ้นอยู่กับรายได้และเครดิตของผู้กู้</li>
            </ul>
          </div>

          {/* Example */}
          <div className="mt-6 bg-gradient-to-br from-[#0A4174]/5 to-blue-50 rounded-2xl p-6 border border-[#0A4174]/10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-amber-500" />ตัวอย่างคำนวณคร่าวๆ</h2>
            <div className="text-sm text-gray-600 space-y-2 bg-white rounded-xl p-4">
              <p>ราคาบ้าน ฿3,000,000 ดาวน์ 20% กู้ 30 ปี ดอกเฉลี่ย 6%/ปี</p>
              <div className="flex justify-between"><span>เงินกู้</span><span className="font-semibold">฿2,400,000</span></div>
              <div className="flex justify-between"><span>ผ่อน/เดือน (โดยประมาณ)</span><span className="font-semibold">≈ ฿14,xxx - ฿16,xxx</span></div>
              <p className="text-xs text-gray-500">หมายเหตุ: ของจริงคิดแบบลดต้นลดดอก ยอดผ่อนช่วงแรกสูงกว่าช่วงท้าย</p>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" />ทริคเตรียมตัวขอกู้</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• รักษาวินัยเครดิต ชำระตรงเวลา</li>
              <li>• เตรียมเงินดาวน์ 10-20%</li>
              <li>• รวมค่าโอน ค่าประเมิน และค่าธรรมเนียมต่างๆ ในงบ</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#0A4174]" />คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ผ่อนบ้านควรไม่เกินเท่าไหร่ของรายได้?</h3>
                <p className="text-gray-600">แนวทางปลอดภัย 30-40% ของรายได้ต่อเดือน</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">รีไฟแนนซ์เมื่อไหร่ดี?</h3>
                <p className="text-gray-600">เมื่อดอกเบี้ยตลาดลดลงชัดเจน หรือหลังพ้นโปรดอกเบี้ยปีแรกๆ</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-[#0A4174] to-blue-600 rounded-2xl p-6 text-center text-white">
            <h2 className="text-lg font-semibold mb-2">ต้องการคำนวณเงินด้านอื่นๆ?</h2>
            <p className="text-blue-100 text-sm mb-4">ลองใช้เครื่องมือคำนวณอื่นๆ ของเรา</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/installment" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">เงินผ่อน</Link>
              <Link href="/tax" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">ภาษีเงินได้</Link>
              <Link href="/salary" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">เงินเดือนสุทธิ</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
