import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcArrowRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#ic_arrow_right_svg__a)">
      <Path
        fill="#33292C"
        d="M6.776 21.11c.49.49 1.28.49 1.77 0l8.41-8.41a.996.996 0 0 0 0-1.41l-8.41-8.41a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0 0 1.77l7.34 7.34-7.35 7.35c-.48.49-.48 1.28.01 1.77"
      />
    </G>
    <Defs>
      <ClipPath id="ic_arrow_right_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcArrowRight;
