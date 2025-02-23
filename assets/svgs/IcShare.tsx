import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcShare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#33292C"
      d="M16.5 15a3.74 3.74 0 0 0-2.683 1.134l-4.322-2.778c.34-.872.34-1.84 0-2.712l4.322-2.777a3.75 3.75 0 1 0-.812-1.261L8.683 9.384a3.75 3.75 0 1 0 0 5.233l4.322 2.777A3.75 3.75 0 1 0 16.5 15m0-12a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M6 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5M16.5 21a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
    />
  </Svg>
);
export default SvgIcShare;
