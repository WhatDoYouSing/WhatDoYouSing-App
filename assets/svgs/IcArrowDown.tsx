import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcArrowDown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_arrow_down_svg__a)">
      <Path
        fill="#33292C"
        d="m20.03 9.53-7.5 7.5a.75.75 0 0 1-1.061 0l-7.5-7.5A.75.75 0 1 1 5.03 8.47L12 15.44l6.969-6.97a.75.75 0 0 1 1.061 1.06"
      />
    </G>
    <Defs>
      <ClipPath id="ic_arrow_down_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcArrowDown;
