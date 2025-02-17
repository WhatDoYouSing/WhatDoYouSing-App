import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcTop = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_top_svg__a)">
      <Path
        fill="#33292C"
        d="M19.28 12.97a.75.75 0 1 1-1.06 1.06l-5.47-5.47V21a.75.75 0 1 1-1.5 0V8.56l-5.47 5.47a.75.75 0 1 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0zM20.25 3H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 1 0 0-1.5"
      />
    </G>
    <Defs>
      <ClipPath id="ic_top_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcTop;
