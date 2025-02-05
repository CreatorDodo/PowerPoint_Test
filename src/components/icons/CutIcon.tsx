interface CutIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CutIcon: React.FC<CutIconProps> = ({ size = 24, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={className}
    {...props}
  >
    <circle cx="6" cy="6" r="3" style={{}}></circle>
    <path d="M8.12 8.12 12 12" style={{}}></path>
    <path d="M20 4 8.12 15.88" style={{}}></path>
    <circle cx="6" cy="18" r="3" style={{}}></circle>
    <path d="M14.8 14.8 20 20" style={{}}></path>
  </svg>
);

export default CutIcon;
