"use client";

import { useState, useMemo } from "react";
import { Wallet, TrendingDown, Receipt, Calendar } from "lucide-react";

export default function SalaryCalculator() {
  const [salary, setSalary] = useState<string>("25000");

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

  const calculateAnnualTax = (netIncome: number): number => {
    let tax = 0;
    
    for (const bracket of taxBrackets) {
      if (netIncome > bracket.min) {
        const taxableInBracket = Math.min(netIncome, bracket.max) - bracket.min;
        tax += taxableInBracket * bracket.rate;
      }
    }

    return tax;
  };

  const result = useMemo(() => {
    const salaryNum = parseFloat(salary.replace(/,/g, '')) || 0;
    
    // Social Security: 5% max 750 baht (base max 15,000)
    const socialSecurityBase = Math.min(salaryNum, 15000);
    const socialSecurity = socialSecurityBase * 0.05;

    // Annual income
    const annualIncome = salaryNum * 12;
    
    // Annual social security
    const annualSocialSecurity = socialSecurity * 12;

    // Deductions for tax calculation
    const personalDeduction = 60000; // ค่าลดหย่อนส่วนตัว
    const expenseDeduction = Math.min(annualIncome * 0.5, 100000); // ค่าใช้จ่าย 50% ไม่เกิน 100,000
    
    const totalDeductions = personalDeduction + expenseDeduction + annualSocialSecurity;
    
    // Net income for tax
    const netIncomeForTax = Math.max(0, annualIncome - totalDeductions);
    
    // Annual tax
    const annualTax = calculateAnnualTax(netIncomeForTax);
    
    // Monthly withholding tax (divided by 12)
    const monthlyTax = annualTax / 12;

    // Net salary
    const netSalary = salaryNum - socialSecurity - monthlyTax;

    // Total deductions
    const totalDeductionsMonthly = socialSecurity + monthlyTax;

    return {
      grossSalary: salaryNum,
      socialSecurity,
      monthlyTax,
      netSalary,
      annualIncome,
      annualTax,
      annualSocialSecurity,
      totalDeductionsMonthly,
    };
  }, [salary]);

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

  // Quick salary buttons
  const quickSalaries = [15000, 20000, 25000, 30000, 40000, 50000];

  return (
    <div className="space-y-4">
      {/* ผลลัพธ์หลัก - แสดงบนสุดเสมอ */}
      <div className="bg-gradient-to-r from-[#0A4174] to-[#0A4174]/90 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Wallet className="w-5 h-5" />
          <span className="text-blue-100 text-sm font-medium">เงินเข้าบัญชีจริง</span>
        </div>
        <div className="text-3xl sm:text-4xl font-bold mb-1">
          ฿{formatNumber(result.netSalary)}
        </div>
        <div className="text-blue-100 text-sm">ต่อเดือน</div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
          <div>
            <div className="text-blue-100 text-xs">หักทั้งหมด</div>
            <div className="font-semibold">-฿{formatNumber(result.totalDeductionsMonthly)}</div>
          </div>
          <div>
            <div className="text-blue-100 text-xs">สุทธิต่อปี</div>
            <div className="font-semibold">฿{formatNumber(result.netSalary * 12)}</div>
          </div>
        </div>
      </div>

      {/* ฟอร์มกรอกข้อมูล */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Receipt className="w-5 h-5 text-[#0A4174]" />
          กรอกเงินเดือน
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              เงินเดือน (บาท)
            </label>
            <input
              type="text"
              value={formatInputValue(salary)}
              onChange={(e) => {
                const rawValue = parseInputValue(e.target.value);
                setSalary(rawValue);
              }}
              placeholder="เช่น 25,000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-[#0A4174] focus:border-[#0A4174]"
            />
          </div>

          {/* Quick Select */}
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              เลือกเร็ว
            </label>
            <div className="flex flex-wrap gap-2">
              {quickSalaries.map((s) => (
                <button
                  key={s}
                  onClick={() => setSalary(s.toString())}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    parseInt(salary) === s
                      ? "bg-[#0A4174] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  ฿{formatNumber(s)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* รายละเอียดรายเดือน */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-orange-500" />
          สรุปรายเดือน
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">เงินเดือน</span>
            <span className="font-semibold text-gray-900">฿{formatNumber(result.grossSalary)}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 px-3 bg-orange-50 rounded-lg">
            <span className="text-orange-700">หัก ประกันสังคม (5%)</span>
            <span className="font-medium text-orange-700">-฿{formatNumber(result.socialSecurity)}</span>
          </div>
          
          <div className="flex justify-between items-center py-2 px-3 bg-purple-50 rounded-lg">
            <span className="text-purple-700">หัก ภาษี ณ ที่จ่าย</span>
            <span className="font-medium text-purple-700">-฿{formatNumber(result.monthlyTax)}</span>
          </div>
          
          <div className="flex justify-between items-center py-3 px-3 bg-[#0A4174]/5 rounded-lg border-2 border-[#0A4174]/20">
            <span className="font-semibold text-[#0A4174]">เงินสุทธิ</span>
            <span className="font-bold text-[#0A4174] text-lg">฿{formatNumber(result.netSalary)}</span>
          </div>
        </div>
      </div>

      {/* สรุปรายปี */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          สรุปรายปี
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">รายได้รวม</div>
            <div className="font-bold text-gray-900">฿{formatNumber(result.annualIncome)}</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-3 text-center">
            <div className="text-xs text-orange-600 mb-1">ประกันสังคมรวม</div>
            <div className="font-bold text-orange-700">฿{formatNumber(result.annualSocialSecurity)}</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-xs text-purple-600 mb-1">ภาษีรวม</div>
            <div className="font-bold text-purple-700">฿{formatNumber(result.annualTax)}</div>
          </div>
          <div className="bg-[#0A4174]/5 rounded-xl p-3 text-center">
            <div className="text-xs text-[#0A4174] mb-1">สุทธิทั้งปี</div>
            <div className="font-bold text-[#0A4174]">฿{formatNumber(result.netSalary * 12)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
