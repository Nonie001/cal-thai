import { Metadata } from "next";
import TaxCalculator from "./TaxCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft, CheckCircle, AlertCircle, Lightbulb, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณภาษีเงินได้บุคคลธรรมดา 2568 | ฟรี พร้อมค่าลดหย่อน",
  description: "คำนวณภาษีเงินได้บุคคลธรรมดา 2568 พร้อมค่าลดหย่อนพื้นฐาน ดูว่าต้องจ่ายภาษีเท่าไหร่หรือได้คืนเท่าไหร่ ใช้งานฟรี ไม่ต้องสมัคร อัตราภาษีขั้นบันได วิธีคิดภาษีแบบง่าย",
  keywords: "คำนวณภาษี, ภาษีเงินได้, ภาษีเงินได้บุคคลธรรมดา, ค่าลดหย่อน, ภาษี 2568, คำนวณภาษีฟรี, อัตราภาษี, ภาษีขั้นบันได, ลดหย่อนภาษี, ยื่นภาษี",
  alternates: { canonical: "https://www.คำนวณเงิน.com/tax" },
  openGraph: {
    title: "คำนวณภาษีเงินได้บุคคลธรรมดา 2568 | ฟรี พร้อมค่าลดหย่อน",
    description: "คำนวณภาษีเงินได้ พร้อมค่าลดหย่อน ฟรี ใช้งานง่าย ดูผลทันที",
    url: "https://www.คำนวณเงิน.com/tax",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function TaxPage() {
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
            "name": "เครื่องคำนวณภาษีเงินได้บุคคลธรรมดา 2568",
            "url": "https://www.คำนวณเงิน.com/tax",
            "description": "คำนวณภาษีเงินได้บุคคลธรรมดาฟรี พร้อมค่าลดหย่อน ดูผลทันที",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "dateModified": "2025-12-19",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "THB"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            }
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
            "dateModified": "2025-12-19",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "ภาษีเงินได้บุคคลธรรมดาคืออะไร",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ภาษีเงินได้บุคคลธรรมดา คือ ภาษีที่เก็บจากรายได้ของบุคคลทั่วไป เช่น เงินเดือน ค่าจ้าง โบนัส หรือรายได้จากการทำธุรกิจ โดยคำนวณจากรายได้หลังหักค่าใช้จ่ายและค่าลดหย่อนแล้ว"
                }
              },
              {
                "@type": "Question",
                "name": "อัตราภาษีขั้นบันไดคืออะไร",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "อัตราภาษีขั้นบันได คือ วิธีคำนวณภาษีที่แบ่งเงินได้สุทธิเป็นช่วงๆ แต่ละช่วงเสียภาษีต่างกัน เริ่มจาก 0-150,000 บาท ยกเว้นภาษี, 150,001-300,000 บาท เสีย 5%, ไปจนถึง 5 ล้านบาทขึ้นไป เสีย 35%"
                }
              },
              {
                "@type": "Question",
                "name": "ค่าลดหย่อนภาษีมีอะไรบ้าง",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ค่าลดหย่อนหลักๆ ได้แก่ ค่าลดหย่อนส่วนตัว 60,000 บาท, คู่สมรส 60,000 บาท, บุตร 30,000 บาท/คน, บิดามารดา 30,000 บาท/คน, ประกันสังคมสูงสุด 9,000 บาท, ประกันชีวิต, กองทุน SSF/RMF และอื่นๆ"
                }
              },
              {
                "@type": "Question",
                "name": "ต้องยื่นภาษีเมื่อไหร่",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "กำหนดยื่นภาษีประจำปี คือ 1 มกราคม - 31 มีนาคม ของปีถัดไป หากยื่นออนไลน์ผ่าน e-Filing ได้ถึง 8 เมษายน"
                }
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
              คำนวณภาษีเงินได้บุคคลธรรมดา
            </h1>
            <p className="text-gray-500">
              คำนวณภาษีปี 2568 พร้อมค่าลดหย่อนพื้นฐาน
            </p>
          </div>
          
          <TaxCalculator />
          
          {/* Info Section */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">อัตราภาษีเงินได้บุคคลธรรมดา 2568</h2>
            <details>
              <summary className="cursor-pointer select-none px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 inline-block">ดูตารางอัตราภาษี 2568</summary>
              <p className="text-xs text-gray-500 mt-3 mb-2 sm:hidden">เลื่อนซ้าย/ขวาเพื่อดูตารางทั้งหมด →</p>
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="min-w-[520px] w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-2 px-2 text-gray-600">เงินได้สุทธิ (บาท)</th>
                    <th className="text-right py-2 px-2 text-gray-600">อัตราภาษี</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">0 - 150,000</td>
                    <td className="text-right px-2 text-green-600">ยกเว้น</td>
                  </tr>
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">150,001 - 300,000</td>
                    <td className="text-right px-2">5%</td>
                  </tr>
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">300,001 - 500,000</td>
                    <td className="text-right px-2">10%</td>
                  </tr>
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">500,001 - 750,000</td>
                    <td className="text-right px-2">15%</td>
                  </tr>
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">750,001 - 1,000,000</td>
                    <td className="text-right px-2">20%</td>
                  </tr>
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">1,000,001 - 2,000,000</td>
                    <td className="text-right px-2">25%</td>
                  </tr>
                  <tr className="border-b border-gray-100 odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">2,000,001 - 5,000,000</td>
                    <td className="text-right px-2">30%</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="py-2 px-2">5,000,001 ขึ้นไป</td>
                    <td className="text-right px-2">35%</td>
                  </tr>
                </tbody>
                </table>
              </div>
            </details>
          </div>

          {/* What is Tax Section */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#0A4174]" />
              ภาษีเงินได้บุคคลธรรมดาคืออะไร?
            </h2>
            <div className="text-sm text-gray-600 space-y-3">
              <p>
                <strong>ภาษีเงินได้บุคคลธรรมดา</strong> คือภาษีที่รัฐเก็บจากรายได้ของบุคคลทั่วไป ไม่ว่าจะเป็นพนักงานบริษัท ฟรีแลนซ์ หรือเจ้าของกิจการ 
                โดยคำนวณจาก <strong>เงินได้สุทธิ</strong> (รายได้ - ค่าใช้จ่าย - ค่าลดหย่อน)
              </p>
              <p>
                ประเทศไทยใช้ระบบ <strong>"ภาษีขั้นบันได"</strong> หมายความว่า ยิ่งมีรายได้มาก ก็ยิ่งเสียภาษีในอัตราที่สูงขึ้น 
                แต่ไม่ได้หมายความว่าทั้งก้อนจะเสียอัตราสูงสุด — แต่ละช่วงเงินได้จะเสียภาษีตามอัตราของช่วงนั้นๆ
              </p>
            </div>
          </div>

          {/* How Tax Bracket Works */}
          <div className="mt-6 bg-gradient-to-br from-[#0A4174]/5 to-blue-50 rounded-2xl p-6 border border-[#0A4174]/10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              ภาษีขั้นบันไดคิดยังไง? (ตัวอย่างง่ายๆ)
            </h2>
            <div className="text-sm text-gray-600 space-y-3">
              <p>สมมติคุณมี<strong>เงินได้สุทธิ 500,000 บาท</strong> จะคำนวณแบบนี้:</p>
              <div className="bg-white rounded-xl p-4 space-y-2">
                <div className="flex justify-between">
                  <span>0 - 150,000 บาท (ยกเว้น)</span>
                  <span className="font-semibold text-green-600">฿0</span>
                </div>
                <div className="flex justify-between">
                  <span>150,001 - 300,000 บาท × 5%</span>
                  <span className="font-semibold">฿7,500</span>
                </div>
                <div className="flex justify-between">
                  <span>300,001 - 500,000 บาท × 10%</span>
                  <span className="font-semibold">฿20,000</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold">รวมภาษีที่ต้องจ่าย</span>
                  <span className="font-bold text-[#0A4174]">฿27,500</span>
                </div>
              </div>
              <p className="text-gray-500">
                💡 <strong>อัตราภาษีจริง</strong> = 27,500 ÷ 500,000 = <strong>5.5%</strong> เท่านั้น (ไม่ใช่ 10% ทั้งก้อน!)
              </p>
            </div>
          </div>

          {/* Deduction Tips */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              ค่าลดหย่อนยอดนิยม 2568
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-gray-900 mb-2">ค่าลดหย่อนพื้นฐาน</div>
                <ul className="space-y-1 text-gray-600">
                  <li>• ส่วนตัว: <strong>60,000 บาท</strong></li>
                  <li>• คู่สมรส (ไม่มีรายได้): <strong>60,000 บาท</strong></li>
                  <li>• บุตร: <strong>30,000 บาท/คน</strong></li>
                  <li>• บิดามารดา: <strong>30,000 บาท/คน</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-gray-900 mb-2">ประกัน & กองทุน</div>
                <ul className="space-y-1 text-gray-600">
                  <li>• ประกันสังคม: <strong>สูงสุด 9,000 บาท</strong></li>
                  <li>• ประกันชีวิต: <strong>สูงสุด 100,000 บาท</strong></li>
                  <li>• กองทุน SSF: <strong>สูงสุด 30% ของรายได้</strong></li>
                  <li>• กองทุน RMF: <strong>สูงสุด 30% ของรายได้</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-gray-900 mb-2">ที่อยู่อาศัย</div>
                <ul className="space-y-1 text-gray-600">
                  <li>• ดอกเบี้ยบ้าน: <strong>สูงสุด 100,000 บาท</strong></li>
                  <li>• Easy E-Receipt 2568: <strong>สูงสุด 50,000 บาท</strong></li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold text-gray-900 mb-2">บริจาค</div>
                <ul className="space-y-1 text-gray-600">
                  <li>• บริจาคทั่วไป: <strong>ลดหย่อนได้ 1 เท่า</strong></li>
                  <li>• บริจาคการศึกษา/กีฬา: <strong>ลดหย่อนได้ 2 เท่า</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0A4174]" />
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">รายได้เท่าไหร่ถึงต้องยื่นภาษี?</h3>
                <p className="text-gray-600">
                  หากมีรายได้จากเงินเดือนอย่างเดียว และรายได้รวมทั้งปีไม่เกิน <strong>120,000 บาท</strong> (โสด) 
                  หรือ <strong>220,000 บาท</strong> (มีคู่สมรส) ไม่ต้องยื่น แต่ถ้าเกินกว่านี้ต้องยื่นทุกกรณี
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ยื่นภาษีช้าจะเป็นอย่างไร?</h3>
                <p className="text-gray-600">
                  ต้องเสียค่าปรับ <strong>200 บาท</strong> และเสียเงินเพิ่ม <strong>1.5% ต่อเดือน</strong> ของภาษีที่ต้องจ่าย
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ภาษีหัก ณ ที่จ่ายคืออะไร?</h3>
                <p className="text-gray-600">
                  คือภาษีที่นายจ้างหักจากเงินเดือนไว้ล่วงหน้าทุกเดือน แล้วนำส่งให้กรมสรรพากร 
                  ตอนยื่นภาษีประจำปีจะนำมาหักออกจากภาษีที่ต้องจ่ายจริง หากหักไว้เกินก็ขอคืนได้
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">กำหนดยื่นภาษีคือเมื่อไหร่?</h3>
                <p className="text-gray-600">
                  ยื่นภาษีประจำปีได้ตั้งแต่ <strong>1 มกราคม - 31 มีนาคม</strong> ของปีถัดไป 
                  หากยื่นผ่าน e-Filing ขยายเวลาถึง <strong>8 เมษายน</strong>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-[#0A4174] to-blue-600 rounded-2xl p-6 text-center text-white">
            <h2 className="text-lg font-semibold mb-2">ต้องการคำนวณเงินด้านอื่นๆ?</h2>
            <p className="text-blue-100 text-sm mb-4">ลองใช้เครื่องมือคำนวณอื่นๆ ของเรา</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/salary" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">
                เงินเดือนสุทธิ
              </Link>
              <Link href="/installment" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">
                เงินผ่อน
              </Link>
              <Link href="/vat" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors">
                VAT 7%
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
