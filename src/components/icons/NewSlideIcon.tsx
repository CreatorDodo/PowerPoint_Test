interface NewSlideIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const NewSlideIcon: React.FC<NewSlideIconProps> = ({ size = 24, className, ...props }) => (
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
    <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" style={{}}></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4" style={{}}></path>
    <path d="M3 15h6" style={{}}></path>
    <path d="M6 12v6" style={{}}></path>
  </svg>
);

export default NewSlideIcon;
