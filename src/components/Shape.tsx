import Draggable from 'react-draggable';
import { Shape as ShapeType } from '@/types/shape.interface';
import { useRef, useState } from 'react';

interface ShapeProps {
  shape: ShapeType;
  scale: number;
  onDrag: (id: number, newX: number, newY: number) => void;
}

export const Shape: React.FC<ShapeProps> = ({ shape, scale, onDrag }) => {
  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleDrag = (_: any, data: { x: number; y: number }) => {
    onDrag(shape.id, data.x, data.y);
  };

  const shapeStyle = {
    position: 'absolute',
    backgroundColor: shape.color,
    border: `3px solid ${shape.borderColor}`,
    cursor: isDragging ? 'grabbing' : 'grab',
  } as const;

  if (shape.type === 'rectangle') {
    return (
      <Draggable
        nodeRef={nodeRef}
        position={{ x: shape.x, y: shape.y }}
        onDrag={handleDrag}
        scale={scale}
        onStart={() => setIsDragging(true)}
        onStop={() => setIsDragging(false)}
      >
        <div
          ref={nodeRef}
          style={{
            ...shapeStyle,
            width: shape.width,
            height: shape.height,
          }}
        />
      </Draggable>
    );
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      position={{ x: shape.x, y: shape.y }}
      onDrag={handleDrag}
      scale={scale}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        ref={nodeRef}
        style={{
          ...shapeStyle,
          width: shape.radius! * 2,
          height: shape.radius! * 2,
          borderRadius: '50%',
        }}
      />
    </Draggable>
  );
};
