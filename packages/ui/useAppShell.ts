import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
    resetScore: (score: number) => void;
}

export const useAppShell = create(
    persist<Store>(
      (set) => ({
        user: null,
        score: 0,
        setUser: (user) => set(() => ({ user })),
        addToScore: (amount) => set((state) => ({ score: state.score + amount})),
        resetScore: (score) => set((state) => ({score: state.score - score})),
    }), 
    {
        name: "app-shell",
    }  
    )  
);