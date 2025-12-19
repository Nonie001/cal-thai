"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function InstallmentCalculator() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [price, setPrice] = useState<string>("1000000");
  const [downPayment, setDownPayment] = useState<string>("200000");
  const [interestRate, setInterestRate] = useState<string>("3.5");
  const [months, setMonths] = useState<string>("60");
  const [toast, setToast] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);

  // Initialize from query params on mount
  useEffect(() => {
    const qp = searchParams;
    const p = qp.get("price");
    const d = qp.get("down");
    const r = qp.get("rate");
    const m = qp.get("months");
    if (p) setPrice(p);
    if (d) setDownPayment(d);
    if (r) setInterestRate(r);
    if (m) setMonths(m);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL query when inputs change (debounced lightweight)
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("price", price || "");
    url.searchParams.set("down", downPayment || "");
    url.searchParams.set("rate", interestRate || "");
    url.searchParams.set("months", months || "");
    router.replace(`${pathname}?${url.searchParams.toString()}`);
  }, [price, downPayment, interestRate, months, pathname, router]);

  const result = useMemo(() => {
    const priceNum = parseFloat(price.replace(/,/g, '')) || 0;
    const downPaymentNum = parseFloat(downPayment.replace(/,/g, '')) || 0;
    const interestRateNum = parseFloat(interestRate) || 0;
    const monthsNum = parseInt(months) || 1;

    const loanAmount = priceNum - downPaymentNum;
    const years = monthsNum / 12;
    const totalInterest = loanAmount * (interestRateNum / 100) * years;
    const totalAmount = loanAmount + totalInterest;
    const monthlyPayment = totalAmount / monthsNum;
    const monthlyInterest = loanAmount * (interestRateNum / 100) / 12;

    return {
      loanAmount,
      totalInterest,
      totalAmount,
      monthlyPayment,
      monthlyInterest,
    };
  }, [price, downPayment, interestRate, months]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("th-TH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(num);
  };

  const formatInputValue = (value: string) => {
    // Remove all non-numeric characters except decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    const number = parseFloat(numericValue) || 0;
    return new Intl.NumberFormat('th-TH').format(number);
  };

  const parseInputValue = (value: string) => {
    return value.replace(/,/g, '');
  };

  const buildShareUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("price", price || "");
    url.searchParams.set("down", downPayment || "");
    url.searchParams.set("rate", interestRate || "");
    url.searchParams.set("months", months || "");
    return url.toString();
  };

  const copyWithFallback = async (text: string) => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {}
    if (!copied) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
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

  const copyLink = async () => {
    await copyWithFallback(buildShareUrl());
  };

  const nativeShare = async () => {
    const url = buildShareUrl();
    const shareData = { title: 'คำนวณเงินผ่อน', text: 'ลองคำนวณยอดผ่อนของฉัน', url };
    if ((navigator as any).share) {
      try {
        await (navigator as any).share(shareData);
        setToast('แชร์แล้ว');
        setTimeout(() => setToast(null), 2000);
      } catch {
        // ผู้ใช้ยกเลิกการแชร์
      }
    } else {
      await copyWithFallback(url);
    }
  };

  return (
    <div className="space-y-4">
      {/* ผลลัพธ์หลัก - แสดงบนสุดเสมอ */}
      <div className="bg-gradient-to-r from-[#0A4174] to-[#0A4174]/90 rounded-2xl p-5 text-white shadow-lg">
        <div className="text-blue-100 text-sm mb-1">ยอดผ่อนต่อเดือน</div>
        <div className="text-3xl sm:text-4xl font-bold">
          ฿{formatNumber(result.monthlyPayment)}
        </div>
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
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              ราคาสินค้า (บาท)
            </label>
            <input
              type="text"
              value={formatInputValue(price)}
              onChange={(e) => {
                const rawValue = parseInputValue(e.target.value);
                setPrice(rawValue);
              }}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              เงินดาวน์ (บาท)
            </label>
            <input
              type="text"
              value={formatInputValue(downPayment)}
              onChange={(e) => {
                const rawValue = parseInputValue(e.target.value);
                setDownPayment(rawValue);
              }}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              ดอกเบี้ย (%/ปี)
            </label>
            <input
              type="number"
              inputMode="decimal"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              ระยะเวลา
            </label>
            <select
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="12">1 ปี</option>
              <option value="24">2 ปี</option>
              <option value="36">3 ปี</option>
              <option value="48">4 ปี</option>
              <option value="60">5 ปี</option>
              <option value="72">6 ปี</option>
              <option value="84">7 ปี</option>
            </select>
          </div>
        </div>
      </div>

      {/* รายละเอียดเพิ่มเติม */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-3">สรุปรายละเอียด</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">ราคาสินค้า</span>
            <span className="font-medium">฿{formatNumber(parseFloat(price) || 0)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">หักเงินดาวน์</span>
            <span className="font-medium text-red-500">-฿{formatNumber(parseFloat(downPayment) || 0)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">ยอดกู้</span>
            <span className="font-medium">฿{formatNumber(result.loanAmount)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">ดอกเบี้ย {months} เดือน</span>
            <span className="font-medium text-orange-500">+฿{formatNumber(result.totalInterest)}</span>
          </div>
          <div className="flex justify-between py-2 text-base">
            <span className="font-semibold text-gray-900">รวมที่ต้องผ่อน</span>
            <span className="font-bold text-green-600">฿{formatNumber(result.totalAmount)}</span>
          </div>
        </div>
        {/* Share Bar */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <button
            onClick={copyLink}
            className="w-full sm:w-auto px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium"
          >
            คัดลอกลิงก์ผลลัพธ์
          </button>
          <span className="text-xs text-gray-500 self-center">
            คัดลอกลิงก์นี้แล้วส่งให้คนอื่นได้เลย
          </span>
          {toast && (
            <span className="text-xs text-emerald-700 self-center">
              {toast}
            </span>
          )}
        </div>
        {/* Toggle Amortization Table (hidden by default) */}
        <div className="mt-4">
          <button
            onClick={() => setShowTable((v) => !v)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700"
            aria-expanded={showTable}
          >
            {showTable ? "ซ่อนตารางผ่อน" : `ดูตารางผ่อนรายงวด (${parseInt(months) || 1} งวด)`}
          </button>
        </div>
        {showTable && (
          <AmortizationTable
            loanAmount={result.loanAmount}
            months={parseInt(months) || 1}
            monthlyPayment={result.monthlyPayment}
            monthlyInterest={result.monthlyInterest}
          />
        )}
      </div>
    </div>
  );
}

type AmortizationProps = {
  loanAmount: number;
  months: number;
  monthlyPayment: number;
  monthlyInterest: number;
};

function AmortizationTable({ loanAmount, months, monthlyPayment, monthlyInterest }: AmortizationProps) {
  const rows = useMemo(() => {
    const list: { month: number; principal: number; interest: number; remaining: number; payment: number }[] = [];
    let remaining = loanAmount;
    for (let i = 1; i <= months; i++) {
      const interest = monthlyInterest;
      const principal = Math.min(monthlyPayment - interest, remaining);
      remaining = Math.max(0, remaining - principal);
      list.push({ month: i, principal, interest, remaining, payment: principal + interest });
    }
    // Adjust last row to ensure remaining zero due to rounding
    if (list.length > 0) {
      const last = list[list.length - 1];
      last.remaining = 0;
      list[list.length - 1] = last;
    }
    return list;
  }, [loanAmount, months, monthlyPayment, monthlyInterest]);

  const downloadCsv = () => {
    const header = ['Month','Payment','Principal','Interest','Remaining'];
    const lines = rows.map(r => [r.month, r.payment.toFixed(2), r.principal.toFixed(2), r.interest.toFixed(2), r.remaining.toFixed(2)].join(','));
    const csv = [header.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'amortization.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const f = (n: number) => new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900">ตารางผ่อนรายงวด</h4>
        <button onClick={downloadCsv} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium">Export CSV</button>
      </div>
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <table className="min-w-[640px] w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="text-left py-2">งวด</th>
              <th className="text-right py-2">ยอดผ่อน</th>
              <th className="text-right py-2">ต้น</th>
              <th className="text-right py-2">ดอก</th>
              <th className="text-right py-2">คงเหลือ</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {rows.map((r) => (
              <tr key={r.month} className="border-b border-gray-100">
                <td className="py-2">{r.month}</td>
                <td className="py-2 text-right">฿{f(r.payment)}</td>
                <td className="py-2 text-right">฿{f(r.principal)}</td>
                <td className="py-2 text-right">฿{f(r.interest)}</td>
                <td className="py-2 text-right">฿{f(r.remaining)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
