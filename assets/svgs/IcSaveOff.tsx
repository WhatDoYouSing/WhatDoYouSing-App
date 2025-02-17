import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcSaveOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_save_off_svg__a)">
      <Path
        fill="#33292C"
        d="M17.25 3H6.75a1.5 1.5 0 0 0-1.5 1.5V21a.75.75 0 0 0 1.148.636L12 18.134l5.603 3.502A.75.75 0 0 0 18.75 21V4.5a1.5 1.5 0 0 0-1.5-1.5m0 16.647-4.853-3.033a.75.75 0 0 0-.795 0L6.75 19.647V4.5h10.5z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_save_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcSaveOff;
