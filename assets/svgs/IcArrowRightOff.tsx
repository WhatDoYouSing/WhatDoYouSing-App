import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcArrowRightOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_arrow_right_off_svg__a)">
      <Path
        fill="#A69FA1"
        d="m17.03 12.53-7.5 7.5a.751.751 0 0 1-1.061-1.06l6.97-6.97-6.97-6.97A.75.75 0 1 1 9.53 3.97l7.5 7.5a.75.75 0 0 1 0 1.06"
      />
    </G>
    <Defs>
      <ClipPath id="ic_arrow_right_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcArrowRightOff;
