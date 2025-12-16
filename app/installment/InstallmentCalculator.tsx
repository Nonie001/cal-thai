"use client";

import { useState, useMemo } from "react";

export default function InstallmentCalculator() {
  const [price, setPrice] = useState<string>("1000000");
  const [downPayment, setDownPayment] = useState<string>("200000");
  const [interestRate, setInterestRate] = useState<string>("3.5");
  const [months, setMonths] = useState<string>("60");

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

    return {
      loanAmount,
      totalInterest,
      totalAmount,
      monthlyPayment,
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
      </div>
    </div>
  );
}
