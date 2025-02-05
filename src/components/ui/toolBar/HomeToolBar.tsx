import BaseToolBar from './BaseToolBar';
import ToolbarSection from './ToolbarSection';
import VerticalSection from './VerticalSection';
import ToolbarItem from './ToolbarItem';
import DoubleToolbarItem from './DoubleToolbarItem';
import MiniIconItem from './MiniIconItem';
import ToolbarDivider from './ToolbarDivider';
import {
  UndoIcon,
  RedoIcon,
  PasteIcon,
  CutIcon,
  CopyIcon,
  TrashCanIcon,
  NewSlideIcon,
  TextIcon,
  TemplateIcon,
} from '@/components/icons';

const HomeToolBar = () => {
  return (
    <BaseToolBar>
      <VerticalSection label="실행 취소">
        <MiniIconItem icon={<UndoIcon className="size-4 stroke-neutral-600" />} disabled />
        <MiniIconItem icon={<RedoIcon className="size-4 stroke-neutral-600" />} disabled />
      </VerticalSection>
      <ToolbarDivider />
      <ToolbarSection label="클립보드">
        <ToolbarItem icon={<PasteIcon className="stroke-neutral-600" />} label="붙여넣기" disabled />
        <DoubleToolbarItem
          items={[
            {
              icon: <CutIcon className="size-4 stroke-neutral-600" />,
              label: '자르기',
              disabled: true,
            },
            {
              icon: <CopyIcon className="size-4 stroke-neutral-600" />,
              label: '복사',
              disabled: true,
            },
          ]}
        />
      </ToolbarSection>
      <ToolbarDivider />
      <ToolbarSection label="삭제">
        <ToolbarItem
          icon={<TrashCanIcon className="stroke-red-500" />}
          label="삭제"
          disabled
          labelColor="text-red-500"
          hoverColor="hover:bg-red-100"
          activeColor="active:bg-red-200"
        />
      </ToolbarSection>
      <ToolbarDivider />
      <ToolbarSection label="새 슬라이드">
        <ToolbarItem icon={<NewSlideIcon className="stroke-neutral-600" />} label="새 슬라이드" disabled />
        <DoubleToolbarItem
          items={[
            {
              icon: <TextIcon className="size-4 stroke-neutral-600" />,
              label: '복사',
              disabled: true,
            },
            {
              icon: <TemplateIcon className="size-4 stroke-neutral-600" />,
              label: '템플릿',
              disabled: true,
            },
          ]}
        />
      </ToolbarSection>
      <ToolbarDivider />
    </BaseToolBar>
  );
};

export default HomeToolBar;
