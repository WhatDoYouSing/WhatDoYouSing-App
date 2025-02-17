import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcToggleOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_toggle_off_svg__a)">
      <Path
        fill="#33292C"
        d="M16.5 5.25h-9a6.75 6.75 0 0 0 0 13.5h9a6.75 6.75 0 0 0 0-13.5m0 12h-9a5.25 5.25 0 1 1 0-10.5h9a5.25 5.25 0 0 1 0 10.5m-9-9a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
      />
    </G>
    <Defs>
      <ClipPath id="ic_toggle_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcToggleOff;
