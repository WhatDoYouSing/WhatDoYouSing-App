import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_search_svg__a)">
      <path
        fill="#33292C"
        d="m21.53 20.47-4.693-4.694a8.26 8.26 0 1 0-1.06 1.06l4.693 4.695a.75.75 0 1 0 1.06-1.062M3.75 10.5a6.75 6.75 0 1 1 6.75 6.75 6.76 6.76 0 0 1-6.75-6.75"
      />
    </g>
    <defs>
      <clipPath id="ic_search_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcSearch;
