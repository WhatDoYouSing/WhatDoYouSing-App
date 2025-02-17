import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcPlus = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_plus_svg__a)">
      <Path
        fill="#33292C"
        d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 1 1-1.5 0v-7.5h-7.5a.75.75 0 1 1 0-1.5h7.5v-7.5a.75.75 0 1 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12"
      />
    </G>
    <Defs>
      <ClipPath id="ic_plus_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcPlus;
