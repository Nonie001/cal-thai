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
  const lastUpdated = new Date("2025-12-19").toLocaleDateString('th-TH', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "นโยบายความเป็นส่วนตัว",
            "url": "https://www.คำนวณเงิน.com/privacy-policy",
            "description": "นโยบายความเป็นส่วนตัวของเว็บไซต์คำนวณเงิน การเก็บรวบรวมและใช้ข้อมูลผู้ใช้งาน",
            "inLanguage": "th-TH",
            "dateModified": "2025-12-19",
            "isPartOf": {
              "@type": "WebSite",
              "name": "คำนวณเงิน",
              "url": "https://www.คำนวณเงิน.com"
            }
          })
        }}
      />
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "หน้าแรก", "item": "https://www.คำนวณเงิน.com" },
              { "@type": "ListItem", "position": 2, "name": "นโยบายความเป็นส่วนตัว", "item": "https://www.คำนวณเงิน.com/privacy-policy" }
            ]
          })
        }}
      />
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "เว็บไซต์นี้เก็บข้อมูลส่วนบุคคลหรือไม่", "acceptedAnswer": { "@type": "Answer", "text": "ไม่เก็บ ข้อมูลที่กรอกในเครื่องมือคำนวณทำงานบนอุปกรณ์ของผู้ใช้เท่านั้น" } },
              { "@type": "Question", "name": "คุกกี้ถูกใช้เพื่ออะไร", "acceptedAnswer": { "@type": "Answer", "text": "เพื่อวิเคราะห์การใช้งานและแสดงโฆษณาที่เหมาะสม ผู้ใช้สามารถปิดคุกกี้ได้" } },
              { "@type": "Question", "name": "ข้อมูลถูกแชร์กับใครบ้าง", "acceptedAnswer": { "@type": "Answer", "text": "อาจแชร์กับ Google Analytics/AdSense เพื่อวิเคราะห์และแสดงโฆษณา โดยไม่ระบุตัวตน" } }
            ],
            "inLanguage": "th-TH",
            "dateModified": "2025-12-19"
          })
        }}
      />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            นโยบายความเป็นส่วนตัว
          </h1>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 space-y-6">
            <p className="text-gray-600">อัปเดตล่าสุด: {lastUpdated}</p>

            {/* สารบัญเนื้อหา */}
            <nav aria-label="สารบัญ" className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><a className="hover:text-[#0A4174]" href="#collect">ข้อมูลที่เราเก็บรวบรวม</a></li>
                <li><a className="hover:text-[#0A4174]" href="#cookies">คุกกี้ (Cookies)</a></li>
                <li><a className="hover:text-[#0A4174]" href="#ads">โฆษณา</a></li>
                <li><a className="hover:text-[#0A4174]" href="#links">ลิงก์ไปยังเว็บไซต์อื่น</a></li>
                <li><a className="hover:text-[#0A4174]" href="#security">ความปลอดภัยของข้อมูล</a></li>
                <li><a className="hover:text-[#0A4174]" href="#rights">สิทธิของเจ้าของข้อมูลและวิธีการยื่นคำขอ</a></li>
                <li><a className="hover:text-[#0A4174]" href="#legal">ฐานทางกฎหมายในการประมวลผลข้อมูล</a></li>
                <li><a className="hover:text-[#0A4174]" href="#retention">ระยะเวลาการเก็บรักษาข้อมูล</a></li>
                <li><a className="hover:text-[#0A4174]" href="#changes">การเปลี่ยนแปลงนโยบาย</a></li>
                <li><a className="hover:text-[#0A4174]" href="#contact">ติดต่อเรา</a></li>
              </ul>
            </nav>

            <section id="collect">
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

            <section id="cookies">
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
              <div className="text-gray-600 leading-relaxed mt-2">
                <p className="font-medium">วิธีจัดการคุกกี้โดยย่อ:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Chrome: Settings → Privacy and security → Cookies</li>
                  <li>Safari (iOS): Settings → Safari → Block All Cookies</li>
                  <li>Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
                </ul>
              </div>
            </section>

            <section id="ads">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. โฆษณา</h2>
              <p className="text-gray-600 leading-relaxed">
                เราใช้บริการโฆษณาจากบุคคลที่สาม เช่น Google AdSense 
                ซึ่งอาจใช้คุกกี้และข้อมูลการเข้าชมเพื่อแสดงโฆษณาที่เกี่ยวข้องกับความสนใจของท่าน
              </p>
            </section>

            <section id="links">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. ลิงก์ไปยังเว็บไซต์อื่น</h2>
              <p className="text-gray-600 leading-relaxed">
                เว็บไซต์นี้อาจมีลิงก์ไปยังเว็บไซต์อื่น เราไม่รับผิดชอบต่อนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านั้น
              </p>
            </section>

            <section id="security">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. ความปลอดภัยของข้อมูล</h2>
              <p className="text-gray-600 leading-relaxed">
                เนื่องจากเราไม่เก็บข้อมูลส่วนบุคคล จึงไม่มีความเสี่ยงเรื่องการรั่วไหลของข้อมูลส่วนบุคคล 
                ข้อมูลที่ท่านกรอกในเครื่องมือคำนวณจะอยู่ในเครื่องของท่านเท่านั้น
              </p>
            </section>

            <section id="rights">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. สิทธิของเจ้าของข้อมูลและวิธีการยื่นคำขอ</h2>
              <p className="text-gray-600 leading-relaxed">ท่านมีสิทธิ์ตาม PDPA เช่น เข้าถึง แก้ไข ลบ คัดค้าน และพกพาข้อมูลส่วนบุคคล</p>
              <p className="text-gray-600 leading-relaxed mt-2">วิธีการยื่นคำขอ: แจ้งรายละเอียดคำขอ พร้อมข้อมูลติดต่อสำหรับการตอบกลับ</p>
            </section>

            <section id="legal">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. ฐานทางกฎหมายในการประมวลผลข้อมูล</h2>
              <p className="text-gray-600 leading-relaxed">เราใช้ข้อมูลที่ไม่ระบุตัวตนเพื่อผลประโยชน์โดยชอบด้วยกฎหมาย เช่น การวิเคราะห์การใช้งานและการปรับปรุงบริการ</p>
            </section>

            <section id="retention">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. ระยะเวลาการเก็บรักษาข้อมูล</h2>
              <p className="text-gray-600 leading-relaxed">ข้อมูลเชิงสถิติที่ไม่ระบุตัวตนอาจถูกเก็บไว้ตามรอบเวลาเพื่อการวิเคราะห์ โดยไม่มีข้อมูลระบุตัวบุคคล</p>
            </section>

            <section id="changes">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. การเปลี่ยนแปลงนโยบาย</h2>
              <p className="text-gray-600 leading-relaxed">เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงจะมีผลเมื่อเผยแพร่บนหน้านี้</p>
              <p className="text-gray-500 text-sm mt-1">วันที่ปรับปรุงล่าสุด: {lastUpdated}</p>
            </section>

            <section id="contact">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. ติดต่อเรา</h2>
              <p className="text-gray-600 leading-relaxed">หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อได้ที่หน้าเกี่ยวกับเรา</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
