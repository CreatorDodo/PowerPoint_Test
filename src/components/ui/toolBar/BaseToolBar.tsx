const BaseToolBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute h-24 w-full">
      <div className="h-26 flex w-full flex-row items-center gap-x-1.5 rounded-lg border bg-white px-2 py-2 shadow">
        {children}
      </div>
    </div>
  );
};

export default BaseToolBar;
