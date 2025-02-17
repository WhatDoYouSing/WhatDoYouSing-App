import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcFilterOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <G clipPath="url(#ic_filter_off_svg__a)">
      <Path
        fill="#33292C"
        d="M3.75 9.25h3.094a3 3 0 0 0 5.812 0h7.594a.75.75 0 1 0 0-1.5h-7.594a3 3 0 0 0-5.812 0H3.75a.75.75 0 0 0 0 1.5m6-2.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.5 9.75h-1.594a3 3 0 0 0-5.812 0H3.75a.75.75 0 1 0 0 1.5h9.094a3 3 0 0 0 5.812 0h1.594a.75.75 0 1 0 0-1.5M15.75 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      />
    </G>
    <Defs>
      <ClipPath id="ic_filter_off_svg__a">
        <Path fill="#fff" d="M0 .64h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcFilterOff;
