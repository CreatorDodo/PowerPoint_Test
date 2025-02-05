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

    const randomX = getRandomNumber(0, canvasWidth);
    const randomY = getRandomNumber(0, canvasHeight);
    const common = {
      id,
      // 좌상단 기준 저장: Canvas에서는 center로 보정
      x: randomX,
      y: randomY,
      color: getRandomColor(),
      borderColor: getRandomColor(),
    };
    // 캔버스 크기 (SlidePage/Canvas에서 사용한 것과 동일)

    if (type === 'rectangle') {
      // 도형 크기 먼저 생성
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
      // 원의 경우, 반지름 먼저 생성
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
