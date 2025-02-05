import { create } from 'zustand';

interface RibbonStore {
  activeTab: number;
  isPinned: boolean;
  isTemporaryVisible: boolean;
  setActiveTab: (tab: number) => void;
  togglePinned: () => void;
  setTemporaryVisible: (visible: boolean) => void;
}

export const useRibbonStore = create<RibbonStore>((set) => ({
  activeTab: -1,
  isPinned: true,
  isTemporaryVisible: false,
  setActiveTab: (tab) => set({ activeTab: tab }),
  togglePinned: () => set((state) => ({ isPinned: !state.isPinned })),
  setTemporaryVisible: (visible) => set({ isTemporaryVisible: visible }),
}));
