import { create } from "zustand";

export const useRole = create((set) => ({
  role: "admin",
  setRole: (role) => set({ role }),
}));