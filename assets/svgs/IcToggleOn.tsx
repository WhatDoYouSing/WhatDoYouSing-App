import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_toggle_on_svg__a)">
      <path
        fill="#FF005C"
        fillRule="evenodd"
        d="M16.75 5h-9a6.75 6.75 0 0 0 0 13.5h9a6.75 6.75 0 0 0 0-13.5m0 3a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="ic_toggle_on_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcToggleOn;
