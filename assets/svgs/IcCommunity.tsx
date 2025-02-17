import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCommunity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_community_svg__a)">
      <path
        fill={props.fill || '#33292C'}
        d="m20.56 10.189-7.5-7.5a1.5 1.5 0 0 0-2.12 0l-7.5 7.5A1.5 1.5 0 0 0 3 11.25v9a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75v-9a1.5 1.5 0 0 0-.44-1.061M19.5 19.5h-15v-8.25l7.5-7.5 7.5 7.5z"
      />
    </g>
    <defs>
      <clipPath id="ic_community_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcCommunity;
