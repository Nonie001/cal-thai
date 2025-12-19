import { Metadata } from "next";
import SalaryCalculator from "./SalaryCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft, CheckCircle, AlertCircle, Lightbulb, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณเงินเดือนสุทธิ - หลังหักภาษีประกันสังคม | ฟรี",
  description: "คำนวณเงินเดือนสุทธิหลังหักประกันสังคมและภาษี ดูว่าเงินเข้าบัญชีจริงเท่าไหร่ ฟรี ใช้งานง่าย ไม่ต้องสมัคร",
  keywords: "คำนวณเงินเดือนสุทธิ, เงินเดือนหลังหักภาษี, เงินเดือน 25000 เหลือเท่าไหร่, ประกันสังคม, ค่าหักเงินเดือน",
  alternates: { canonical: "https://www.คำนวณเงิน.com/salary" },
  openGraph: {
    title: "คำนวณเงินเดือนสุทธิ",
    description: "ดูเงินเข้าบัญชีจริงหลังหักภาษีและประกันสังคม",
    url: "https://www.คำนวณเงิน.com/salary",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function SalaryPage() {
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
            "name": "เครื่องคำนวณเงินเดือนสุทธิ",
            "url": "https://www.คำนวณเงิน.com/salary",
            "description": "ดูเงินเข้าบัญชีจริงหลังหักประกันสังคมและภาษี ใช้งานฟรี",
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
              {
                "@type": "Question",
                "name": "เงินเดือนสุทธิคืออะไร",
                "acceptedAnswer": { "@type": "Answer", "text": "คือเงินที่เข้าบัญชีจริงหลังหักประกันสังคม ภาษี และรายการหักอื่นๆ ตามนโยบายบริษัท" }
              },
              {
                "@type": "Question",
                "name": "ประกันสังคมหักเท่าไหร่",
                "acceptedAnswer": { "@type": "Answer", "text": "หัก 5% ของฐานเงินเดือน สูงสุด 750 บาท/เดือน (ฐานสูงสุด 15,000 บาท)" }
              },
              {
                "@type": "Question",
                "name": "ภาษีหัก ณ ที่จ่ายคำนวณยังไง",
                "acceptedAnswer": { "@type": "Answer", "text": "คำนวณจากเงินได้สุทธิต่อปีหลังหักค่าใช้จ่ายและค่าลดหย่อน โดยใช้อัตราภาษีขั้นบันได" }
              }
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
              คำนวณเงินเดือนสุทธิ
            </h1>
            <p className="text-gray-500">
              ดูว่าเงินเดือนหลังหักประกันสังคมและภาษีเหลือเข้าบัญชีเท่าไหร่
            </p>
          </div>
          
          <SalaryCalculator />
          
          {/* Info Section */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">ข้อควรรู้</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>ประกันสังคม</strong> หัก 5% ของเงินเดือน สูงสุด 750 บาท/เดือน (ฐานเงินเดือนสูงสุด 15,000 บาท)</li>
              <li>• <strong>ภาษีหัก ณ ที่จ่าย</strong> คำนวณจากเงินได้สุทธิต่อปีหลังหักค่าลดหย่อน</li>
              <li>• การคำนวณนี้เป็นการประมาณการ อาจแตกต่างจากที่บริษัทคำนวณเล็กน้อย</li>
            </ul>
          </div>

          {/* What is net salary */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-[#0A4174]" />เงินเดือนสุทธิคืออะไร?</h2>
            <p className="text-sm text-gray-600">คือเงินที่ได้รับจริงหลังหัก <strong>ประกันสังคม</strong> และ <strong>ภาษี</strong> รวมถึงรายการหักอื่นๆ เช่น กองทุนสำรองเลี้ยงชีพ ฯลฯ</p>
          </div>

          {/* Example */}
          <div className="mt-6 bg-gradient-to-br from-[#0A4174]/5 to-blue-50 rounded-2xl p-6 border border-[#0A4174]/10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-amber-500" />ตัวอย่างคำนวณเงินเดือนสุทธิ</h2>
            <div className="text-sm text-gray-600 space-y-2 bg-white rounded-xl p-4">
              <div className="flex justify-between"><span>เงินเดือน</span><span className="font-semibold">฿25,000</span></div>
              <div className="flex justify-between"><span>ประกันสังคม (5%)</span><span className="font-semibold">฿1,250</span></div>
              <div className="flex justify-between"><span>ภาษี (ประมาณ)</span><span className="font-semibold">ขึ้นกับค่าลดหย่อน</span></div>
              <div className="flex justify-between pt-2 border-t border-gray-200"><span className="font-semibold">เงินเข้าบัญชีจริง</span><span className="font-bold text-[#0A4174]">≈ ฿23,xxx</span></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">หมายเหตุ: ใช้เครื่องมือด้านบนเพื่อผลลัพธ์ที่แม่นยำตามข้อมูลของคุณ</p>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" />ทริควางแผนเงินเดือน</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• กันเงินออมอย่างน้อย 10-20% ของรายได้</li>
              <li>• ตรวจสอบสิทธิค่าลดหย่อนภาษีให้ครบ</li>
              <li>• ใช้บัญชีแยกค่าใช้จ่ายเพื่อควบคุมงบประมาณ</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#0A4174]" />คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">เงินเดือน 30,000 เข้าบัญชีเท่าไหร่?</h3>
                <p className="text-gray-600">ขึ้นกับค่าลดหย่อนส่วนตัวและรายการหักอื่น ใช้เครื่องมือเพื่อคำนวณตามข้อมูลจริง</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ถ้าลาไม่ได้รับเงินเดือน กระทบภาษีไหม?</h3>
                <p className="text-gray-600">รายได้ทั้งปีลดลง ภาษีจริงก็ลดลงด้วย</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-[#0A4174] to-blue-600 rounded-2xl p-6 text-center text-white">
            <h2 className="text-lg font-semibold mb-2">ต้องการคำนวณเงินด้านอื่นๆ?</h2>
            <p className="text-blue-100 text-sm mb-4">ลองใช้เครื่องมือคำนวณอื่นๆ ของเรา</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/tax" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">ภาษีเงินได้</Link>
              <Link href="/installment" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">เงินผ่อน</Link>
              <Link href="/vat" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">VAT 7%</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
