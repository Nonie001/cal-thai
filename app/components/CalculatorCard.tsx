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
    <Link href={href} className="group">
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg active:scale-[0.98] transition-all duration-300 h-full">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 ${color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 [&>svg]:w-full [&>svg]:h-full">
            {icon}
          </div>
        </div>
        <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
