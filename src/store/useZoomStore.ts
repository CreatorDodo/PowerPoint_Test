import { create } from 'zustand';

interface ZoomState {
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}

export const useZoomStore = create<ZoomState>((set) => ({
  zoomLevel: 62,
  setZoomLevel: (level) => set({ zoomLevel: level }),
}));
