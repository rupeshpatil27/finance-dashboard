"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { NavButton } from "./NavButton";
import { cn } from "@/lib/utils";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
];
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const isMobile = useMedia("(max-width:1024px)", false);

  const onClick = (href) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-y-2 pt-6 mt-5">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathName ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="flex items-center gap-x-2 bg-slate-800/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
      {routes.map((route) => {
        const isActive = pathName === route.href;

        return (
          <Button
            key={route.href}
            onClick={() => router.push(route.href)}
            variant="ghost"
            className={cn(
              "relative px-5 h-9 font-medium text-sm transition-colors rounded-full",
              isActive
                ? "text-white bg-slate-700/50 hover:bg-slate-700/70"
                : "text-slate-400 hover:text-white hover:bg-slate-700/30",
            )}
          >
            {route.label}
            {isActive && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.5)]" />
            )}
          </Button>
        );
      })}
    </nav>
  );
};
