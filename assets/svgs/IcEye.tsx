import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_eye_svg__a)">
      <path
        fill="#33292C"
        d="M23.185 11.696c-.032-.074-.827-1.835-2.592-3.6C18.241 5.742 15.27 4.5 12 4.5S5.76 5.743 3.407 8.095C1.642 9.861.844 11.625.815 11.696a.75.75 0 0 0 0 .61c.032.074.827 1.834 2.592 3.6C5.759 18.256 8.73 19.5 12 19.5s6.24-1.243 8.593-3.594c1.765-1.766 2.56-3.526 2.592-3.6a.75.75 0 0 0 0-.61M12 18c-2.886 0-5.407-1.05-7.493-3.117A12.5 12.5 0 0 1 2.344 12a12.5 12.5 0 0 1 2.163-2.883C6.593 7.05 9.114 6 12 6s5.407 1.05 7.493 3.117A12.5 12.5 0 0 1 21.661 12c-.676 1.262-3.62 6-9.661 6m0-10.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 7.5a3 3 0 1 1 0-5.999A3 3 0 0 1 12 15"
      />
    </g>
    <defs>
      <clipPath id="ic_eye_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcEye;
