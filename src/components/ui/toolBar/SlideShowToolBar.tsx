import BaseToolBar from './BaseToolBar';
import ToolbarSection from './ToolbarSection';
import ToolbarItem from './ToolbarItem';
import { ShowIcon } from '@/components/icons';

const SlideShowToolBar = () => {
  return (
    <BaseToolBar>
      <ToolbarSection label="슬라이드쇼">
        <ToolbarItem icon={<ShowIcon className="rounded bg-green-50 stroke-green-600" />} label="처음부터" disabled />
        <ToolbarItem
          icon={<ShowIcon className="rounded bg-blue-50 stroke-blue-600" />}
          label="현재 슬라이드부터"
          disabled
        />
      </ToolbarSection>
    </BaseToolBar>
  );
};

export default SlideShowToolBar;
