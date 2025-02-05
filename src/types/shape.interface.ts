export interface Shape {
  id: number;
  type: 'rectangle' | 'circle';
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  color: string;
  borderColor: string;
}
