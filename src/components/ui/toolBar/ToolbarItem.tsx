interface ToolbarItemProps {
  icon: React.ReactNode;
  label?: string;
  disabled?: boolean;
  labelColor?: string;
  hoverColor?: string;
  activeColor?: string;
  onClick?: () => void;
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({
  icon,
  label,
  disabled = false,
  labelColor = 'text-neutral-600',
  hoverColor = 'hover:bg-neutral-100',
  activeColor = 'active:bg-neutral-200',
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-y-1 rounded px-1.5 py-0.5 transition-all duration-100 ${
        disabled ? `cursor-not-allowed ${hoverColor} ${activeColor}` : `cursor-pointer ${hoverColor} ${activeColor}`
      }`}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="size-10 rounded p-2">{icon}</div>
      <span className={`select-none text-[12.7px] font-medium ${labelColor}`}>{label}</span>
    </div>
  );
};

export default ToolbarItem;
