interface TextIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const TextIcon: React.FC<TextIconProps> = ({ size = 24, className, ...props }) => (
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
    <path d="M5 3a2 2 0 0 0-2 2" style={{}}></path>
    <path d="M19 3a2 2 0 0 1 2 2" style={{}}></path>
    <path d="M21 19a2 2 0 0 1-2 2" style={{}}></path>
    <path d="M5 21a2 2 0 0 1-2-2" style={{}}></path>
    <path d="M9 3h1" style={{}}></path>
    <path d="M9 21h1" style={{}}></path>
    <path d="M14 3h1" style={{}}></path>
    <path d="M14 21h1" style={{}}></path>
    <path d="M3 9v1" style={{}}></path>
    <path d="M21 9v1" style={{}}></path>
    <path d="M3 14v1" style={{}}></path>
    <path d="M21 14v1" style={{}}></path>
    <line x1="7" x2="15" y1="8" y2="8" style={{}}></line>
    <line x1="7" x2="17" y1="12" y2="12" style={{}}></line>
    <line x1="7" x2="13" y1="16" y2="16" style={{}}></line>
  </svg>
);

export default TextIcon;
