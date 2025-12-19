import { Metadata } from "next";
import VatCalculator from "./VatCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft, CheckCircle, AlertCircle, Lightbulb, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณ VAT 7% - แยกราคาก่อน-หลังภาษีมูลค่าเพิ่ม | ฟรี",
  description: "คำนวณภาษีมูลค่าเพิ่ม VAT 7% แยกราคาก่อนและหลัง VAT ได้ทันที เหมาะสำหรับพ่อค้า ร้านค้าออนไลน์ ฟรี ใช้งานง่าย",
  keywords: "คำนวณ VAT, ภาษีมูลค่าเพิ่ม, VAT 7%, แยก VAT, ราคาไม่รวม VAT, รวม VAT",
  alternates: { canonical: "https://www.คำนวณเงิน.com/vat" },
  openGraph: {
    title: "คำนวณ VAT 7%",
    description: "แยกราคาก่อน-หลังภาษีมูลค่าเพิ่ม ฟรี",
    url: "https://www.คำนวณเงิน.com/vat",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function VatPage() {
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
            "name": "เครื่องคำนวณ VAT 7%",
            "url": "https://www.คำนวณเงิน.com/vat",
            "description": "คำนวณภาษีมูลค่าเพิ่ม 7% แยกราคาก่อนและหลัง VAT ใช้งานฟรี",
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
              { "@type": "Question", "name": "VAT คืออะไร", "acceptedAnswer": { "@type": "Answer", "text": "VAT (ภาษีมูลค่าเพิ่ม) คือภาษีทางอ้อมที่เก็บจากการซื้อขายสินค้าและบริการ โดยผู้ประกอบการนำส่งให้รัฐ" } },
              { "@type": "Question", "name": "คิด VAT ยังไง", "acceptedAnswer": { "@type": "Answer", "text": "ราคารวม VAT = ราคาไม่รวม VAT × 1.07, ราคาไม่รวม VAT = ราคารวม VAT ÷ 1.07, VAT = ราคาไม่รวม VAT × 0.07" } },
              { "@type": "Question", "name": "ใครบ้างที่ต้องจด VAT", "acceptedAnswer": { "@type": "Answer", "text": "ผู้ประกอบการที่มีรายรับถึงเกณฑ์ตามกฎหมายต้องจดทะเบียนภาษีมูลค่าเพิ่มและออกใบกำกับภาษี" } }
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
              คำนวณ VAT 7%
            </h1>
            <p className="text-gray-500">
              คำนวณภาษีมูลค่าเพิ่ม แยกราคาก่อนและหลัง VAT ได้ทันที
            </p>
          </div>
          
          <VatCalculator />
          
          {/* Info Section */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">ข้อควรรู้</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>VAT 7%</strong> คืออัตราภาษีมูลค่าเพิ่มของประเทศไทย</li>
              <li>• ผู้ประกอบการที่จดทะเบียน VAT ต้องออกใบกำกับภาษี</li>
              <li>• ราคาสินค้าในห้างมักรวม VAT แล้ว ส่วนราคาขายส่งมักไม่รวม</li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">สูตรคำนวณ</h3>
              <div className="space-y-2 text-sm text-gray-600 font-mono bg-gray-50 p-3 rounded-lg">
                <p>ราคารวม VAT = ราคาไม่รวม VAT × 1.07</p>
                <p>ราคาไม่รวม VAT = ราคารวม VAT ÷ 1.07</p>
                <p>VAT = ราคาไม่รวม VAT × 0.07</p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="mt-6 bg-gradient-to-br from-[#0A4174]/5 to-blue-50 rounded-2xl p-6 border border-[#0A4174]/10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-amber-500" />ตัวอย่างแยกราคา VAT</h2>
            <div className="text-sm text-gray-600 space-y-2 bg-white rounded-xl p-4">
              <div className="flex justify-between"><span>ราคาไม่รวม VAT</span><span className="font-semibold">฿1,000</span></div>
              <div className="flex justify-between"><span>VAT (7%)</span><span className="font-semibold">฿70</span></div>
              <div className="flex justify-between pt-2 border-t border-gray-200"><span className="font-semibold">ราคารวม VAT</span><span className="font-bold text-[#0A4174]">฿1,070</span></div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" />ทริคการตั้งราคากับ VAT</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• แจ้งให้ชัดเจนว่าราคารวม VAT หรือไม่รวม เพื่อความโปร่งใส</li>
              <li>• คิดต้นทุน VAT ให้ครบ สำหรับผู้ที่จดทะเบียน VAT</li>
              <li>• ใช้เครื่องมือช่วยแยกราคา ลดความผิดพลาด</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#0A4174]" />คำถามที่พบบ่อย (FAQ)</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ราคาป้ายในห้างรวม VAT แล้วหรือไม่?</h3>
                <p className="text-gray-600">ส่วนใหญ่รวมแล้ว แต่ให้สังเกตคำว่า ราคานี้รวมภาษีมูลค่าเพิ่ม</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ขายออนไลน์ต้องคิด VAT ไหม?</h3>
                <p className="text-gray-600">ถ้าจด VAT ต้องคิดและออกใบกำกับภาษีตามกฎหมาย</p>
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
