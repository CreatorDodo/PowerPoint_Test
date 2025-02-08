import { saveAsSVG, saveAsPNG } from '@/utils/fileExport';
import BaseToolBar from './BaseToolBar';
import ToolbarSection from './ToolbarSection';
import ToolbarItem from './ToolbarItem';
import ToolbarDivider from './ToolbarDivider';
import { SaveSVGIcon, ImageIcon } from '@/components/icons';
import { useCanvasStore } from '@/stores/useCanvasStore';

const FileToolBar = () => {
  const canvasRef = useCanvasStore((state) => state.canvasRef);

  const handleSaveSVG = () => {
    if (canvasRef?.current) {
      saveAsSVG(canvasRef.current);
    }
  };

  const handleSavePNG = () => {
    if (canvasRef?.current) {
      saveAsPNG(canvasRef.current);
    }
  };

  return (
    <BaseToolBar>
      <ToolbarSection label="저장">
        <ToolbarItem icon={<SaveSVGIcon />} label="SVG로 저장" onClick={handleSaveSVG} />
        <ToolbarItem icon={<ImageIcon className="stroke-neutral-600" />} label="PNG로 저장" onClick={handleSavePNG} />
      </ToolbarSection>
      <ToolbarDivider />
    </BaseToolBar>
  );
};

export default FileToolBar;
