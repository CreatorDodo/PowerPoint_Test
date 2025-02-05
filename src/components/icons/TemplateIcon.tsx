interface TemplateIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const TemplateIcon: React.FC<TemplateIconProps> = ({ size = 24, className, ...props }) => (
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
    <rect width="18" height="7" x="3" y="3" rx="1"></rect>
    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
  </svg>
);

export default TemplateIcon;
