"use client";

import { useState, useMemo } from "react";
import { Calculator, Plus, Minus, Receipt, BarChart3 } from "lucide-react";

type CalculationMode = "addVat" | "removeVat";

export default function VatCalculator() {
  const [amount, setAmount] = useState<string>("1000");
  const [mode, setMode] = useState<CalculationMode>("addVat");
  const VAT_RATE = 0.07;

  const result = useMemo(() => {
    const amountNum = parseFloat(amount.replace(/,/g, '')) || 0;

    if (mode === "addVat") {
      // Input is price before VAT
      const vatAmount = amountNum * VAT_RATE;
      const priceWithVat = amountNum + vatAmount;
      return {
        priceBeforeVat: amountNum,
        vatAmount,
        priceWithVat,
      };
    } else {
      // Input is price including VAT
      const priceBeforeVat = amountNum / (1 + VAT_RATE);
      const vatAmount = amountNum - priceBeforeVat;
      return {
        priceBeforeVat,
        vatAmount,
        priceWithVat: amountNum,
      };
    }
  }, [amount, mode]);

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

  // Quick amounts
  const quickAmounts = [100, 500, 1000, 5000, 10000, 50000];

  return (
    <div className="space-y-4">
      {/* ผลลัพธ์หลัก - แสดงบนสุดเสมอ */}
      <div className="bg-gradient-to-r from-[#0A4174] to-[#0A4174]/90 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Receipt className="w-5 h-5" />
          <span className="text-blue-100 text-sm font-medium">
            VAT 7% - {mode === "addVat" ? "บวก VAT" : "แยก VAT"}
          </span>
        </div>
        
        {/* แสดงผลลัพธ์หลักตาม mode */}
        <div className="text-3xl sm:text-4xl font-bold mb-1">
          ฿{formatNumber(mode === "addVat" ? result.priceWithVat : result.priceBeforeVat)}
        </div>
        <div className="text-rose-100 text-sm">
          {mode === "addVat" ? "ราคารวม VAT" : "ราคาไม่รวม VAT"}
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
          <div>
            <div className="text-blue-100 text-xs">VAT 7%</div>
            <div className="font-semibold">฿{formatNumber(result.vatAmount)}</div>
          </div>
          <div>
            <div className="text-blue-100 text-xs">
              {mode === "addVat" ? "ราคาเดิม" : "รวม VAT"}
            </div>
            <div className="font-semibold">
              ฿{formatNumber(mode === "addVat" ? result.priceBeforeVat : result.priceWithVat)}
            </div>
          </div>
        </div>
      </div>

      {/* ฟอร์มกรอกข้อมูล */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#0A4174]" />
          เลือกวิธีคำนวณ VAT
        </h2>
        
        <div className="space-y-4">
          {/* Mode Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              วิธีคำนวณ
            </label>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setMode("addVat")}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                  mode === "addVat"
                    ? "bg-[#0A4174] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  <div>
                    <div className="font-medium">บวก VAT เข้าไป</div>
                    <div className={`text-xs ${mode === "addVat" ? "text-blue-200" : "text-gray-500"}`}>
                      มีราคาไม่รวม VAT → ต้องการราคารวม VAT
                    </div>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setMode("removeVat")}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                  mode === "removeVat"
                    ? "bg-[#0A4174] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Minus className="w-5 h-5" />
                  <div>
                    <div className="font-medium">แยก VAT ออก</div>
                    <div className={`text-xs ${mode === "removeVat" ? "text-blue-200" : "text-gray-500"}`}>
                      มีราคารวม VAT → ต้องการแยกดูราคาจริงกับ VAT
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {mode === "addVat" ? "ราคาไม่รวม VAT (บาท)" : "ราคารวม VAT แล้ว (บาท)"}
            </label>
            <input
              type="text"
              value={formatInputValue(amount)}
              onChange={(e) => {
                const rawValue = parseInputValue(e.target.value);
                setAmount(rawValue);
              }}
              placeholder="เช่น 1,000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-[#0A4174] focus:border-[#0A4174]"
            />
          </div>

          {/* Quick Select */}
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              เลือกเร็ว
            </label>
            <div className="flex flex-wrap gap-2">
              {quickAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a.toString())}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    parseInt(amount) === a
                      ? "bg-[#0A4174] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  ฿{formatNumber(a)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* รายละเอียดราคา */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#0A4174]" />
          รายละเอียดราคา
        </h3>
        
        <div className="space-y-3">
          <div className={`rounded-xl p-4 ${mode === "removeVat" ? "bg-[#0A4174]/5 border-2 border-[#0A4174]/20" : "bg-gray-50"}`}>
            <div className={`text-sm mb-1 ${mode === "removeVat" ? "text-[#0A4174]" : "text-gray-500"}`}>
              ราคาไม่รวม VAT
            </div>
            <div className={`text-2xl font-bold ${mode === "removeVat" ? "text-[#0A4174]" : "text-gray-700"}`}>
              ฿{formatNumber(result.priceBeforeVat)}
            </div>
          </div>

          <div className="bg-[#0A4174]/5 rounded-xl p-4 border-2 border-[#0A4174]/20">
            <div className="text-sm text-[#0A4174] mb-1">VAT 7%</div>
            <div className="text-2xl font-bold text-[#0A4174]">
              ฿{formatNumber(result.vatAmount)}
            </div>
          </div>

          <div className={`rounded-xl p-4 ${mode === "addVat" ? "bg-emerald-50 border-2 border-emerald-200" : "bg-gray-50"}`}>
            <div className={`text-sm mb-1 ${mode === "addVat" ? "text-emerald-600" : "text-gray-500"}`}>
              ราคารวม VAT
            </div>
            <div className={`text-2xl font-bold ${mode === "addVat" ? "text-emerald-700" : "text-gray-700"}`}>
              ฿{formatNumber(result.priceWithVat)}
            </div>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="bg-gray-50 rounded-xl p-4 mt-4">
          <h4 className="font-medium text-gray-900 mb-3">แสดงสัดส่วน</h4>
          <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-[#0A4174] transition-all"
              style={{ width: `${(result.priceBeforeVat / result.priceWithVat) * 100}%` }}
            />
            <div 
              className="absolute right-0 top-0 h-full bg-[#0A4174]/60 transition-all"
              style={{ width: `${(result.vatAmount / result.priceWithVat) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-[#0A4174] rounded"></span>
              ราคาจริง {((result.priceBeforeVat / result.priceWithVat) * 100).toFixed(1)}%
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-[#0A4174]/60 rounded"></span>
              VAT {((result.vatAmount / result.priceWithVat) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
