import * as React from "react";

const SvgDiscordSquare = (props) => (
  <svg
    width={53}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={52.619}
      height={51.959}
      rx={16}
      fill="#20083B"
      fillOpacity={0.75}
    />
    <rect
      x={0.5}
      y={0.5}
      width={51.619}
      height={50.959}
      rx={15.5}
      stroke="#FFFCFC"
      strokeOpacity={0.5}
    />
    <path
      d="M28.12 30.877c-.226.056-.455.105-.684.148a9.99 9.99 0 0 1-3.77-.015 15.086 15.086 0 0 1-.924-.223L21.44 32.48C18.223 32.377 17 30.222 17 30.222c0-4.784 2.096-8.663 2.096-8.663C21.19 19.956 23.185 20 23.185 20l.57.743c.053-.007.106-.012.159-.014a12.064 12.064 0 0 1 3.274.014l.626-.743s1.995-.044 4.089 1.56c0 0 2.097 3.878 2.097 8.662 0 0-1.238 2.154-4.454 2.259l-1.425-1.604Zm-5.43-5.065c-.85 0-1.523.636-1.523 1.415 0 .778.686 1.415 1.523 1.415.849 0 1.52-.637 1.52-1.415.015-.779-.67-1.415-1.52-1.415Zm5.445 0c-.85 0-1.521.636-1.521 1.415 0 .778.686 1.415 1.52 1.415.851 0 1.523-.637 1.523-1.415 0-.779-.672-1.415-1.522-1.415Z"
      fill="#FFFDFD"
    />
  </svg>
);

export default SvgDiscordSquare;
