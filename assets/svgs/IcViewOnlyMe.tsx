import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcViewOnlyMe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_view_only_me_svg__a)">
      <path
        fill="#33292C"
        d="M19.5 7.5h-3V5.25a4.5 4.5 0 1 0-9 0V7.5h-3A1.5 1.5 0 0 0 3 9v10.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5M9 5.25a3 3 0 1 1 6 0V7.5H9zM19.5 19.5h-15V9h15zm-6.375-5.25a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
      />
    </g>
    <defs>
      <clipPath id="ic_view_only_me_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcViewOnlyMe;
