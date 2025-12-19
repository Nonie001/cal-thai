import { Metadata } from "next";
import InstallmentCalculator from "./InstallmentCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calculator, ChevronLeft, CheckCircle, AlertCircle, Lightbulb, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "คำนวณเงินผ่อน - ผ่อนรถ บ้าน สินค้า | ฟรี",
  description: "คำนวณเงินผ่อนรถ ผ่อนบ้าน ผ่อนสินค้า ใส่ราคา เงินดาวน์ ดอกเบี้ย ระยะเวลา คำนวณยอดผ่อนต่อเดือนทันที ฟรี ใช้งานง่าย",
  keywords: ["คำนวณเงินผ่อน", "คำนวณผ่อนรถ", "คำนวณผ่อนบ้าน", "ผ่อน 60 งวด", "ยอดผ่อนต่อเดือน", "ดอกเบี้ยเงินผ่อน"],
  alternates: {
    canonical: "https://www.คำนวณเงิน.com/installment",
  },
  openGraph: {
    title: "คำนวณเงินผ่อน",
    description: "คำนวณยอดผ่อนรถ บ้าน สินค้า ฟรี",
    url: "https://www.คำนวณเงิน.com/installment",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function InstallmentPage() {
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
            "name": "เครื่องคำนวณเงินผ่อน",
            "url": "https://www.คำนวณเงิน.com/installment",
            "description": "คำนวณยอดผ่อนรถ บ้าน หรือสินค้า ใส่ราคา ดาวน์ ดอกเบี้ย ระยะเวลา ดูผลทันที",
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
                "name": "เงินผ่อนคำนวณยังไง?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ทั่วไปใช้สูตรดอกเบี้ยคงที่ (Flat Rate) หรือแบบลดต้นลดดอก เครื่องมือนี้ใช้แบบคงที่เพื่อให้เห็นภาพรวมง่าย และผลใกล้เคียงของจริง"
                }
              },
              {
                "@type": "Question",
                "name": "ดอกเบี้ยคงที่ต่างจากลดต้นลดดอกอย่างไร",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "คงที่คิดดอกเบี้ยจากเงินต้นเดิมตลอดสัญญา ส่วนลดต้นลดดอกคิดดอกจากเงินต้นที่ลดลงทุกงวด ทำให้ยอดผ่อนช่วงแรกสูงกว่าเล็กน้อย แต่ดอกเบี้ยรวมมักน้อยกว่า"
                }
              },
              {
                "@type": "Question",
                "name": "ควรมีเงินดาวน์เท่าไหร่",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "โดยทั่วไปดาวน์ 10-20% จะช่วยลดดอกเบี้ยรวมและยอดผ่อนต่อเดือน เหมาะสมขึ้น แต่ขึ้นกับเงื่อนไขผู้ให้สินเชื่อ"
                }
              },
              {
                "@type": "Question",
                "name": "ยอดผ่อนควรไม่เกินเท่าไหร่ของรายได้",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "แนวทางปลอดภัยคือไม่เกิน 30-40% ของรายได้ต่อเดือน เพื่อให้มีสภาพคล่องเพียงพอ"
                }
              }
            ]
          })
        }}
      />
      <main className="flex-1 py-6 sm:py-8 md:py-12">
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

          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  คำนวณเงินผ่อน
                </h1>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              คำนวณยอดผ่อนรถ บ้าน หรือสินค้าต่างๆ พร้อมแสดงดอกเบี้ยรวม
            </p>
          </div>
          
          <InstallmentCalculator />
          
          {/* Info Section */}
          <div className="mt-6 sm:mt-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">ข้อควรรู้</h2>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>• ใช้สูตรดอกเบี้ยคงที่ (Flat Rate) ในการคำนวณ</li>
              <li>• ยอดผ่อนจริงอาจแตกต่างจากผลคำนวณเล็กน้อยตามเงื่อนไขสถาบันการเงิน</li>
              <li>• ควรตรวจสอบอัตราดอกเบี้ยจริงกับผู้ให้บริการก่อนตัดสินใจ</li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">สูตรคำนวณ</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-mono bg-gray-50 p-3 rounded-lg overflow-x-auto">
                ยอดผ่อน/เดือน = (เงินกู้ + (เงินกู้ × ดอกเบี้ย% × ปี)) ÷ จำนวนงวด
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-6 bg-gradient-to-br from-[#0A4174]/5 to-blue-50 rounded-2xl p-6 border border-[#0A4174]/10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              ตัวอย่างคำนวณเงินผ่อนแบบง่าย
            </h2>
            <div className="text-sm text-gray-600 space-y-3">
              <p>สมมติราคาสินค้า <strong>600,000 บาท</strong> ดาวน์ <strong>20%</strong> ดอกเบี้ย <strong>4%/ปี</strong> ผ่อน <strong>60 งวด</strong></p>
              <div className="bg-white rounded-xl p-4 space-y-2">
                <div className="flex justify-between"><span>เงินกู้</span><span className="font-semibold">฿480,000</span></div>
                <div className="flex justify-between"><span>ดอกเบี้ยรวมโดยประมาณ (4% × 5 ปี × ฿480,000)</span><span className="font-semibold">฿96,000</span></div>
                <div className="flex justify-between pt-2 border-t border-gray-200"><span className="font-semibold">ยอดผ่อน/เดือน (ตามสูตรคงที่)</span><span className="font-bold text-[#0A4174]">฿9,600</span></div>
              </div>
              <p className="text-gray-500">หมายเหตุ: ของจริงอาจเป็นแบบลดต้นลดดอก ยอดผ่อนช่วงแรกต่างกันเล็กน้อย</p>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              ทริควางแผนการผ่อน
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• วางแผนให้ยอดผ่อนไม่เกิน 30-40% ของรายได้ต่อเดือน</li>
              <li>• เพิ่มเงินดาวน์เพื่อลดดอกเบี้ยรวมและยอดผ่อน</li>
              <li>• เปรียบเทียบหลายสถาบันเพื่อหาดอกเบี้ยที่ดีที่สุด</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0A4174]" />
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ถ้าปิดยอดก่อนกำหนดได้ไหม?</h3>
                <p className="text-gray-600">ส่วนใหญ่ทำได้ แต่มีค่าปรับหรือค่าธรรมเนียม ตรวจสอบสัญญาก่อน</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">เปลี่ยนงวดผ่อนระหว่างทางได้หรือไม่?</h3>
                <p className="text-gray-600">บางสถาบันอนุญาตให้ปรับโครงสร้างหนี้ได้ตามเงื่อนไข</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-[#0A4174] to-blue-600 rounded-2xl p-6 text-center text-white">
            <h2 className="text-lg font-semibold mb-2">ต้องการคำนวณเงินด้านอื่นๆ?</h2>
            <p className="text-blue-100 text-sm mb-4">ลองใช้เครื่องมือคำนวณอื่นๆ ของเรา</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/loan" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">สินเชื่อบ้าน/รถ</Link>
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
