import Link from "next/link";
import {
  Calculator,
  Percent,
  Receipt,
  Wallet,
  Home,
  FileText,
  Info,
  Shield,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A4174] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-white/20">
                <img src="/logo.png" alt="คำนวณเงิน" className="w-9 h-9 object-contain" />
              </div>
              <span className="font-bold text-white">คำนวณเงิน</span>
            </Link>
            <p className="text-sm text-blue-100">
              เครื่องมือคำนวณการเงินสำหรับคนไทย ใช้งานง่าย ฟรี ไม่ต้องสมัคร
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-medium text-white mb-3 text-sm sm:text-base">เครื่องมือ</h3>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li>
                <Link href="/installment" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Calculator className="w-4 h-4" />
                  เงินผ่อน
                </Link>
              </li>
              <li>
                <Link href="/interest" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Percent className="w-4 h-4" />
                  ดอกเบี้ย
                </Link>
              </li>
              <li>
                <Link href="/tax" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Receipt className="w-4 h-4" />
                  ภาษี
                </Link>
              </li>
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h3 className="font-medium text-white mb-3 text-sm sm:text-base">เพิ่มเติม</h3>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li>
                <Link href="/salary" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Wallet className="w-4 h-4" />
                  เงินเดือน
                </Link>
              </li>
              <li>
                <Link href="/loan" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Home className="w-4 h-4" />
                  สินเชื่อ
                </Link>
              </li>
              <li>
                <Link href="/vat" className="hover:text-white flex items-center gap-2 transition-colors">
                  <FileText className="w-4 h-4" />
                  VAT
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-white mb-3 text-sm sm:text-base">อื่นๆ</h3>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li>
                <Link href="/about" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Info className="w-4 h-4" />
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white flex items-center gap-2 transition-colors">
                  <Shield className="w-4 h-4" />
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs sm:text-sm text-blue-100">
          <p>© {new Date().getFullYear()} คำนวณเงิน - เครื่องมือคำนวณการเงินออนไลน์</p>
        </div>
      </div>
    </footer>
  );
}
