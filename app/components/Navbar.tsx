"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Calculator,
  Percent,
  Receipt,
  Wallet,
  Home,
  FileText,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/installment", label: "เงินผ่อน", icon: Calculator },
    { href: "/interest", label: "ดอกเบี้ย", icon: Percent },
    { href: "/tax", label: "ภาษี", icon: Receipt },
    { href: "/salary", label: "เงินเดือน", icon: Wallet },
    { href: "/loan", label: "สินเชื่อ", icon: Home },
    { href: "/vat", label: "VAT", icon: FileText },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`bg-[#0A4174] backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "border-[#0A4174]/30 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md shadow-[#0A4174]/20 group-hover:shadow-lg group-hover:shadow-[#0A4174]/30 transition-all border-2 border-[#0A4174]/10">
                <img src="/logo.png" alt="คำนวณเงิน" className="w-9 h-9 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white leading-tight">คำนวณเงิน</span>
                <span className="text-[10px] text-white/70 leading-tight hidden sm:block">
                  เครื่องมือการเงินออนไลน์
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile: Tools Dropdown Button */}
            <div className="hidden md:flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <Calculator className="w-4 h-4" />
                เครื่องมือ
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Tablet Dropdown Menu */}
        {isOpen && (
          <div className="hidden md:block lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="grid grid-cols-3 gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "text-[#0A4174] bg-[#0A4174]/10"
                          : "text-gray-600 hover:text-[#0A4174] hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="p-4 space-y-1">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mb-2">
                เครื่องมือคำนวณ
              </p>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                      isActive
                        ? "text-[#0A4174] bg-[#0A4174]/10"
                        : "text-gray-700 hover:text-[#0A4174] hover:bg-gray-50 active:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-[#0A4174]/10" : "bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="p-4 border-t border-gray-100">
              <Link
                href="/about"
                className="block px-4 py-3 text-sm text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50"
              >
                เกี่ยวกับเรา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
