interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="fixed bottom-0 z-20 flex h-6 w-full items-center justify-between border-t border-zinc-300 bg-gray-100 px-4 font-[Pretendard]">
      <div></div>
      {children}
    </footer>
  );
};

export default Footer;
