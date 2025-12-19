import Link from "next/link";

interface CalculatorCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function CalculatorCard({
  href,
  icon,
  title,
  description,
  color,
}: CalculatorCardProps) {
  return (
    <Link href={href} aria-label={`${title} - เริ่มคำนวณ`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4174] rounded-2xl touch-manipulation">
      <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:border-[#0A4174]/20 hover:shadow-xl hover:shadow-[#0A4174]/5 active:scale-[0.98] transition-all duration-300 h-full overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4174]/0 via-[#0A4174]/0 to-blue-50/0 group-hover:to-blue-50/50 transition-all duration-500 pointer-events-none" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute -inset-full group-hover:inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-1000" />
        </div>
        
        <div className="relative z-10">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 ${color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-md`}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 [&>svg]:w-full [&>svg]:h-full">
              {icon}
            </div>
          </div>
          
          <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-2.5 group-hover:text-[#0A4174] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 group-hover:text-gray-600 transition-colors">
            {description}
          </p>
          
          {/* Arrow indicator */}
          <div className="mt-3 sm:mt-4 flex items-center text-[#0A4174] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transform translate-x-0 sm:group-hover:translate-x-1 transition-all duration-300">
            <span className="text-xs sm:text-sm font-medium">เริ่มคำนวณ</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
