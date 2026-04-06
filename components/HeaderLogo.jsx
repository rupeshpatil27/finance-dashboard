import { TrendingUp } from "lucide-react";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="hidden lg:flex items-center gap-2 font-bold text-xl tracking-tight"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-700 shadow-lg shadow-white/20">
        <TrendingUp size={28} />
      </div>
      <h2 className="text-2xl font-bold text-white">FinTrack</h2>
    </Link>
  );
};

