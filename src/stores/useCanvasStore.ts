import { create } from 'zustand';

interface CanvasStore {
  canvasRef: React.RefObject<HTMLDivElement> | null;
  setCanvasRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  canvasRef: null,
  setCanvasRef: (ref) => set({ canvasRef: ref }),
}));
