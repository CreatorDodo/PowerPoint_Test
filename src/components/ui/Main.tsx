interface MainProps {
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="relative flex h-full w-screen bg-gray-100">{children}</main>;
};

export default Main;
