import { Metadata } from "next";
import InterestCalculator from "./InterestCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft, CheckCircle, AlertCircle, Lightbulb, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณดอกเบี้ย - ดอกเบี้ยคงที่ ลดต้นลดดอก | ฟรี",
  description: "คำนวณดอกเบี้ยเงินกู้ บัตรเครดิต ทั้งแบบคงที่และลดต้นลดดอก แสดงดอกเบี้ยที่ต้องจ่ายจริง ฟรี ใช้งานง่าย",
  keywords: "คำนวณดอกเบี้ย, ดอกเบี้ยคงที่, ลดต้นลดดอก, ดอกเบี้ยบัตรเครดิต, ดอกเบี้ยเงินกู้, เปรียบเทียบดอกเบี้ย",
  alternates: { canonical: "https://www.คำนวณเงิน.com/interest" },
  openGraph: {
    title: "คำนวณดอกเบี้ย",
    description: "ดอกเบี้ยคงที่ ลดต้นลดดอก ฟรี",
    url: "https://www.คำนวณเงิน.com/interest",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function InterestPage() {
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
            "name": "เครื่องคำนวณดอกเบี้ย",
            "url": "https://www.คำนวณเงิน.com/interest",
            "description": "คำนวณดอกเบี้ยคงที่และลดต้นลดดอก เปรียบเทียบดอกเบี้ยรวม",
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
              { "@type": "Question", "name": "ดอกเบี้ยคงที่คืออะไร", "acceptedAnswer": { "@type": "Answer", "text": "คิดดอกจากเงินต้นเดิมตลอดสัญญา ทำให้ยอดผ่อนเท่าๆ กันทั้งสัญญา" } },
              { "@type": "Question", "name": "ดอกเบี้ยลดต้นลดดอกคืออะไร", "acceptedAnswer": { "@type": "Answer", "text": "คิดดอกจากเงินต้นคงเหลือ ทำให้ยอดผ่อนช่วงแรกสูงกว่า แต่ดอกเบี้ยรวมมักน้อยกว่า" } },
              { "@type": "Question", "name": "แบบไหนคุ้มกว่า", "acceptedAnswer": { "@type": "Answer", "text": "ลดต้นลดดอกคุ้มกว่าในภาพรวม แต่ขึ้นกับเงื่อนไขและโปรโมชั่นของผู้ให้สินเชื่อ" } }
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
              คำนวณดอกเบี้ย
            </h1>
            <p className="text-gray-500">
              คำนวณดอกเบี้ยแบบคงที่และลดต้นลดดอก เปรียบเทียบดอกเบี้ยที่ต้องจ่ายจริง
            </p>
          </div>
          
          <InterestCalculator />
          
          {/* Info Section */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">ข้อควรรู้</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>ดอกเบี้ยคงที่ (Flat Rate)</strong> - คิดดอกเบี้ยจากเงินต้นตลอดอายุสัญญา</li>
              <li>• <strong>ดอกเบี้ยลดต้นลดดอก (Effective Rate)</strong> - คิดดอกเบี้ยจากเงินต้นคงเหลือ</li>
              <li>• ลดต้นลดดอกจะจ่ายดอกเบี้ยรวมน้อยกว่า แต่ยอดผ่อนแรกๆ จะสูงกว่า</li>
            </ul>
          </div>

          {/* Example */}
          <div className="mt-6 bg-gradient-to-br from-[#0A4174]/5 to-blue-50 rounded-2xl p-6 border border-[#0A4174]/10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-amber-500" />ตัวอย่างเปรียบเทียบ</h2>
            <div className="text-sm text-gray-600 space-y-2 bg-white rounded-xl p-4">
              <p>เงินกู้ ฿100,000 ดอกเบี้ย 10%/ปี ระยะเวลา 12 เดือน</p>
              <div className="flex justify-between"><span>แบบคงที่ (โดยประมาณ)</span><span className="font-semibold">ดอกเบี้ยรวม ฿10,000</span></div>
              <div className="flex justify-between"><span>แบบลดต้นลดดอก</span><span className="font-semibold">ดอกเบี้ยรวม <span className="text-[#0A4174]">น้อยกว่า</span></span></div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" />ทริคลดดอกเบี้ยรวม</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• จ่ายค่างวดก่อนครบกำหนด เพื่อลดดอกช่วงต้น (สำหรับลดต้นลดดอก)</li>
              <li>• เพิ่มเงินดาวน์ ลดเงินต้น</li>
              <li>• เปรียบเทียบโปรโมชั่นหลายเจ้า</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#0A4174]" />คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ถ้าปิดหนี้ก่อนกำหนด ดอกเบี้ยคิดอย่างไร?</h3>
                <p className="text-gray-600">มักคิดเฉพาะดอกที่ค้าง (สำหรับลดต้นลดดอก) แต่มีค่าปรับตามสัญญา</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">APR ต่างจากดอกเบี้ยธรรมดายังไง?</h3>
                <p className="text-gray-600">APR รวมค่าธรรมเนียม ทำให้เห็นต้นทุนจริงมากขึ้น</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-[#0A4174] to-blue-600 rounded-2xl p-6 text-center text-white">
            <h2 className="text-lg font-semibold mb-2">ต้องการคำนวณเงินด้านอื่นๆ?</h2>
            <p className="text-blue-100 text-sm mb-4">ลองใช้เครื่องมือคำนวณอื่นๆ ของเรา</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/installment" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">เงินผ่อน</Link>
              <Link href="/loan" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">สินเชื่อบ้าน/รถ</Link>
              <Link href="/vat" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">VAT 7%</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
