import { useState, useRef, useEffect } from 'react';
import { useRibbonStore } from '@/stores/useRibbonStore';
import { useZoomStore } from '@/stores/useZoomStore';

interface RibbonTabsProps {
  items: {
    label: string;
    isActive?: boolean;
  }[];
  onTabChange?: (tab: string) => void;
}

const RibbonTabs: React.FC<RibbonTabsProps> = ({ items: initialItems, onTabChange }) => {
  const [items, setItems] = useState(initialItems);
  const { setActiveTab, isPinned, togglePinned, setTemporaryVisible } = useRibbonStore();
  const { setZoomLevel } = useZoomStore();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setIsMoving(true);
    const timer = setTimeout(() => setIsMoving(false), 200);

    const activeIndex = items.findIndex((item) => item.isActive);
    if (activeIndex !== -1) {
      const button = buttonRefs.current[activeIndex];
      if (button) {
        setIndicatorStyle({
          left: button.offsetLeft + 8,
          width: button.offsetWidth - 16,
        });
      }
    }

    return () => clearTimeout(timer);
  }, [items]);

  const handleClick = (clickedIndex: number) => {
    const newItems = items.map((item, index) => ({
      ...item,
      isActive: index === clickedIndex,
    }));
    setItems(newItems);
    onTabChange?.(items[clickedIndex].label);
    setActiveTab(clickedIndex);

    if (!isPinned) {
      setTemporaryVisible(true);
    }
  };

  const handleDoubleClick = () => {
    togglePinned();
    if (isPinned) {
      setZoomLevel(48);
    } else {
      setZoomLevel(62);
    }
  };

  return (
    <div>
      <nav className="relative flex items-center gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => handleClick(index)}
            onDoubleClick={handleDoubleClick}
            className="relative flex flex-col items-center justify-center rounded-md px-2 py-1 text-sm transition-colors duration-100 hover:bg-zinc-200/80"
          >
            <span className={`${item.isActive ? 'font-bold text-zinc-800' : 'font-medium text-zinc-500'}`}>
              {item.label}
            </span>
          </button>
        ))}
        <div
          className="absolute bottom-0 h-0.5 origin-left rounded-full bg-zinc-800 transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1.3)]"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            transformOrigin: 'left bottom',
            transform: `scaleX(${items.some((item) => item.isActive) ? 1 : 0}) scaleY(${isMoving ? 1.1 : 1})`,
          }}
        />
      </nav>
    </div>
  );
};

export default RibbonTabs;
