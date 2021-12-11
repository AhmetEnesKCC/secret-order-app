import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 100 80">
    <g data-name="Rectangle 12" fill="none" stroke="current" strokeWidth={6}>
      <path stroke="none" d="M0 0h74v42H0z" />
      <path d="M3 3h68v36H3z" />
    </g>
    <ellipse
      data-name="Ellipse 2"
      cx={6}
      cy={5.5}
      rx={6}
      ry={5.5}
      transform="translate(11 36)"
      fill="current"
    />
    <ellipse
      data-name="Ellipse 3"
      cx={5}
      cy={5.5}
      rx={5}
      ry={5.5}
      transform="translate(52 36)"
      fill="current"
    />
    <ellipse
      data-name="Ellipse 4"
      cx={6}
      cy={5.5}
      rx={6}
      ry={5.5}
      transform="translate(81 36)"
      fill="current"
    />
    <path
      data-name="Path 1"
      d="M77.335 5.583s13.331-3.078 21 5.852 3.92 29.867 3.92 29.867h-24.92Z"
      fill="current"
    />
  </svg>
);

export default SvgComponent;
