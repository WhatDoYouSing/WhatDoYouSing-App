import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcX = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_x_svg__a)">
      <Path
        fill="#343330"
        d="M19.28 18.22a.751.751 0 0 1-1.061 1.06l-6.22-6.22-6.219 6.22a.75.75 0 0 1-1.061-1.06l6.22-6.22-6.22-6.22A.75.75 0 1 1 5.78 4.72L12 10.94l6.219-6.22a.75.75 0 1 1 1.061 1.06L13.06 12z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_x_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcX;
