interface CircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CircleIcon: React.FC<CircleIconProps> = ({ size = 24, className, ...props }) => (
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
    <circle cx="12" cy="12" r="10" style={{}}></circle>
  </svg>
);

export default CircleIcon;
