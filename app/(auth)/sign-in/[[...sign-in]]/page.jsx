import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import {
  TrendingUp,
  ShieldCheck,
  PieChart,
  Loader2,
  KeyRound,
} from "lucide-react";

export default function SignInPage() {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2 bg-slate-50 overflow-hidden">
      <div className="hidden h-full relative md:flex flex-col justify-between overflow-hidden bg-linear-to-b from-slate-900 to-slate-800 p-12 text-white border-r border-slate-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex items-center gap-3 font-bold text-2xl tracking-tight animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/20 border border-blue-400/20">
            <TrendingUp className="text-white w-5 h-5" strokeWidth={3} />
          </div>
          <span>FinTrack</span>
        </div>

        <div className="relative z-10 max-w-md space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter">
            Total Clarity Over Your
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              {" "}
              Spend.
            </span>
          </h1>
          <p className="text-lg text-slate-400">
            Automate expense tracking, visualize burn rate, and make data-driven
            decisions with FinTrack's financial infrastructure.
          </p>

          <div className="space-y-5 pt-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="text-blue-400" size={20} />
              </div>
              <span className="text-sm font-medium tracking-wide">
                SOC2 Compliant Bank-grade encryption
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <PieChart className="text-cyan-400" size={20} />
              </div>
              <span className="text-sm font-medium tracking-wide">
                Real-time multi-currency syncing
              </span>
            </div>
          </div>
        </div>

        <p className="relative z-10 text-sm text-slate-500 font-medium tracking-wide">
          © 2026 FinTrack Inc. Trusted by fast-growing startups.
        </p>
      </div>

      <div className="flex w-full flex-col items-center p-8 lg:p-12 relative overflow-y-auto">
        <div className="mb-10 flex flex-col items-center gap-3 md:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/20">
            <TrendingUp className="text-white w-6 h-6" strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">FinTrack</h2>
        </div>

        <div className="w-full max-w-md flex flex-col items-center justify-center">
          <ClerkLoading>
            <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-500">
              <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
              <p className="text-sm text-slate-500 font-medium tracking-wide animate-pulse">
                Securing enterprise connection...
              </p>
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            <div className="w-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              <div className="relative rounded-xl border border-blue-200 bg-blue-50/50 p-5 shadow-sm overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100/80 text-blue-600 shrink-0">
                    <KeyRound size={20} />
                  </div>
                  <div className="space-y-1 w-full">
                    <h4 className="font-semibold text-slate-900">
                      Demo Account
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      Skip the setup! Use this pre-populated account to explore
                      the dashboard, charts, and data grids immediately.
                    </p>

                    <div className="space-y-2 bg-white rounded-lg p-3 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Email
                        </span>
                        <span className="text-sm font-mono font-medium text-slate-900 select-all">
                          test1@gmail.com
                        </span>
                      </div>
                      <div className="h-px w-full bg-slate-100" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Password
                        </span>
                        <span className="text-sm font-mono font-medium text-slate-900 select-all">
                          test1@user
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center md:text-left mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Sign In
              </h2>
              <p className="text-slate-500 mt-2 font-medium">
                Welcome back, Please enter your details.
              </p>
            </div>

            <div className="w-full animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
              <SignIn
                path="/sign-in"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-none p-0 bg-transparent",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    formButtonPrimary:
                      "bg-blue-600 hover:bg-blue-700 text-sm font-medium normal-case py-3 shadow-md transition-all",
                    socialButtonsBlockButton:
                      "border-slate-200 hover:bg-slate-100 text-slate-600 font-medium transition-all",
                    footerActionLink:
                      "text-blue-600 hover:text-blue-700 font-semibold",
                    formFieldInput:
                      "rounded-lg border-slate-200 focus:border-blue-600 focus:ring-blue-600 bg-white",
                    formFieldLabel: "text-slate-700 font-medium",
                  },
                }}
              />
            </div>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
