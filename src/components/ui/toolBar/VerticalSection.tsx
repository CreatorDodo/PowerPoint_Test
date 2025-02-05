interface VerticalSectionProps {
  label: string;
  children: React.ReactNode;
}

const VerticalSection: React.FC<VerticalSectionProps> = ({ label, children }) => {
  return (
    <div className="h-26 flex flex-col items-center justify-center gap-y-1">
      <div className="flex flex-col">{children}</div>
      <div className="select-none text-xs text-zinc-500">{label}</div>
    </div>
  );
};

export default VerticalSection;
