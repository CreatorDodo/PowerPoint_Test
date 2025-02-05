interface ShowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ShowIcon: React.FC<ShowIconProps> = ({ size = 24, className, ...props }) => (
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
    <path d="M2 3h20" style={{}}></path>
    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" style={{}}></path>
    <path d="m7 21 5-5 5 5" style={{}}></path>
  </svg>
);
export default ShowIcon;
