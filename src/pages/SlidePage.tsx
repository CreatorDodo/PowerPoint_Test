import { Header, RibbonTabs, Footer, ZoomController, Main, Canvas } from '../components/ui';

const SlidePage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between bg-gray-100">
      <div className="flex h-full w-full flex-col justify-between">
        <Header>
          <RibbonTabs
            items={[
              { label: '파일' },
              { label: '홈' },
              { label: '삽입' },
              { label: '슬라이드쇼' },
              { label: '도움말' },
            ]}
          />
        </Header>
        <Main>
          <Canvas />
        </Main>
      </div>
      <Footer>
        <ZoomController />
      </Footer>
    </div>
  );
};
export default SlidePage;
