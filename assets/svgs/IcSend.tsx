import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcSend = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_send_svg__a)">
      <Path
        fill="#33292C"
        d="m21.738 10.688-15.75-8.99A1.5 1.5 0 0 0 3.837 3.5L6.708 12l-2.871 8.5a1.5 1.5 0 0 0 2.157 1.803l15.742-9.005a1.5 1.5 0 0 0 .005-2.614zM5.25 21v-.011L8.04 12.75H13.5a.75.75 0 0 0 0-1.5H8.04L5.256 3.015 5.25 3 21 11.984z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_send_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcSend;
