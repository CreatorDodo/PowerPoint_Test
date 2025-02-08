import { create } from 'zustand';
import { Shape } from '@/types/shape.interface';
import { getRandomNumber, getRandomColor } from '@/utils/randomUtils';

interface ShapeStore {
  shapes: Shape[];
  addShape: (type: 'rectangle' | 'circle') => void;
  updateShape: (id: number, newX: number, newY: number) => void;
}

export const useShapeStore = create<ShapeStore>((set) => ({
  shapes: [],
  addShape: (type) => {
    const canvasWidth = 1600;
    const canvasHeight = 900;

    const id = Date.now();

    const randomX = getRandomNumber(0, canvasWidth + 100);
    const randomY = getRandomNumber(0, canvasHeight + 100);
    const common = {
      id,
      x: randomX,
      y: randomY,
      color: getRandomColor(),
      borderColor: getRandomColor(),
    };

    if (type === 'rectangle') {
      const width = getRandomNumber(50, 300);
      const height = getRandomNumber(50, 300);

      const newShape: Shape = {
        ...common,
        type,
        width,
        height,
      };
      set((state) => ({ shapes: [...state.shapes, newShape] }));
    } else {
      const radius = getRandomNumber(25, 200);

      const newShape: Shape = {
        ...common,
        type,
        radius,
      };
      set((state) => ({ shapes: [...state.shapes, newShape] }));
    }
  },
  updateShape: (id, newX, newY) => {
    set((state) => ({
      shapes: state.shapes.map((shape) => (shape.id === id ? { ...shape, x: newX, y: newY } : shape)),
    }));
  },
}));
