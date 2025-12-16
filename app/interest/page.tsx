import { Metadata } from "next";
import InterestCalculator from "./InterestCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณดอกเบี้ย - ดอกเบี้ยคงที่ ลดต้นลดดอก",
  description: "คำนวณดอกเบี้ยเงินกู้ บัตรเครดิต ทั้งแบบคงที่และลดต้นลดดอก แสดงดอกเบี้ยที่ต้องจ่ายจริง",
  keywords: "คำนวณดอกเบี้ย, ดอกเบี้ยคงที่, ลดต้นลดดอก, ดอกเบี้ยบัตรเครดิต, ดอกเบี้ยเงินกู้",
};

export default function InterestPage() {
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
