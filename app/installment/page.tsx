import { Metadata } from "next";
import InstallmentCalculator from "./InstallmentCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calculator, ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "คำนวณเงินผ่อน - คำนวณยอดผ่อนรถ บ้าน สินค้า",
  description: "คำนวณเงินผ่อนรถ ผ่อนบ้าน ผ่อนสินค้า ใส่ราคา เงินดาวน์ ดอกเบี้ย ระยะเวลา คำนวณยอดผ่อนต่อเดือนทันที",
  keywords: ["คำนวณเงินผ่อน", "คำนวณผ่อนรถ", "คำนวณผ่อนบ้าน", "ผ่อน 60 งวด", "ยอดผ่อนต่อเดือน"],
  alternates: {
    canonical: "/installment",
  },
  openGraph: {
    title: "คำนวณเงินผ่อน - คำนวณยอดผ่อนรถ บ้าน สินค้า",
    description: "คำนวณเงินผ่อนรถ ผ่อนบ้าน ผ่อนสินค้า คำนวณยอดผ่อนต่อเดือนทันที",
    url: "/installment",
  },
};

export default function InstallmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
