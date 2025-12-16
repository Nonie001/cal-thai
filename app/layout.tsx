import type { Metadata, Viewport } from "next";
import { Prompt } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A4174",
};

export const metadata: Metadata = {
  title: {
    default: "คำนวณเงิน - เครื่องมือคำนวณการเงินสำหรับคนไทย",
    template: "%s | คำนวณเงิน",
  },
  description: "คำนวณเรื่องเงินให้จบในที่เดียว ผ่อน กู้ ภาษี เงินเดือน VAT คิดให้ครบในไม่กี่คลิก ใช้งานฟรี ไม่ต้องสมัคร",
  keywords: ["คำนวณเงินผ่อน", "คำนวณภาษี", "คำนวณ VAT", "คำนวณเงินเดือนสุทธิ", "คำนวณดอกเบี้ย", "คำนวณสินเชื่อ", "เครื่องคิดเงิน", "คำนวณผ่อนรถ", "คำนวณผ่อนบ้าน"],
  authors: [{ name: "คำนวณเงิน" }],
  creator: "คำนวณเงิน",
  publisher: "คำนวณเงิน",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://คำนวณเงิน.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "คำนวณเงิน - เครื่องมือคำนวณการเงินสำหรับคนไทย",
    description: "คำนวณเรื่องเงินให้จบในที่เดียว ผ่อน กู้ ภาษี เงินเดือน VAT คิดให้ครบในไม่กี่คลิก",
    url: "https://คำนวณเงิน.com",
    siteName: "คำนวณเงิน",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "คำนวณเงิน - เครื่องมือคำนวณการเงินสำหรับคนไทย",
    description: "คำนวณเรื่องเงินให้จบในที่เดียว ผ่อน กู้ ภาษี เงินเดือน VAT คิดให้ครบในไม่กี่คลิก",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
