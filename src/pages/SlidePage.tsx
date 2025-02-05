import { Header, RibbonTabs } from '../components/ui';

const SlidePage: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <Header>
        <RibbonTabs
          items={[{ label: '파일' }, { label: '홈' }, { label: '삽입' }, { label: '슬라이드쇼' }, { label: '도움말' }]}
        />
      </Header>
      <div className="h-16 bg-gray-100"></div>
    </div>
  );
};
export default SlidePage;
