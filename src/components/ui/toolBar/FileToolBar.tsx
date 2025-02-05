import BaseToolBar from './BaseToolBar';
import ToolbarSection from './ToolbarSection';
import ToolbarItem from './ToolbarItem';
import ToolbarDivider from './ToolbarDivider';
import { SaveSVGIcon, ImageIcon } from '@/components/icons';

const FileToolBar = () => {
  return (
    <BaseToolBar>
      <ToolbarSection label="저장">
        <ToolbarItem icon={<SaveSVGIcon />} label="SVG로 저장" />
        <ToolbarItem icon={<ImageIcon className="stroke-neutral-600" />} label="PNG로 저장" />
      </ToolbarSection>
      <ToolbarDivider />
    </BaseToolBar>
  );
};

export default FileToolBar;
