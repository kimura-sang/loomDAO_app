import * as React from "react";

const SvgInstagramSquare = (props) => (
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
    <g clipPath="url(#instagram-square_svg__a)" fill="#FFFDFD">
      <path d="M26.5 19.35c2.002 0 2.238.006 3.029.046.733.035 1.13.156 1.39.26.352.138.6.3.86.56.265.265.427.513.56.859.103.265.224.663.26 1.39.034.79.045 1.027.045 3.03 0 2.001-.005 2.238-.046 3.028-.035.733-.156 1.13-.26 1.39-.138.352-.3.6-.56.866-.259.26-.513.427-.859.56-.265.103-.663.225-1.39.26-.79.034-1.027.045-3.029.045s-2.238-.005-3.029-.046c-.733-.034-1.13-.156-1.39-.26-.352-.138-.6-.3-.866-.56a2.333 2.333 0 0 1-.56-.864c-.103-.266-.224-.664-.259-1.39-.035-.791-.046-1.028-.046-3.03s.006-2.238.046-3.029c.035-.732.156-1.13.26-1.39.138-.352.3-.6.56-.86.265-.265.513-.427.865-.56.265-.103.663-.224 1.39-.259.79-.035 1.027-.046 3.029-.046Zm0-1.35c-2.037 0-2.29.012-3.092.046-.797.035-1.345.162-1.823.346-.497.19-.912.45-1.327.866a3.686 3.686 0 0 0-.866 1.327c-.184.479-.311 1.02-.346 1.823-.034.802-.046 1.055-.046 3.092s.006 2.29.046 3.092c.035.797.162 1.345.346 1.823.19.49.45.912.866 1.327.415.416.836.675 1.327.866.479.184 1.02.311 1.823.346.802.035 1.055.046 3.092.046s2.29-.006 3.092-.046c.797-.035 1.345-.162 1.823-.346.497-.19.912-.45 1.327-.866.416-.415.675-.836.866-1.327.184-.479.311-1.02.346-1.823.035-.802.046-1.055.046-3.092s-.006-2.29-.046-3.092c-.035-.797-.162-1.345-.346-1.823-.19-.49-.45-.912-.866-1.327a3.686 3.686 0 0 0-1.327-.866c-.479-.184-1.02-.311-1.823-.346C28.79 18.012 28.537 18 26.5 18" />
      <path d="M26.5 21.652a3.853 3.853 0 1 0-.001 7.707 3.853 3.853 0 0 0 .001-7.707Zm0 6.352a2.5 2.5 0 0 1 0-4.996 2.5 2.5 0 0 1 0 4.996ZM31.404 21.496a.901.901 0 0 1-1.8 0 .901.901 0 0 1 1.8 0Z" />
    </g>
    <defs>
      <clipPath id="instagram-square_svg__a">
        <path fill="#fff" transform="translate(19 18)" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInstagramSquare;
