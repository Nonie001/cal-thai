import { Metadata } from "next";
import LoanCalculator from "./LoanCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
        </div>
      </main>
      <Footer />
    </div>
  );
}
