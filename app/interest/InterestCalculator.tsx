"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type InterestType = "flat" | "reducing";

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState<string>("100000");
  const [interestRate, setInterestRate] = useState<string>("15");
  const [months, setMonths] = useState<string>("12");
  const [interestType, setInterestType] = useState<InterestType>("flat");
  const [toast, setToast] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Init from query
  useEffect(() => {
    const p = searchParams.get("principal");
    const r = searchParams.get("interestRate");
    const m = searchParams.get("months");
    const t = searchParams.get("interestType");
    if (p) setPrincipal(p);
    if (r) setInterestRate(r);
    if (m) setMonths(m);
    if (t === "flat" || t === "reducing") setInterestType(t as InterestType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("principal", (parseFloat(principal.replace(/,/g, '')) || 0).toString());
    params.set("interestRate", (parseFloat(interestRate) || 0).toString());
    params.set("months", (parseInt(months) || 1).toString());
    params.set("interestType", interestType);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [principal, interestRate, months, interestType, router, pathname]);

  const buildShareUrl = () => {
    const params = new URLSearchParams();
    params.set("principal", (parseFloat(principal.replace(/,/g, '')) || 0).toString());
    params.set("interestRate", (parseFloat(interestRate) || 0).toString());
    params.set("months", (parseInt(months) || 1).toString());
    params.set("interestType", interestType);
    return `${window.location.origin}${pathname}?${params.toString()}`;
  };

  const copyLink = async () => {
    const url = buildShareUrl();
    let copied = false;
    try { await navigator.clipboard.writeText(url); copied = true; } catch {}
    if (!copied) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        copied = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {}
    }
    setToast(copied ? 'คัดลอกลิงก์แล้ว' : 'คัดลอกลิงก์ไม่สำเร็จ');
    setTimeout(() => setToast(null), 2000);
  };

  // แชร์แบบเนทีฟถูกปิดเพื่อให้เหลือเฉพาะการคัดลอกลิงก์

  const result = useMemo(() => {
    const principalNum = parseFloat(principal.replace(/,/g, '')) || 0;
    const rateNum = parseFloat(interestRate) || 0;
    const monthsNum = parseInt(months) || 1;

    if (interestType === "flat") {
      const years = monthsNum / 12;
      const totalInterest = principalNum * (rateNum / 100) * years;
      const totalAmount = principalNum + totalInterest;
      const monthlyPayment = totalAmount / monthsNum;
      return { monthlyPayment, totalInterest, totalAmount };
    } else {
      const monthlyRate = rateNum / 100 / 12;
      if (monthlyRate === 0) {
        return { monthlyPayment: principalNum / monthsNum, totalInterest: 0, totalAmount: principalNum };
      }
      const monthlyPayment = (principalNum * monthlyRate * Math.pow(1 + monthlyRate, monthsNum)) / (Math.pow(1 + monthlyRate, monthsNum) - 1);
      const totalAmount = monthlyPayment * monthsNum;
      const totalInterest = totalAmount - principalNum;
      return { monthlyPayment, totalInterest, totalAmount };
    }
  }, [principal, interestRate, months, interestType]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("th-TH", { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(num);
  };

  const formatInputValue = (value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    const number = parseFloat(numericValue) || 0;
    return new Intl.NumberFormat('th-TH').format(number);
  };

  const parseInputValue = (value: string) => {
    return value.replace(/,/g, '');
  };

  return (
    <div className="space-y-4">
      {/* ผลลัพธ์หลัก */}
      <div className="bg-gradient-to-r from-[#0A4174] to-[#0A4174]/90 rounded-2xl p-5 text-white shadow-lg">
        <div className="text-blue-100 text-sm mb-1">ยอดผ่อนต่อเดือน</div>
        <div className="text-3xl sm:text-4xl font-bold">฿{formatNumber(result.monthlyPayment)}</div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm">
          <div>
            <span className="text-blue-200">ดอกเบี้ยรวม</span>
            <span className="ml-2 font-semibold">฿{formatNumber(result.totalInterest)}</span>
          </div>
          <div>
            <span className="text-blue-200">รวมทั้งหมด</span>
            <span className="ml-2 font-semibold">฿{formatNumber(result.totalAmount)}</span>
          </div>
        </div>
      </div>

      {/* ฟอร์มกรอกข้อมูล */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
        {/* ประเภทดอกเบี้ย */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => setInterestType("flat")}
            className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${
              interestType === "flat" ? "bg-[#0A4174] text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            ดอกเบี้ยคงที่
          </button>
          <button
            onClick={() => setInterestType("reducing")}
            className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${
              interestType === "reducing" ? "bg-[#0A4174] text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            ลดต้นลดดอก
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3 sm:col-span-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">เงินต้น (บาท)</label>
            <input
              type="text"
              inputMode="numeric"
              value={formatInputValue(principal)}
              onChange={(e) => setPrincipal(parseInputValue(e.target.value))}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-[#0A4174]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">ดอกเบี้ย (%/ปี)</label>
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-[#0A4174]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">เดือน</label>
            <input
              type="number"
              inputMode="numeric"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-[#0A4174]"
            />
          </div>
        </div>
      </div>

      {/* รายละเอียด */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
          interestType === "flat" ? "bg-orange-100 text-orange-700" : "bg-[#0A4174]/10 text-[#0A4174]"
        }`}>
          {interestType === "flat" ? "ดอกเบี้ยคงที่ (Flat Rate)" : "ลดต้นลดดอก (Effective Rate)"}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">เงินต้น</span>
            <span className="font-medium">฿{formatNumber(parseFloat(principal) || 0)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">ดอกเบี้ยรวม</span>
            <span className="font-medium text-red-500">+฿{formatNumber(result.totalInterest)}</span>
          </div>
          <div className="flex justify-between py-2 text-base">
            <span className="font-semibold text-gray-900">รวมที่ต้องจ่าย</span>
            <span className="font-bold text-[#0A4174]">฿{formatNumber(result.totalAmount)}</span>
          </div>
        </div>
        {interestType === "flat" && (
          <div className="mt-3 p-3 bg-yellow-50 rounded-xl text-xs text-yellow-800">
            💡 ดอกเบี้ยคงที่ {interestRate}% เทียบเท่าลดต้นลดดอกประมาณ {(parseFloat(interestRate) * 1.8).toFixed(1)}%
          </div>
        )}

        {/* Share Bar */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <button onClick={copyLink} className="w-full sm:w-auto px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium">คัดลอกลิงก์ผลลัพธ์</button>
          <span className="text-xs text-gray-500 self-center">คัดลอกลิงก์นี้แล้วส่งให้คนอื่นได้เลย</span>
          {toast && <span className="text-xs text-emerald-700 self-center">{toast}</span>}
        </div>
      </div>
    </div>
  );
}
