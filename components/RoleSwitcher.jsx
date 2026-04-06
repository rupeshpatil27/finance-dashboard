"use client";

import { useRole } from "@/features/role/hooks/use-role";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useMountedState } from "react-use";
import { Skeleton } from "./ui/skeleton";

export const RoleSwitcher = () => {
  const isMounted = useMountedState();

  const { role, setRole } = useRole();

  if (!isMounted) return <Skeleton className="w-32.5 h-9 rounded-md" />;

  return (
    <div className="flex items-center gap-x-2">
      <Select value={role} onValueChange={setRole}>
        <SelectTrigger className="w-32.5 h-9 rounded-md px-3 font-medium bg-white/10 hover:bg-white/20 hover:text-white border-none focus:ring-offset-0 focus:ring-transparent outline-none text-white focus:bg-white/30 transition">
          <SelectValue placeholder="Select Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">
            <div className="flex items-center">
              <ShieldCheck className="size-4 mr-2 text-emerald-500" />
              Admin
            </div>
          </SelectItem>
          <SelectItem value="viewer">
            <div className="flex items-center">
              <ShieldAlert className="size-4 mr-2 text-rose-500" />
              Viewer
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
