import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) - คำนวณเงิน",
  description: "นโยบายคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์คำนวณเงิน ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
  keywords: "PDPA, คุ้มครองข้อมูลส่วนบุคคล, นโยบายความเป็นส่วนตัว, คำนวณเงิน",
};

export default function PDPAPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA)
          </h1>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 space-y-8">
            <div className="bg-[#0A4174]/10 rounded-xl p-4 border border-[#0A4174]/20">
              <p className="text-[#0A4174] font-medium">
                เว็บไซต์คำนวณเงิน ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน 
                ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. ข้อมูลที่เราเก็บรวบรวม</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>ข้อมูลการใช้งาน:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>ข้อมูลการเข้าชมเว็บไซต์ (Page views, การคลิก)</li>
                  <li>ข้อมูลอุปกรณ์และเบราว์เซอร์</li>
                  <li>IP Address และตำแหน่งทั่วไป</li>
                  <li>เวลาและความถี่ในการใช้งาน</li>
                </ul>
                <p className="mt-4"><strong>หมายเหตุ:</strong> เราไม่เก็บข้อมูลตัวเลขที่คุณกรอกในเครื่องมือคำนวณใดๆ</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. วัตถุประสงค์ในการใช้ข้อมูล</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>ปรับปรุงการให้บริการและประสบการณ์ผู้ใช้งาน</li>
                <li>วิเคราะห์พฤติกรรมการใช้งานเพื่อพัฒนาเว็บไซต์</li>
                <li>แสดงโฆษณาที่เกี่ยวข้องผ่าน Google AdSense</li>
                <li>รักษาความปลอดภัยและป้องกันการใช้งานที่ไม่เหมาะสม</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. การแชร์ข้อมูลกับบุคคลที่สาม</h2>
              <div className="space-y-3 text-gray-600">
                <p>เราอาจแชร์ข้อมูลกับบริการต่อไปนี้:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Google Analytics:</strong> เพื่อวิเคราะห์การใช้งานเว็บไซต์</li>
                  <li><strong>Google AdSense:</strong> เพื่อแสดงโฆษณาที่เหมาะสม</li>
                  <li><strong>Vercel:</strong> ผู้ให้บริการโฮสติ้งเว็บไซต์</li>
                </ul>
                <p className="mt-3">เราไม่ขายหรือให้เช่าข้อมูลส่วนบุคคลของคุณกับบุคคลที่สามอื่นๆ</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. การใช้ Cookies</h2>
              <div className="space-y-3 text-gray-600">
                <p>เว็บไซต์ของเราใช้ Cookies เพื่อ:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>จดจำการตั้งค่าและความชอบของผู้ใช้</li>
                  <li>วิเคราะห์การใช้งานเว็บไซต์</li>
                  <li>แสดงโฆษณาที่เกี่ยวข้อง</li>
                </ul>
                <p className="mt-3">คุณสามารถปิดการใช้งาน Cookies ได้ในการตั้งค่าเบราว์เซอร์</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. สิทธิของเจ้าของข้อมูล</h2>
              <div className="space-y-3 text-gray-600">
                <p>คุณมีสิทธิ์ตามกฎหมาย ดังนี้:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>สิทธิ์ในการเข้าถึงข้อมูลส่วนบุคคล</li>
                  <li>สิทธิ์ในการแก้ไขข้อมูลส่วนบุคคล</li>
                  <li>สิทธิ์ในการลบข้อมูลส่วนบุคคล</li>
                  <li>สิทธิ์ในการคัดค้านการประมวลผลข้อมูล</li>
                  <li>สิทธิ์ในการพกพาข้อมูล</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. การรักษาความปลอดภัย</h2>
              <p className="text-gray-600">
                เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของคุณ 
                รวมถึงการเข้ารหัสข้อมูลระหว่างการส่งผ่าน (SSL/TLS) และการจำกัดการเข้าถึงข้อมูล
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. การติดต่อเรา</h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600 mb-3">
                  หากคุณมีคำถามเกี่ยวกับนโยบายนี้ หรือต้องการใช้สิทธิ์ใดๆ กรุณาติดต่อเราผ่าน:
                </p>
                <div className="space-y-1 text-gray-700">
                  <p><strong>อีเมล:</strong> privacy@คำนวณเงิน.com</p>
                  <p><strong>เว็บไซต์:</strong> คำนวณเงิน.com</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. การเปลี่ยนแปลงนโยบาย</h2>
              <p className="text-gray-600">
                เราอาจมีการปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงที่สำคัญ
                จะมีการแจ้งให้ทราบผ่านเว็บไซต์ล่วงหน้าอย่างน้อย 30 วัน
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p><strong>วันที่มีผลบังคับใช้:</strong> {new Date().toLocaleDateString('th-TH')}</p>
                <p><strong>อัปเดตครั้งล่าสุด:</strong> {new Date().toLocaleDateString('th-TH')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}