import { FileToolBar, HomeToolBar, InsertToolBar, SlideShowToolBar, HelpToolBar } from '@/components/ui/toolBar';
import { useRibbonStore } from '@/stores/useRibbonStore';
import { useEffect } from 'react';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { activeTab, isPinned, isTemporaryVisible, setTemporaryVisible } = useRibbonStore();

  useEffect(() => {
    if (!isPinned) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('header')) {
          setTemporaryVisible(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isPinned, setTemporaryVisible]);

  const shouldShowToolbar = isPinned || isTemporaryVisible;

  const renderToolBar = () => {
    if (!shouldShowToolbar) {
      return null;
    }

    switch (activeTab) {
      case 0:
        return <FileToolBar />;
      case 1:
        return <HomeToolBar />;
      case 2:
        return <InsertToolBar />;
      case 3:
        return <SlideShowToolBar />;
      case 4:
        return <HelpToolBar />;
      default:
        return null;
    }
  };

  return (
    <header className="relative z-[120] flex w-full flex-col gap-y-2 bg-gray-100 px-6 pt-4 text-base text-zinc-950">
      <div className="relative flex w-full items-center justify-start gap-x-3 py-0.5">
        <div className="flex size-7 cursor-pointer select-none items-center justify-center rounded-md bg-neutral-700 text-base font-bold text-neutral-50 hover:bg-neutral-800 active:scale-90 active:bg-neutral-800">
          D
        </div>
        <h1 className="min-w-8 select-none rounded bg-transparent px-2 py-0.5 text-base font-medium text-neutral-500">
          Duyo Test
        </h1>
      </div>
      {children}
      <div
        className={`relative transition-all duration-200 ease-in-out ${shouldShowToolbar ? 'opacity-100' : 'opacity-0'}`}
      >
        {renderToolBar()}
      </div>
    </header>
  );
};

export default Header;
