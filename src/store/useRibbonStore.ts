import { create } from 'zustand';

interface RibbonState {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export const useRibbonStore = create<RibbonState>((set) => ({
  activeTab: -1,
  setActiveTab: (tab: number) => set({ activeTab: tab }),
}));
