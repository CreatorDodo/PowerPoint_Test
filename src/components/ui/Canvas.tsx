import { useZoomStore } from '@/stores/useZoomStore';

const Canvas: React.FC = () => {
  const { zoomLevel } = useZoomStore();
  const scale = zoomLevel / 100;

  return (
    <div className="absolute z-0 flex h-full w-full flex-col items-center justify-center overflow-auto pb-3">
      <div
        className="flex rounded-lg border border-neutral-300 bg-white shadow-xl"
        style={{
          width: '1600px',
          height: '900px',
          minWidth: '1600px',
          minHeight: '900px',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        <div className="relative h-full w-full">
          <div className="absolute h-full w-full">{/* Canvas content layer 1 */}</div>
          <div className="absolute h-full w-full">{/* Canvas content layer 2 */}</div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
