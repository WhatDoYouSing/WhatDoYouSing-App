import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_arrow_down_svg__a)">
      <path
        fill="#33292C"
        d="m20.03 9.53-7.5 7.5a.75.75 0 0 1-1.061 0l-7.5-7.5A.75.75 0 1 1 5.03 8.47L12 15.44l6.969-6.97a.75.75 0 0 1 1.061 1.06"
      />
    </g>
    <defs>
      <clipPath id="ic_arrow_down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcArrowDown;
