import { Metadata } from "next";
import TaxCalculator from "./TaxCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณภาษีเงินได้บุคคลธรรมดา 2568 | ฟรี พร้อมค่าลดหย่อน",
  description: "คำนวณภาษีเงินได้บุคคลธรรมดา 2568 พร้อมค่าลดหย่อนพื้นฐาน ดูว่าต้องจ่ายภาษีเท่าไหร่หรือได้คืนเท่าไหร่ ใช้งานฟรี ไม่ต้องสมัคร",
  keywords: "คำนวณภาษี, ภาษีเงินได้, ภาษีเงินได้บุคคลธรรมดา, ค่าลดหย่อน, ภาษี 2568, คำนวณภาษีฟรี",
  alternates: { canonical: "https://www.คำนวณเงิน.com/tax" },
  openGraph: {
    title: "คำนวณภาษีเงินได้บุคคลธรรมดา 2568",
    description: "คำนวณภาษีเงินได้ พร้อมค่าลดหย่อน ฟรี ใช้งานง่าย",
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
              คำนวณภาษีปี 2567 พร้อมค่าลดหย่อนพื้นฐาน
            </p>
          </div>
          
          <TaxCalculator />
          
          {/* Info Section */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">อัตราภาษีเงินได้บุคคลธรรมดา 2567</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-600">เงินได้สุทธิ (บาท)</th>
                    <th className="text-right py-2 text-gray-600">อัตราภาษี</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">0 - 150,000</td>
                    <td className="text-right text-green-600">ยกเว้น</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">150,001 - 300,000</td>
                    <td className="text-right">5%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">300,001 - 500,000</td>
                    <td className="text-right">10%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">500,001 - 750,000</td>
                    <td className="text-right">15%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">750,001 - 1,000,000</td>
                    <td className="text-right">20%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">1,000,001 - 2,000,000</td>
                    <td className="text-right">25%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">2,000,001 - 5,000,000</td>
                    <td className="text-right">30%</td>
                  </tr>
                  <tr>
                    <td className="py-2">5,000,001 ขึ้นไป</td>
                    <td className="text-right">35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
