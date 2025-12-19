"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Home, Car, Calculator, TrendingUp, AlertTriangle } from "lucide-react";

type LoanType = "home" | "car";

export default function LoanCalculator() {
  const [loanType, setLoanType] = useState<LoanType>("home");
  const [loanAmount, setLoanAmount] = useState<string>("3000000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [years, setYears] = useState<string>("25");
  const [toast, setToast] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize from query
  useEffect(() => {
    const lt = searchParams.get("loanType");
    const la = searchParams.get("loanAmount");
    const ir = searchParams.get("interestRate");
    const ys = searchParams.get("years");
    if (lt === "home" || lt === "car") setLoanType(lt);
    if (la) setLoanAmount(la);
    if (ir) setInterestRate(ir);
    if (ys) setYears(ys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL when inputs change
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("loanType", loanType);
    params.set("loanAmount", (parseFloat(loanAmount.replace(/,/g, "")) || 0).toString());
    params.set("interestRate", (parseFloat(interestRate) || 0).toString());
    params.set("years", (parseInt(years) || 1).toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [loanType, loanAmount, interestRate, years, router, pathname]);

  const buildShareUrl = () => {
    const params = new URLSearchParams();
    params.set("loanType", loanType);
    params.set("loanAmount", (parseFloat(loanAmount.replace(/,/g, "")) || 0).toString());
    params.set("interestRate", (parseFloat(interestRate) || 0).toString());
    params.set("years", (parseInt(years) || 1).toString());
    return `${window.location.origin}${pathname}?${params.toString()}`;
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

  // แชร์แบบเนทีฟถูกปิดเพื่อให้เหลือเฉพาะการคัดลอกลิงก์

  const result = useMemo(() => {
    const principal = parseFloat(loanAmount.replace(/,/g, '')) || 0;
    const annualRate = parseFloat(interestRate) || 0;
    const loanYears = parseInt(years) || 1;
    const months = loanYears * 12;
    const monthlyRate = annualRate / 100 / 12;

    if (monthlyRate === 0 || principal === 0) {
      return {
        monthlyPayment: principal / months,
        totalInterest: 0,
        totalPayment: principal,
        interestRatio: 0,
      };
    }

    // PMT formula for reducing balance
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    const interestRatio = (totalInterest / principal) * 100;

    return {
      monthlyPayment,
      totalInterest,
      totalPayment,
      interestRatio,
    };
  }, [loanAmount, interestRate, years]);

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

  const formatCompact = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)} ล้าน`;
    }
    return formatNumber(num);
  };

  // Preset loan amounts
  const homeLoanPresets = [1000000, 2000000, 3000000, 5000000];
  const carLoanPresets = [300000, 500000, 800000, 1000000];
  const presets = loanType === "home" ? homeLoanPresets : carLoanPresets;

  // Preset years
  const homeYearPresets = [15, 20, 25, 30];
  const carYearPresets = [4, 5, 6, 7];
  const yearPresets = loanType === "home" ? homeYearPresets : carYearPresets;

  // Handle loan type change
  const handleLoanTypeChange = (type: LoanType) => {
    setLoanType(type);
    if (type === "home") {
      setLoanAmount("3000000");
      setInterestRate("6.5");
      setYears("25");
    } else {
      setLoanAmount("800000");
      setInterestRate("3.5");
      setYears("5");
    }
  };

  return (
    <div className="space-y-4">
      {/* ผลลัพธ์หลัก - แสดงบนสุดเสมอ */}
      <div className={`bg-gradient-to-r ${loanType === "home" ? "from-[#0A4174] to-[#0A4174]/90" : "from-[#0A4174]/80 to-[#0A4174]"} rounded-2xl p-5 text-white shadow-lg`}>
        <div className="flex items-center gap-2 mb-3">
          {loanType === "home" ? <Home className="w-5 h-5" /> : <Car className="w-5 h-5" />}
          <span className="text-white/90 text-sm font-medium">
            {loanType === "home" ? "สินเชื่อบ้าน" : "สินเชื่อรถ"}
          </span>
        </div>
        
        <div className="text-3xl sm:text-4xl font-bold mb-1">
          ฿{formatNumber(result.monthlyPayment)}
        </div>
        <div className="text-white/90 text-sm">ผ่อนต่อเดือน</div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
          <div>
            <div className="text-white/80 text-xs">ดอกเบี้ยรวม</div>
            <div className="font-semibold">฿{formatCompact(result.totalInterest)}</div>
          </div>
          <div>
            <div className="text-white/80 text-xs">ชำระรวม</div>
            <div className="font-semibold">฿{formatCompact(result.totalPayment)}</div>
          </div>
        </div>
      </div>

      {/* ฟอร์มกรอกข้อมูล */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#0A4174]" />
          กรอกข้อมูลสินเชื่อ
        </h2>
        
        <div className="space-y-4">
          {/* Loan Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ประเภทสินเชื่อ
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleLoanTypeChange("home")}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                  loanType === "home"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Home className="w-5 h-5" />
                สินเชื่อบ้าน
              </button>
              <button
                onClick={() => handleLoanTypeChange("car")}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                  loanType === "car"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Car className="w-5 h-5" />
                สินเชื่อรถ
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              วงเงินกู้ (บาท)
            </label>
            <input
              type="text"
              value={formatInputValue(loanAmount)}
              onChange={(e) => {
                const rawValue = parseInputValue(e.target.value);
                setLoanAmount(rawValue);
              }}
              placeholder="เช่น 3,000,000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {presets.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setLoanAmount(amount.toString())}
                  className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    parseInt(loanAmount) === amount
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {formatCompact(amount)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              อัตราดอกเบี้ย (% ต่อปี)
            </label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder={loanType === "home" ? "เช่น 6.5" : "เช่น 3.5"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              {loanType === "home" 
                ? "สินเชื่อบ้านปกติ 5-7% ต่อปี" 
                : "สินเชื่อรถปกติ 2-4% ต่อปี"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ระยะเวลากู้ (ปี)
            </label>
            <input
              type="text"
              value={years}
              onChange={(e) => {
                const rawValue = parseInputValue(e.target.value);
                setYears(rawValue);
              }}
              placeholder={loanType === "home" ? "เช่น 25" : "เช่น 5"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex gap-2 mt-2">
              {yearPresets.map((y) => (
                <button
                  key={y}
                  onClick={() => setYears(y.toString())}
                  className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    parseInt(years) === y
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {y} ปี
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* รายละเอียดเพิ่มเติม */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#0A4174]" />
          รายละเอียดเพิ่มเติม
        </h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">วงเงินกู้</div>
            <div className="font-bold text-gray-900">฿{formatCompact(parseFloat(loanAmount) || 0)}</div>
          </div>
          <div className="bg-red-50 rounded-xl p-3 text-center">
            <div className="text-xs text-red-600 mb-1">ดอกเบี้ยรวม</div>
            <div className="font-bold text-red-700">฿{formatCompact(result.totalInterest)}</div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <div className="font-semibold text-amber-800 mb-1">
                สัดส่วนดอกเบี้ย: {result.interestRatio.toFixed(1)}% ของเงินต้น
              </div>
              <div className="text-amber-700">
                {result.interestRatio > 100 
                  ? "ดอกเบี้ยรวมมากกว่าเงินต้น ลองเพิ่มเงินดาวน์หรือลดระยะเวลากู้" 
                  : `กู้ 1 บาท จ่ายดอกเบี้ย ${(result.interestRatio / 100).toFixed(2)} บาท`}
              </div>
            </div>
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
            <span className="text-xs text-emerald-700 self-center">{toast}</span>
          )}
        </div>
        {/* Toggle Amortization Table (hidden by default) */}
        <div className="mt-4">
          <button
            onClick={() => setShowTable((v) => !v)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700"
            aria-expanded={showTable}
          >
            {showTable ? "ซ่อนตารางผ่อน" : `ดูตารางผ่อนแบบลดต้นลดดอก (${(parseInt(years) || 1) * 12} งวด)`}
          </button>
        </div>
        {showTable && (
          <AmortizationTable
            principal={parseFloat(loanAmount.replace(/,/g, '')) || 0}
            months={(parseInt(years) || 1) * 12}
            monthlyPayment={result.monthlyPayment}
            monthlyRate={(parseFloat(interestRate) || 0) / 100 / 12}
          />
        )}
      </div>
    </div>
  );
}

type AmortizationProps = {
  principal: number;
  months: number;
  monthlyPayment: number;
  monthlyRate: number;
};

function AmortizationTable({ principal, months, monthlyPayment, monthlyRate }: AmortizationProps) {
  const rows = useMemo(() => {
    const list: { month: number; payment: number; principal: number; interest: number; remaining: number }[] = [];
    let remaining = principal;
    for (let i = 1; i <= months; i++) {
      const interest = monthlyRate > 0 ? remaining * monthlyRate : 0;
      const principalPay = Math.min(monthlyPayment - interest, remaining);
      remaining = Math.max(0, remaining - principalPay);
      list.push({ month: i, payment: principalPay + interest, principal: principalPay, interest, remaining });
    }
    if (list.length > 0) {
      list[list.length - 1].remaining = 0;
    }
    return list;
  }, [principal, months, monthlyPayment, monthlyRate]);

  const downloadCsv = () => {
    const header = ['Month','Payment','Principal','Interest','Remaining'];
    const lines = rows.map(r => [r.month, r.payment.toFixed(2), r.principal.toFixed(2), r.interest.toFixed(2), r.remaining.toFixed(2)].join(','));
    const csv = [header.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loan-amortization.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const f = (n: number) => new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900">ตารางผ่อนแบบลดต้นลดดอก</h4>
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
