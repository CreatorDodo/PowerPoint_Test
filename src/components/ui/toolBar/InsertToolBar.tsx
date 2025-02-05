import BaseToolBar from './BaseToolBar';
import ToolbarSection from './ToolbarSection';
import ToolbarItem from './ToolbarItem';
import ToolbarDivider from './ToolbarDivider';
import { NewSlideIcon, TextIcon, ImageIcon, VideoIcon, RectangleIcon, CircleIcon } from '@/components/icons';

const InsertToolBar = () => {
  return (
    <BaseToolBar>
      <ToolbarSection label="슬라이드">
        <ToolbarItem icon={<NewSlideIcon className="stroke-neutral-600" />} label="새 슬라이드" disabled />
      </ToolbarSection>
      <ToolbarDivider />
      <ToolbarSection label="텍스트">
        <ToolbarItem icon={<TextIcon className="stroke-neutral-600" />} label="텍스트 상자" disabled />
      </ToolbarSection>
      <ToolbarDivider />
      <ToolbarSection label="미디어">
        <ToolbarItem icon={<ImageIcon className="stroke-neutral-600" />} label="그림" disabled />
        <ToolbarItem icon={<VideoIcon className="stroke-neutral-600" />} label="비디오" disabled />
      </ToolbarSection>
      <ToolbarDivider />
      <ToolbarSection label="도형">
        <ToolbarItem icon={<RectangleIcon className="stroke-neutral-600" />} label="사각형" />
        <ToolbarItem icon={<CircleIcon className="stroke-neutral-600" />} label="원" />
      </ToolbarSection>
      <ToolbarDivider />
    </BaseToolBar>
  );
};

export default InsertToolBar;
