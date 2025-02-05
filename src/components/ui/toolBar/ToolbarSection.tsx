interface ToolbarSectionProps {
  label: string;
  children: React.ReactNode;
}

const ToolbarSection: React.FC<ToolbarSectionProps> = ({ label, children }) => {
  return (
    <div className="h-26 animate-slideIn flex flex-col items-center justify-center">
      <div className="flex flex-row gap-1">{children}</div>
      <div className="select-none text-xs text-zinc-500">{label}</div>
    </div>
  );
};

export default ToolbarSection;
