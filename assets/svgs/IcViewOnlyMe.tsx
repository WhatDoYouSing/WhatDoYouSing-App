import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcViewOnlyMe = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_view_only_me_svg__a)">
      <Path
        fill="#33292C"
        d="M19.5 7.5h-3V5.25a4.5 4.5 0 1 0-9 0V7.5h-3A1.5 1.5 0 0 0 3 9v10.5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5M9 5.25a3 3 0 1 1 6 0V7.5H9zM19.5 19.5h-15V9h15zm-6.375-5.25a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
      />
    </G>
    <Defs>
      <ClipPath id="ic_view_only_me_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcViewOnlyMe;
