import { create } from 'zustand';

interface ZoomStore {
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export const useZoomStore = create<ZoomStore>((set) => ({
  zoomLevel: 62,
  setZoomLevel: (level) => set({ zoomLevel: level }),
}));
