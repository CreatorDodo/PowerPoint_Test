import { useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useZoomStore } from '@/stores/useZoomStore';

const ZoomController: React.FC = () => {
  const { zoomLevel, setZoomLevel } = useZoomStore();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = -e.deltaY * 0.0005;
        const newZoom = Math.min(Math.max(10, zoomLevel + delta * zoomLevel), 100);
        setZoomLevel(Math.round(newZoom));
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [zoomLevel, setZoomLevel]);

  const adjustZoom = (amount: number) => {
    setZoomLevel(Math.min(Math.max(10, zoomLevel + amount), 100));
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 10), 100);
    setZoomLevel(Math.round(percent));
  };

  return (
    <div className="flex h-[22px] flex-row items-center gap-2">
      <div className="relative flex h-[22px] flex-row items-center gap-1.5">
        <button
          onClick={() => adjustZoom(-2)}
          className="flex h-[22px] items-center justify-center px-3 outline-none hover:bg-zinc-200/80"
        >
          <Minus className="h-3 w-3 stroke-zinc-500" />
        </button>

        <span className="relative flex h-4 w-24 items-center">
          <span
            className="relative flex h-1 w-24 flex-1 overflow-hidden rounded-full bg-zinc-300"
            onClick={handleSliderClick}
          >
            <span
              className="absolute h-1 rounded-full bg-zinc-400"
              style={{
                left: 0,
                right: `${100 - zoomLevel}%`,
              }}
            />
          </span>
          <span
            className="absolute"
            style={{
              left: `${zoomLevel}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <span
              role="slider"
              tabIndex={0}
              aria-valuemin={10}
              aria-valuemax={100}
              aria-valuenow={zoomLevel}
              aria-orientation="horizontal"
              className="block h-3 w-3 rounded-full bg-zinc-500 outline-none"
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={(e) => {
                setIsDragging(true);
                const parent = e.currentTarget.parentElement?.parentElement;
                if (!parent) return;

                const handleMouseMove = (e: MouseEvent) => {
                  const rect = parent.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percent = Math.min(Math.max((x / rect.width) * 100, 10), 100);
                  setZoomLevel(Math.round(percent));
                };

                const handleMouseUp = () => {
                  setIsDragging(false);
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            />
          </span>
        </span>

        <button
          onClick={() => adjustZoom(2)}
          className="flex h-[22px] items-center justify-center px-3 outline-none hover:bg-zinc-200/80"
        >
          <Plus className="h-3 w-3 stroke-zinc-500" />
        </button>
      </div>
      <div className="w-10 select-none text-center text-xs font-medium tracking-tight text-zinc-500">{zoomLevel}%</div>
    </div>
  );
};

export default ZoomController;
