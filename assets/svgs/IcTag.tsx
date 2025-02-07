import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcTag = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      stroke="#33292C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.591 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2.001 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82M6.999 7h.011"
    />
  </Svg>
);
export default SvgIcTag;
