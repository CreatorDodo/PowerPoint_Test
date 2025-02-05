interface MiniIconItemProps {
  icon: React.ReactNode;
  disabled?: boolean;
}

const MiniIconItem: React.FC<MiniIconItemProps> = ({ icon, disabled = false }) => {
  return (
    <div
      className={`flex flex-row items-center rounded transition-all duration-100 ${
        disabled
          ? 'cursor-not-allowed hover:bg-neutral-100 active:bg-neutral-200'
          : 'cursor-pointer hover:bg-neutral-100 active:bg-neutral-200'
      }`}
    >
      <div className="flex size-8 items-center justify-center rounded">{icon}</div>
    </div>
  );
};

export default MiniIconItem;
