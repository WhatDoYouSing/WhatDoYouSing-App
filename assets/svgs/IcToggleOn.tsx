import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcToggleOn = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_toggle_on_svg__a)">
      <Path
        fill="#FF005C"
        fillRule="evenodd"
        d="M16.75 5h-9a6.75 6.75 0 0 0 0 13.5h9a6.75 6.75 0 0 0 0-13.5m0 3a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="ic_toggle_on_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcToggleOn;
