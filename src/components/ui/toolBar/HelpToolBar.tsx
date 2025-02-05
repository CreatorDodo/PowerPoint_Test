import BaseToolBar from './BaseToolBar';

const HelpToolBar = () => {
  return (
    <BaseToolBar>
      <div className="flex h-[86.4px] w-[768px] select-none flex-col items-start gap-1 p-1">
        <h1 className="text-lg font-bold leading-7">2025년 2월 두요 인턴 과제 테스트</h1>
        <div className="flex w-[756px] flex-col items-start gap-0.5">
          <p className="text-sm text-neutral-700">
            이 과제 테스트에서는 React로 웹 애플리케이션을 만드는 능력을 살펴봅니다.
            <span className="cursor-not-allowed font-bold text-red-500">금지 마우스 커서</span>로 된 항목은 구현하지
            않는 기능입니다.
          </p>
          <p className="text-sm text-neutral-700">
            마감일은 <span className="font-bold">2025년 2월 5일 23시 00분</span>
            입니다😀
          </p>
        </div>
      </div>
    </BaseToolBar>
  );
};

export default HelpToolBar;
