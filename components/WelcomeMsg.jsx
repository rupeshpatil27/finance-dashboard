"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-2">
      <div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">
          Live Financial Sync
        </span>
      </div>

      <h2 className="text-3xl lg:text-4xl text-white font-bold tracking-tight">
        Welcome Back{isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-sm lg:text-base text-slate-400 font-medium tracking-wide">
        This your Financial Overview Report
      </p>
    </div>
  );
};
