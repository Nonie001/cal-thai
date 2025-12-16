"use client";

import { useState, useMemo } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState<string>("600000");
  const [personalDeduction] = useState<number>(60000); // ค่าลดหย่อนส่วนตัว
  const [expenseDeduction, setExpenseDeduction] = useState<string>("100000"); // ค่าใช้จ่าย 50% ไม่เกิน 100,000
  const [socialSecurity, setSocialSecurity] = useState<string>("9000");
  const [withholdingTax, setWithholdingTax] = useState<string>("0");

  // Tax brackets for Thailand 2567
  const taxBrackets = [
    { min: 0, max: 150000, rate: 0 },
    { min: 150000, max: 300000, rate: 0.05 },
    { min: 300000, max: 500000, rate: 0.10 },
    { min: 500000, max: 750000, rate: 0.15 },
    { min: 750000, max: 1000000, rate: 0.20 },
    { min: 1000000, max: 2000000, rate: 0.25 },
    { min: 2000000, max: 5000000, rate: 0.30 },
    { min: 5000000, max: Infinity, rate: 0.35 },
  ];

  const calculateTax = (netIncome: number): number => {
    let tax = 0;
    let remainingIncome = netIncome;

    for (const bracket of taxBrackets) {
      if (remainingIncome <= 0) break;
      
      const taxableInThisBracket = Math.min(
        remainingIncome,
        bracket.max - bracket.min
      );
      
      if (netIncome > bracket.min) {
        const incomeInBracket = Math.min(
          netIncome - bracket.min,
          bracket.max - bracket.min
        );
        tax += Math.max(0, incomeInBracket) * bracket.rate;
      }
      
      remainingIncome -= taxableInThisBracket;
    }

    return tax;
  };

  const result = useMemo(() => {
    const incomeNum = parseFloat(income.replace(/,/g, '')) || 0;
    const expenseNum = Math.min(parseFloat(expenseDeduction.replace(/,/g, '')) || 0, 100000);
    const socialNum = Math.min(parseFloat(socialSecurity.replace(/,/g, '')) || 0, 9000);
    const withholdingNum = parseFloat(withholdingTax.replace(/,/g, '')) || 0;

    // Calculate total deductions
    const totalDeductions = personalDeduction + expenseNum + socialNum;
    
    // Net income
    const netIncome = Math.max(0, incomeNum - totalDeductions);
    
    // Calculate tax
    const taxAmount = calculateTax(netIncome);
    
    // Tax to pay or refund
    const taxDifference = taxAmount - withholdingNum;

    return {
      totalDeductions,
      netIncome,
      taxAmount,
      taxDifference,
      effectiveRate: incomeNum > 0 ? (taxAmount / incomeNum) * 100 : 0,
    };
  }, [income, expenseDeduction, socialSecurity, withholdingTax, personalDeduction]);

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
      <div className={`rounded-2xl p-5 text-white shadow-lg ${
        result.taxDifference > 0 
          ? "bg-gradient-to-r from-[#0A4174] to-[#0A4174]/90" 
          : result.taxDifference < 0 
            ? "bg-gradient-to-r from-emerald-500 to-emerald-600" 
            : "bg-gradient-to-r from-slate-500 to-slate-600"
      }`}>
        <div className="text-white/80 text-sm mb-1">
          {result.taxDifference > 0 ? "ภาษีที่ต้องจ่ายเพิ่ม" : result.taxDifference < 0 ? "ภาษีที่ขอคืนได้" : "พอดี ไม่ต้องจ่ายเพิ่ม"}
        </div>
        <div className="text-3xl sm:text-4xl font-bold">฿{formatNumber(Math.abs(result.taxDifference))}</div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm">
          <div>
            <span className="text-white/70">ภาษีทั้งปี</span>
            <span className="ml-2 font-semibold">฿{formatNumber(result.taxAmount)}</span>
          </div>
          <div>
            <span className="text-white/70">อัตราจริง</span>
            <span className="ml-2 font-semibold">{result.effectiveRate.toFixed(2)}%</span>
          </div>
        </div>
      </div>

      {/* ฟอร์มกรอกข้อมูล */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">รายได้ทั้งปี (บาท)</label>
            <input
              type="text"
              inputMode="numeric"
              value={formatInputValue(income)}
              onChange={(e) => setIncome(parseInputValue(e.target.value))}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-[#0A4174]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">ค่าใช้จ่าย (สูงสุด 100,000)</label>
              <input
                type="number"
                inputMode="numeric"
                value={expenseDeduction}
                onChange={(e) => setExpenseDeduction(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-base font-semibold focus:ring-2 focus:ring-[#0A4174]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">ประกันสังคม (สูงสุด 9,000)</label>
              <input
                type="number"
                inputMode="numeric"
                value={socialSecurity}
                onChange={(e) => setSocialSecurity(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-base font-semibold focus:ring-2 focus:ring-[#0A4174]"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">ภาษีที่หักไว้แล้ว (บาท)</label>
            <input
              type="text"
              inputMode="numeric"
              value={formatInputValue(withholdingTax)}
              onChange={(e) => setWithholdingTax(parseInputValue(e.target.value))}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-[#0A4174]"
            />
          </div>
        </div>
      </div>

      {/* รายละเอียด */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-3">สรุปการคำนวณ</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">รายได้ทั้งปี</span>
            <span className="font-medium">฿{formatNumber(parseFloat(income) || 0)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">หักค่าลดหย่อนรวม</span>
            <span className="font-medium text-[#0A4174]">-฿{formatNumber(result.totalDeductions)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">เงินได้สุทธิ</span>
            <span className="font-medium">฿{formatNumber(result.netIncome)}</span>
          </div>
          <div className="flex justify-between py-2 text-base">
            <span className="font-semibold text-gray-900">ภาษีที่ต้องจ่าย</span>
            <span className="font-bold text-[#0A4174]">฿{formatNumber(result.taxAmount)}</span>
          </div>
        </div>
        <div className="mt-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-600">
          <div className="font-medium mb-1">ค่าลดหย่อน:</div>
          <div>• ส่วนตัว ฿{formatNumber(60000)} • ค่าใช้จ่าย ฿{formatNumber(Math.min(parseFloat(expenseDeduction) || 0, 100000))} • ประกันสังคม ฿{formatNumber(Math.min(parseFloat(socialSecurity) || 0, 9000))}</div>
        </div>
      </div>
    </div>
  );
}
