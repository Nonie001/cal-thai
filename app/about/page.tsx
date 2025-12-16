import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - คำนวณเงิน | เครื่องมือคำนวณการเงินฟรี",
  description: "เรื่องราวของเว็บไซต์คำนวณเงิน เครื่องมือคำนวณการเงินสำหรับคนไทย ทำโดยนักพัฒนาที่ต้องการให้ทุกคนเข้าถึงเครื่องมือการเงินฟรี",
  keywords: "เกี่ยวกับเรา, คำนวณเงิน, เครื่องมือการเงิน, ฟรี, ไม่ต้องสมัคร",
  openGraph: {
    title: "เกี่ยวกับเรา - คำนวณเงิน",
    description: "เรื่องราวของเว็บไซต์คำนวณเงิน เครื่องมือคำนวณการเงินสำหรับคนไทย",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            เกี่ยวกับเรา
          </h1>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 space-y-8">
            <div className="bg-[#0A4174]/10 rounded-xl p-6 border border-[#0A4174]/20">
              <h2 className="text-xl font-semibold text-[#0A4174] mb-3">สวัสดีครับ! 👋</h2>
              <p className="text-gray-700 leading-relaxed">
                ผมเป็นนักพัฒนาซอฟต์แวร์ที่สนใจเรื่องการเงินและเทคโนโลยี 
                เริ่มสร้างเว็บไซต์นี้ขึ้นมาเพราะเคยประสบปัญหาในการคำนวณเงินผ่อน 
                ดอกเบี้ย และเรื่องการเงินต่างๆ ที่ต้องไปหาเว็บไซต์หลายแห่งหรือใช้แอพที่ต้องสมัครสมาชิก
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">🎯 เป้าหมายของเรา</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ต้องการสร้างเครื่องมือคำนวณการเงินที่ใช้งานง่าย ฟรี และไม่ต้องสมัครสมาชิก 
                เพื่อให้ทุกคนสามารถเข้าถึงเครื่องมือพื้นฐานทางการเงินได้อย่างสะดวก
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="text-2xl mb-2">🆓</div>
                  <h3 className="font-medium text-gray-900 mb-2">ฟรีตลอดไป</h3>
                  <p className="text-sm text-gray-600">ไม่มีค่าใช้จ่าย ไม่ต้องสมัครสมาชิก</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-medium text-gray-900 mb-2">ใช้งานง่าย</h3>
                  <p className="text-sm text-gray-600">ออกแบบให้เข้าใจง่าย คำนวณได้ทันที</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">🛠️ เครื่องมือที่พัฒนา</h2>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">💰</span>
                  <div>
                    <h3 className="font-medium text-gray-900">เครื่องมือคำนวณเงินผ่อน</h3>
                    <p className="text-sm text-gray-600">คำนวณยอดผ่อนรถ บ้าน หรือสินค้าต่างๆ พร้อมดูดอกเบี้ยรวม</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">📈</span>
                  <div>
                    <h3 className="font-medium text-gray-900">เครื่องมือคำนวณดอกเบี้ย</h3>
                    <p className="text-sm text-gray-600">เปรียบเทียบดอกเบี้ยคงที่และลดต้นลดดอก</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">🧾</span>
                  <div>
                    <h3 className="font-medium text-gray-900">เครื่องมือคำนวณภาษี</h3>
                    <p className="text-sm text-gray-600">คำนวณภาษีเงินได้บุคคลธรรมดาพร้อมค่าลดหย่อน</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">💵</span>
                  <div>
                    <h3 className="font-medium text-gray-900">เครื่องมือคำนวณเงินเดือนสุทธิ</h3>
                    <p className="text-sm text-gray-600">ดูเงินเดือนสุทธิหลังหักภาษีและประกันสังคม</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">🏠</span>
                  <div>
                    <h3 className="font-medium text-gray-900">เครื่องมือคำนวณสินเชื่อ</h3>
                    <p className="text-sm text-gray-600">คำนวณสินเชื่อบ้านและรถยนต์</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-lg">📄</span>
                  <div>
                    <h3 className="font-medium text-gray-900">เครื่องมือคำนวณ VAT</h3>
                    <p className="text-sm text-gray-600">แยกราคาก่อนและหลังภาษีมูลค่าเพิ่ม</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">💻 เทคโนโลยีที่ใช้</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                เว็บไซต์นี้พัฒนาด้วย Next.js 15, React 19, TypeScript และ Tailwind CSS 
                โฮสติ้งบน Vercel เพื่อความรวดเร็วและเสถียรภาพ
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#0A4174]/10 text-[#0A4174] rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-[#0A4174]/10 text-[#0A4174] rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-[#0A4174]/10 text-[#0A4174] rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-[#0A4174]/10 text-[#0A4174] rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-[#0A4174]/10 text-[#0A4174] rounded-full text-sm font-medium">Vercel</span>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">🔮 แผนอนาคต</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  เพิ่มเครื่องมือคำนวณการลงทุน
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  เครื่องมือคำนวณประกันภัย
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  เพิ่มการเปรียบเทียบผลิตภัณฑ์การเงิน
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">◯</span>
                  แอพมือถือ (อยู่ระหว่างพิจารณา)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">🤝 ร่วมพัฒนา</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  หากคุณมีไอเดียเครื่องมือใหม่ หรือพบปัญหาการใช้งาน สามารถติดต่อมาได้
                  ผมยินดีรับฟังและปรับปรุงเว็บไซต์ให้ดียิ่งขึ้น
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>อีเมล:</strong> hello@คำนวณเงิน.com</p>
                  <p><strong>เฟสบุ๊ก:</strong> คำนวณเงิน</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">⚠️ ข้อจำกัดความรับผิดชอบ</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                ผลการคำนวณจากเว็บไซต์นี้เป็นเพียงการประมาณการเท่านั้น 
                ตัวเลขจริงอาจแตกต่างออกไปตามเงื่อนไขของสถาบันการเงินหรือหน่วยงานที่เกี่ยวข้อง 
                ควรตรวจสอบข้อมูลจริงและปรึกษาผู้เชี่ยวชาญก่อนตัดสินใจทางการเงิน
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
