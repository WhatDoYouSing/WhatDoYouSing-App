import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcLikeOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_like_off_svg__a)">
      <Path
        fill="#33292C"
        d="M21.938 7.511a2.25 2.25 0 0 0-1.688-.761H15v-1.5a3.75 3.75 0 0 0-3.75-3.75.75.75 0 0 0-.671.414L7.037 9H3a1.5 1.5 0 0 0-1.5 1.5v8.25a1.5 1.5 0 0 0 1.5 1.5h16.125a2.25 2.25 0 0 0 2.233-1.969l1.125-9a2.25 2.25 0 0 0-.546-1.77M3 10.5h3.75v8.25H3zm17.994-1.406-1.125 9a.75.75 0 0 1-.744.656H8.25V9.927l3.442-6.884A2.25 2.25 0 0 1 13.5 5.25V7.5a.75.75 0 0 0 .75.75h6a.75.75 0 0 1 .744.844"
      />
    </G>
    <Defs>
      <ClipPath id="ic_like_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcLikeOff;
