import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CalculatorCard from "./components/CalculatorCard";
import {
  Calculator,
  Percent,
  Receipt,
  Wallet,
  Home as HomeIcon,
  FileText,
  Zap,
  CheckCircle,
  Settings2,
} from "lucide-react";

const calculators = [
  {
    href: "/installment",
    title: "คำนวณเงินผ่อน",
    description: "คำนวณยอดผ่อนรถ บ้าน สินค้า พร้อมดอกเบี้ยทั้งหมด",
    color: "bg-[#0A4174]/10 text-[#0A4174]",
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    href: "/interest",
    title: "คำนวณดอกเบี้ย",
    description: "ดอกเบี้ยคงที่ ลดต้นลดดอก บัตรเครดิต เงินกู้",
    color: "bg-[#0A4174]/5 text-[#0A4174]/80",
    icon: <Percent className="w-6 h-6" />,
  },
  {
    href: "/tax",
    title: "คำนวณภาษีเงินได้",
    description: "คำนวณภาษีเงินได้บุคคลธรรมดา พร้อมค่าลดหย่อน",
    color: "bg-slate-100 text-slate-700",
    icon: <Receipt className="w-6 h-6" />,
  },
  {
    href: "/salary",
    title: "คำนวณเงินเดือนสุทธิ",
    description: "เงินเดือนหลังหักประกันสังคม ภาษี เหลือเท่าไหร่",
    color: "bg-emerald-50 text-emerald-700",
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    href: "/loan",
    title: "คำนวณสินเชื่อบ้าน/รถ",
    description: "วงเงินกู้ ดอกเบี้ย ผ่อนต่อเดือน สรุปครบ",
    color: "bg-[#0A4174]/5 text-[#0A4174]/90",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    href: "/vat",
    title: "คำนวณ VAT 7%",
    description: "คำนวณภาษีมูลค่าเพิ่ม แยกราคาก่อน-หลัง VAT",
    color: "bg-gray-100 text-gray-700",
    icon: <FileText className="w-6 h-6" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/50 to-gray-50 py-12 sm:py-16 md:py-24">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Gradient Orbs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#0A4174]/20 to-blue-400/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
            <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-gradient-to-tl from-[#0A4174]/15 to-indigo-300/15 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
            
            {/* 3D Floating Elements */}
            {/* Floating Coin */}
            <div className="absolute top-16 sm:top-24 left-4 sm:left-16 lg:left-24 animate-[float3d_6s_ease-in-out_infinite]">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-400/30 animate-[spin3d_8s_linear_infinite]">
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-bold text-lg sm:text-xl lg:text-2xl">฿</span>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur-md animate-pulse" />
              </div>
            </div>
            
            {/* Floating Calculator */}
            <div className="absolute top-32 sm:top-20 right-4 sm:right-16 lg:right-28 animate-[float3d_7s_ease-in-out_infinite_0.5s]">
              <div className="relative w-14 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-xl shadow-slate-400/20 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="absolute inset-1 bg-gradient-to-br from-white to-slate-50 rounded-lg p-1.5 sm:p-2">
                  <div className="w-full h-4 sm:h-5 lg:h-6 bg-gradient-to-r from-[#0A4174] to-blue-600 rounded mb-1.5 sm:mb-2 flex items-center justify-end px-1">
                    <span className="text-white text-[8px] sm:text-[10px] lg:text-xs font-mono">1,234</span>
                  </div>
                  <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-sm hover:from-slate-300 hover:to-slate-400 transition-colors" />
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-2 bg-[#0A4174]/10 rounded-xl blur-lg" />
              </div>
            </div>
            
            {/* Floating Chart/Graph */}
            <div className="absolute bottom-20 sm:bottom-16 left-8 sm:left-24 lg:left-32 animate-[float3d_8s_ease-in-out_infinite_1s]">
              <div className="relative w-16 h-14 sm:w-20 sm:h-16 lg:w-24 lg:h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-xl shadow-emerald-400/20 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-1.5 sm:inset-2 bg-white rounded-lg p-1.5 sm:p-2 flex items-end gap-0.5 sm:gap-1">
                  <div className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm h-[30%] animate-[barGrow_2s_ease-out_infinite_alternate]" />
                  <div className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm h-[60%] animate-[barGrow_2s_ease-out_0.2s_infinite_alternate]" />
                  <div className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm h-[45%] animate-[barGrow_2s_ease-out_0.4s_infinite_alternate]" />
                  <div className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm h-[80%] animate-[barGrow_2s_ease-out_0.6s_infinite_alternate]" />
                  <div className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm h-[55%] animate-[barGrow_2s_ease-out_0.8s_infinite_alternate]" />
                </div>
                <div className="absolute -inset-2 bg-emerald-400/15 rounded-xl blur-lg" />
              </div>
            </div>
            
            {/* Floating Piggy Bank */}
            <div className="absolute bottom-24 sm:bottom-20 right-8 sm:right-20 lg:right-32 animate-[float3d_9s_ease-in-out_infinite_1.5s]">
              <div className="relative w-14 h-12 sm:w-18 sm:h-14 lg:w-22 lg:h-18">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-pink-400 to-rose-500 rounded-[40%_40%_50%_50%] shadow-lg shadow-pink-400/30 transform rotate-3">
                  {/* Piggy ears */}
                  <div className="absolute -top-1 left-2 w-2 h-3 sm:w-3 sm:h-4 bg-gradient-to-t from-pink-400 to-pink-300 rounded-t-full" />
                  <div className="absolute -top-1 right-2 w-2 h-3 sm:w-3 sm:h-4 bg-gradient-to-t from-pink-400 to-pink-300 rounded-t-full" />
                  {/* Coin slot */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-0.5 sm:h-1 bg-pink-600/40 rounded-full" />
                  {/* Snout */}
                  <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 sm:w-5 sm:h-3 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full">
                    <div className="absolute top-1/2 left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-pink-500 rounded-full" />
                    <div className="absolute top-1/2 right-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-pink-500 rounded-full" />
                  </div>
                </div>
                <div className="absolute -inset-2 bg-pink-400/20 rounded-full blur-lg animate-pulse" />
              </div>
            </div>
            
            {/* Floating Percentage Badge */}
            <div className="hidden lg:block absolute top-1/2 right-12 animate-[float3d_7s_ease-in-out_infinite_2s]">
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#0A4174] to-blue-600 rounded-2xl shadow-xl shadow-blue-500/30 transform rotate-12 hover:rotate-6 transition-transform duration-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">%</span>
                <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl blur-md" />
              </div>
            </div>
            
            {/* Floating Small Coins */}
            <div className="absolute top-1/3 left-12 sm:left-20 animate-[coinFloat_4s_ease-in-out_infinite]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-md shadow-yellow-400/40 flex items-center justify-center">
                <span className="text-amber-700 text-[6px] sm:text-[8px] font-bold">฿</span>
              </div>
            </div>
            <div className="absolute bottom-1/3 right-16 sm:right-24 animate-[coinFloat_5s_ease-in-out_infinite_0.5s]">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-md shadow-yellow-400/40" />
            </div>
            <div className="hidden sm:block absolute top-2/3 left-1/4 animate-[coinFloat_6s_ease-in-out_infinite_1s]">
              <div className="w-3 h-3 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-md shadow-yellow-400/40" />
            </div>
            
            {/* Sparkle Effects */}
            <div className="absolute top-24 right-1/4 animate-[sparkle_2s_ease-in-out_infinite]">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <div className="absolute bottom-1/3 left-1/4 animate-[sparkle_2.5s_ease-in-out_infinite_0.5s]">
              <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <div className="hidden sm:block absolute top-1/2 right-1/3 animate-[sparkle_3s_ease-in-out_infinite_1s]">
              <svg className="w-2 h-2 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            
            {/* Subtle Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(#0A4174 1px, transparent 1px), linear-gradient(90deg, #0A4174 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
            
            {/* Animated Particles */}
            <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#0A4174]/30 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
            <div className="absolute top-40 right-1/3 w-3 h-3 bg-blue-400/20 rounded-full animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
            <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-[#0A4174]/25 rounded-full animate-[pulse_3.5s_ease-in-out_infinite_1s]" />
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-[pulse_4.5s_ease-in-out_infinite_0.3s]" />
            
            {/* Gradient Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0A4174]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0A4174]/5 to-transparent" />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#0A4174]/10 text-[#0A4174] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Zap className="w-4 h-4 animate-pulse" />
              ใช้งานฟรี ไม่ต้องสมัคร
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="inline-block animate-[fadeInUp_0.6s_ease-out_forwards]">คำนวณเรื่องเงิน</span>
              <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0A4174] via-blue-600 to-[#0A4174] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite,fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
                ให้จบในที่เดียว
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] opacity-0">
              ผ่อน กู้ ภาษี เงินเดือน VAT คิดให้ครบในไม่กี่คลิก
              <br className="hidden sm:block" />
              <span className="text-gray-500">เข้าใจง่าย ใช้ได้ทันที ไม่ต้องอ่านยาว</span>
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-16 text-center animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] opacity-0">
              <div className="flex flex-col items-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#0A4174] transition-colors duration-300">6</div>
                <div className="text-xs sm:text-sm text-gray-500">เครื่องมือ</div>
              </div>
              <div className="flex flex-col items-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#0A4174] transition-colors duration-300">ฟรี</div>
                <div className="text-xs sm:text-sm text-gray-500">ไม่เสียค่าใช้จ่าย</div>
              </div>
              <div className="flex flex-col items-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#0A4174] transition-colors duration-300">ทันที</div>
                <div className="text-xs sm:text-sm text-gray-500">Real-time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Grid */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                เลือกเครื่องมือที่ต้องการ
              </h2>
              <p className="text-sm sm:text-base text-gray-500">คลิกเพื่อเริ่มคำนวณทันที</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {calculators.map((calc) => (
                <CalculatorCard key={calc.href} {...calc} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                ทำไมต้องใช้เว็บนี้?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A4174]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#0A4174]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">คำนวณไว</h3>
                <p className="text-xs sm:text-sm text-gray-500">ผลลัพธ์แสดงทันทีขณะพิมพ์ ไม่ต้องกดปุ่มคำนวณ</p>
              </div>

              <div className="text-center p-4 sm:p-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">ตัวเลขชัด</h3>
                <p className="text-xs sm:text-sm text-gray-500">แสดงผลเป็นตัวเลขใหญ่ อ่านง่าย เข้าใจทันที</p>
              </div>

              <div className="text-center p-4 sm:p-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0A4174]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Settings2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#0A4174]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">ไม่ต้องอ่านยาว</h3>
                <p className="text-xs sm:text-sm text-gray-500">มาเพื่อคำนวณ ได้คำตอบ ไม่ต้องอ่านบทความ</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0A4174] to-[#0A4174]/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                พร้อมคำนวณแล้วหรือยัง?
              </h2>
              <p className="text-blue-100 mb-5 sm:mb-6 text-sm sm:text-base">
                เลือกเครื่องมือด้านบน หรือเริ่มจากเครื่องมือยอดนิยม
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/installment"
                  className="bg-white text-[#0A4174] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  คำนวณเงินผ่อน
                </a>
                <a
                  href="/tax"
                  className="bg-[#0A4174]/80 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-[#0A4174]/70 transition-colors text-sm sm:text-base"
                >
                  คำนวณภาษี
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
