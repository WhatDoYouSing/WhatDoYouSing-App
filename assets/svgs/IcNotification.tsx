import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic_notification_svg__a)">
      <path
        fill="#343330"
        d="M20.794 16.494c-.52-.896-1.294-3.432-1.294-6.744a7.5 7.5 0 0 0-15 0c0 3.313-.774 5.848-1.295 6.744A1.5 1.5 0 0 0 4.5 18.75h3.826a3.75 3.75 0 0 0 7.348 0H19.5a1.5 1.5 0 0 0 1.294-2.256M12 20.25a2.25 2.25 0 0 1-2.12-1.5h4.24a2.25 2.25 0 0 1-2.12 1.5m-7.5-3c.722-1.241 1.5-4.117 1.5-7.5a6 6 0 1 1 12 0c0 3.38.776 6.256 1.5 7.5z"
      />
    </g>
    <defs>
      <clipPath id="ic_notification_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcNotification;
