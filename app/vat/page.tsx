import { Metadata } from "next";
import VatCalculator from "./VatCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณ VAT 7% - แยกราคาก่อน-หลังภาษีมูลค่าเพิ่ม",
  description: "คำนวณภาษีมูลค่าเพิ่ม VAT 7% แยกราคาก่อนและหลัง VAT ได้ทันที เหมาะสำหรับพ่อค้า ร้านค้าออนไลน์",
  keywords: "คำนวณ VAT, ภาษีมูลค่าเพิ่ม, VAT 7%, แยก VAT, ราคาไม่รวม VAT",
};

export default function VatPage() {
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
