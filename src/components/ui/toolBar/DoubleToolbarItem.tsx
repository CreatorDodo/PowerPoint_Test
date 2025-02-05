interface DoubleToolbarItemProps {
  items: {
    icon: React.ReactNode;
    label: string;
    disabled?: boolean;
  }[];
}
const DoubleToolbarItem: React.FC<DoubleToolbarItemProps> = ({ items }) => {
  if (items.length !== 2) {
    throw new Error('DoubleToolbarItem must have exactly 2 items');
  }

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row items-center rounded p-1 px-2 transition-all duration-100 ${
            item.disabled
              ? 'cursor-not-allowed hover:bg-neutral-100 active:bg-neutral-200'
              : 'cursor-pointer hover:bg-neutral-100 active:bg-neutral-200'
          }`}
        >
          <div className="mt-1 size-5">{item.icon}</div>
          <span className="select-none text-xs font-medium text-neutral-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DoubleToolbarItem;
