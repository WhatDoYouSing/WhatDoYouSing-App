import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcMapOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_map_off_svg__a)">
      <Path
        fill="#33292C"
        d="M21.461 4.658a.75.75 0 0 0-.643-.136l-5.73 1.433-5.752-2.876a.75.75 0 0 0-.518-.057l-6 1.5a.75.75 0 0 0-.568.728v13.5a.75.75 0 0 0 .932.727l5.73-1.432 5.752 2.876a.77.77 0 0 0 .518.056l6-1.5a.75.75 0 0 0 .568-.727V5.25a.75.75 0 0 0-.289-.592M9.75 4.963l4.5 2.25v11.824l-4.5-2.25zm-6 .873 4.5-1.125v11.953l-4.5 1.125zm16.5 12.328-4.5 1.125V7.336l4.5-1.125z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_map_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcMapOff;
