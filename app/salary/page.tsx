import { Metadata } from "next";
import SalaryCalculator from "./SalaryCalculator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "คำนวณเงินเดือนสุทธิ - เงินเดือนหลังหักภาษี ประกันสังคม",
  description: "คำนวณเงินเดือนสุทธิหลังหักประกันสังคมและภาษี ดูว่าเงินเข้าบัญชีจริงเท่าไหร่",
  keywords: "คำนวณเงินเดือนสุทธิ, เงินเดือนหลังหักภาษี, เงินเดือน 25000 เหลือเท่าไหร่, ประกันสังคม",
};

export default function SalaryPage() {
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
