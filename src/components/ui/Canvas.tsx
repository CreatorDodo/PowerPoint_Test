import { useZoomStore } from '@/stores/useZoomStore';
import { useShapeStore } from '@/stores/useShapeStore';
import { useCanvasStore } from '@/stores/useCanvasStore';
import { Shape } from '@/components/Shape';
import { useRef, useEffect } from 'react';

const Canvas: React.FC = () => {
  const { shapes, updateShape } = useShapeStore();
  const { zoomLevel } = useZoomStore();
  const scale = zoomLevel / 100;
  const canvasWidth = 1600;
  const canvasHeight = 900;
  const canvasRef = useRef<HTMLDivElement>(null);
  const setCanvasRef = useCanvasStore((state) => state.setCanvasRef);

  useEffect(() => {
    setCanvasRef(canvasRef);
  }, [setCanvasRef]);

  const handleDrag = (id: number, newX: number, newY: number) => {
    updateShape(id, newX, newY);
  };

  return (
    <div className="absolute z-0 flex h-full w-full flex-col items-center justify-center overflow-auto pb-3">
      <div
        ref={canvasRef}
        className="relative rounded-lg border border-neutral-300 bg-white shadow-xl"
        style={{
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
          minWidth: `${canvasWidth}px`,
          minHeight: `${canvasHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        {shapes.map((shape) => (
          <Shape key={shape.id} shape={shape} scale={scale} onDrag={handleDrag} />
        ))}
      </div>
    </div>
  );
};

export default Canvas;
