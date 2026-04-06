import { UserButton } from "@clerk/nextjs";
import { Navigation } from "./Navigation";
import { WelcomeMsg } from "./WelcomeMsg";
import { Filters } from "./Filters";
import { RoleSwitcher } from "./RoleSwitcher";
import { HeaderLogo } from "./HeaderLogo";

export const Header = () => {
  return (
    <header className="relative bg-linear-to-b from-slate-900 to-slate-800 px-4 py-6 lg:px-14 pb-36 border-b border-slate-700/50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="w-full flex items-center justify-between mb-12">
          <HeaderLogo />

          <div className="hidden lg:flex flex-1 justify-center">
            <Navigation />
          </div>

          <div className="flex items-center gap-x-4">
            <RoleSwitcher />
            <UserButton afterSwitchSessionUrl="/" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-y-6">
          <WelcomeMsg />
          <Filters />
        </div>
      </div>
    </header>
  );
};
