import { useZoomStore } from '@/store/useZoomStore';

const Canvas: React.FC = () => {
  const { zoomLevel } = useZoomStore();
  const scale = zoomLevel / 100;

  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-auto">
      <div
        className="flex rounded-lg border border-neutral-300 bg-white shadow-xl"
        style={{
          zoom: scale,
          width: '1600px',
          height: '900px',
          minWidth: '1600px',
          minHeight: '900px',
        }}
      >
        <div style={{ width: '1600px', height: '900px' }}>
          <div className="relative h-full w-full">
            <div className="absolute h-full w-full">{/* Canvas content layer 1 */}</div>
            <div className="absolute h-full w-full">{/* Canvas content layer 2 */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
