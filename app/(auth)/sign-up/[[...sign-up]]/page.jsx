import { SignUp, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { TrendingUp, Rocket, Zap, Loader2 } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="grid h-screen overflow-hidden grid-cols-1 md:grid-cols-2 bg-slate-50">
      <div className="hidden relative md:flex h-full flex-col justify-between overflow-hidden bg-linear-to-b from-slate-900 to-slate-800 p-12 text-white border-r border-slate-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex items-center gap-3 font-bold text-2xl tracking-tight animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/20 border border-blue-400/20">
            <TrendingUp className="text-white w-5 h-5" strokeWidth={3} />
          </div>
          <span>FinTrack</span>
        </div>

        <div className="relative z-10 max-w-md space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-white">
            Start Your Journey to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Financial Control.
            </span>
          </h1>
          <p className="text-lg text-slate-400">
            Join thousands of modern startups who have transformed their
            financial operations with real-time insights and automated syncing.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                <Rocket className="text-blue-400" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white tracking-wide">
                  Instant Setup
                </h4>
                <p className="text-sm text-slate-400 mt-1">
                  Connect your corporate accounts and generate your first
                  dashboard in under 2 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                <Zap className="text-cyan-400" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white tracking-wide">
                  Automated Reconciliation
                </h4>
                <p className="text-sm text-slate-400 mt-1">
                  Our engine automatically categorizes your spend based on
                  machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="relative z-10 text-sm text-slate-500 font-medium tracking-wide">
          No credit card required to start your 14-day trial.
        </p>
      </div>

      <div className="flex h-full flex-col items-center p-8 lg:p-12 relative overflow-y-auto">
        <div className="mb-10 flex flex-col items-center gap-3 md:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/20">
            <TrendingUp className="text-white w-6 h-6" strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">FinTrack</h2>
        </div>

        <div className="w-full max-w-md flex flex-col items-center justify-center py-10 lg:py-0">
          <ClerkLoading>
            <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-500">
              <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
              <p className="text-sm text-slate-500 font-medium tracking-wide animate-pulse">
                Preparing your workspace...
              </p>
            </div>
          </ClerkLoading>

          <ClerkLoaded>
            <div className="w-full text-center md:text-left mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Create Account
              </h2>
              <p className="text-slate-500 mt-2 font-medium">
                Enter your details to get started with your 14-day free trial.
              </p>
            </div>

            <div className="w-full animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
              <SignUp
                path="/sign-up"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-none p-0 bg-transparent",
                    header: "hidden",
                    formButtonPrimary:
                      "bg-blue-600 hover:bg-blue-700 text-sm font-medium normal-case py-3 shadow-md transition-all",
                    socialButtonsBlockButton:
                      "border-slate-200 hover:bg-slate-100 text-slate-600 font-medium transition-all py-2.5",
                    footerActionLink:
                      "text-blue-600 hover:text-blue-700 font-semibold",
                    formFieldInput:
                      "rounded-lg border-slate-200 focus:border-blue-600 focus:ring-blue-600 bg-white",
                    formFieldLabel: "text-slate-700 font-medium",
                    dividerLine: "bg-slate-200",
                    dividerText: "text-slate-400 text-xs font-medium uppercase",
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
