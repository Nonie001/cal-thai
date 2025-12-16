import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว - คำนวณเงิน",
  description: "นโยบายความเป็นส่วนตัวของเว็บไซต์คำนวณเงิน การเก็บรวบรวมและใช้ข้อมูลผู้ใช้งาน",
  keywords: "นโยบายความเป็นส่วนตัว, Privacy Policy, คำนวณเงิน, การคุ้มครองข้อมูล",
  alternates: { canonical: "https://www.คำนวณเงิน.com/privacy-policy" },
  openGraph: {
    title: "นโยบายความเป็นส่วนตัว",
    description: "นโยบายความเป็นส่วนตัวของเว็บไซต์คำนวณเงิน",
    url: "https://www.คำนวณเงิน.com/privacy-policy",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            นโยบายความเป็นส่วนตัว
          </h1>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 space-y-6">
            <p className="text-gray-600">
              อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. ข้อมูลที่เราเก็บรวบรวม</h2>
              <p className="text-gray-600 leading-relaxed">
                เว็บไซต์นี้ไม่เก็บข้อมูลส่วนบุคคลใดๆ การคำนวณทั้งหมดทำบนเครื่องของผู้ใช้ (Client-side) 
                โดยไม่มีการส่งข้อมูลไปยังเซิร์ฟเวอร์
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                เราอาจเก็บข้อมูลที่ไม่ระบุตัวตน เช่น:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>ข้อมูลการใช้งานเว็บไซต์ (Page views)</li>
                <li>ประเภทอุปกรณ์และเบราว์เซอร์</li>
                <li>ประเทศที่เข้าชม</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. คุกกี้ (Cookies)</h2>
              <p className="text-gray-600 leading-relaxed">
                เว็บไซต์นี้อาจใช้คุกกี้เพื่อ:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>วิเคราะห์การใช้งานเว็บไซต์ (Google Analytics)</li>
                <li>แสดงโฆษณาที่เกี่ยวข้อง (Google AdSense)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">
                ท่านสามารถปิดการใช้งานคุกกี้ได้ในการตั้งค่าเบราว์เซอร์
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. โฆษณา</h2>
              <p className="text-gray-600 leading-relaxed">
                เราใช้บริการโฆษณาจากบุคคลที่สาม เช่น Google AdSense 
                ซึ่งอาจใช้คุกกี้และข้อมูลการเข้าชมเพื่อแสดงโฆษณาที่เกี่ยวข้องกับความสนใจของท่าน
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. ลิงก์ไปยังเว็บไซต์อื่น</h2>
              <p className="text-gray-600 leading-relaxed">
                เว็บไซต์นี้อาจมีลิงก์ไปยังเว็บไซต์อื่น เราไม่รับผิดชอบต่อนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านั้น
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. ความปลอดภัยของข้อมูล</h2>
              <p className="text-gray-600 leading-relaxed">
                เนื่องจากเราไม่เก็บข้อมูลส่วนบุคคล จึงไม่มีความเสี่ยงเรื่องการรั่วไหลของข้อมูลส่วนบุคคล 
                ข้อมูลที่ท่านกรอกในเครื่องมือคำนวณจะอยู่ในเครื่องของท่านเท่านั้น
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. การเปลี่ยนแปลงนโยบาย</h2>
              <p className="text-gray-600 leading-relaxed">
                เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว 
                การเปลี่ยนแปลงจะมีผลทันทีที่เผยแพร่บนหน้านี้
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. ติดต่อเรา</h2>
              <p className="text-gray-600 leading-relaxed">
                หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อได้ที่หน้าเกี่ยวกับเรา
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
