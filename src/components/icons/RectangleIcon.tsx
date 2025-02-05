interface RectangleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const RectangleIcon: React.FC<RectangleIconProps> = ({ size = 24, className, ...props }) => (
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
    <rect width="20" height="12" x="2" y="6" rx="2" style={{}}></rect>
  </svg>
);

export default RectangleIcon;
