const EyeIcon = ({ width = 23, height = 23, color = "#9E9E9E", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12c5.4-8 12.6-8 18 0-5.4 8-12.6 8-18 0z"
      />
      <path
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </g>
  </svg>
);

export default EyeIcon;
