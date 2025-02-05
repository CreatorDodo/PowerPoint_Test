import { Stage, Layer, Rect, Circle } from 'react-konva';
import { useZoomStore } from '@/stores/useZoomStore';
import { useShapeStore } from '@/stores/useShapeStore';

const Canvas: React.FC = () => {
  const { shapes, updateShape } = useShapeStore();
  const { zoomLevel } = useZoomStore();
  const scale = zoomLevel / 100;
  const canvasWidth = 1600;
  const canvasHeight = 900;

  return (
    <div className="absolute z-0 flex h-full w-full flex-col items-center justify-center overflow-auto pb-3">
      <div
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
        <Stage width={canvasWidth * 3} height={canvasHeight * 3}>
          <Layer>
            {shapes.map((shape) =>
              shape.type === 'rectangle' ? (
                <Rect
                  key={shape.id}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  fill={shape.color}
                  stroke={shape.borderColor}
                  strokeWidth={3}
                  draggable
                  onMouseOver={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'grab';
                    }
                  }}
                  onMouseOut={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'default';
                    }
                  }}
                  onDragStart={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'grabbing';
                    }
                  }}
                  onDragEnd={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'grab';
                      updateShape(shape.id, e.target.x(), e.target.y());
                    }
                  }}
                />
              ) : (
                <Circle
                  key={shape.id}
                  x={shape.x + (shape.radius || 0)}
                  y={shape.y + (shape.radius || 0)}
                  radius={shape.radius}
                  fill={shape.color}
                  stroke={shape.borderColor}
                  strokeWidth={3}
                  draggable
                  onMouseOver={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'grab';
                    }
                  }}
                  onMouseOut={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'default';
                    }
                  }}
                  onDragStart={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'grabbing';
                    }
                  }}
                  onDragEnd={(e) => {
                    const stage = e.target?.getStage?.();
                    if (stage) {
                      stage.container().style.cursor = 'grab';
                      updateShape(shape.id, e.target.x() - (shape.radius || 0), e.target.y() - (shape.radius || 0));
                    }
                  }}
                />
              ),
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
