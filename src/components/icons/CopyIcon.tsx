interface CopyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CopyIcon: React.FC<CopyIconProps> = ({ size = 24, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M20 7h-3a2 2 0 0 1-2-2V2" style={{}}></path>
    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path>
    <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" style={{}}></path>
  </svg>
);

export default CopyIcon;
