interface VideoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const VideoIcon: React.FC<VideoIconProps> = ({ size = 24, className, ...props }) => (
  <svg
    xmlns="http:www.w3.org/2000/svg"
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
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" style={{}}></path>
    <rect x="2" y="6" width="14" height="12" rx="2" style={{}}></rect>
  </svg>
);

export default VideoIcon;
