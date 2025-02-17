import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCheckOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_check_off_svg__a)">
      <path
        fill="#A69FA1"
        d="m21.53 7.28-12 12a.75.75 0 0 1-1.061 0l-5.25-5.25a.75.75 0 0 1 1.061-1.06L9 17.69 20.468 6.22a.75.75 0 1 1 1.061 1.06"
      />
    </g>
    <defs>
      <clipPath id="ic_check_off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcCheckOff;
