import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_record_svg__a)">
      <path
        fill={props.fill || '#33292C'}
        d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25m0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25m0-13.5A5.256 5.256 0 0 0 6.75 12a.75.75 0 1 1-1.5 0A6.76 6.76 0 0 1 12 5.25a.75.75 0 1 1 0 1.5M18.75 12A6.76 6.76 0 0 1 12 18.75a.75.75 0 1 1 0-1.5A5.256 5.256 0 0 0 17.25 12a.75.75 0 1 1 1.5 0M15 12a3 3 0 1 0-5.999 0A3 3 0 0 0 15 12m-4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      />
    </g>
    <defs>
      <clipPath id="ic_record_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcRecord;
