import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcMy = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_my_svg__a)">
      <Path
        fill={props.fill || '#33292C'}
        d="M21.648 19.875c-1.427-2.468-3.628-4.238-6.195-5.077a6.75 6.75 0 1 0-6.906 0c-2.568.838-4.768 2.608-6.196 5.077a.75.75 0 1 0 1.298.75C5.416 17.573 8.537 15.75 12 15.75c3.463 0 6.585 1.823 8.351 4.875a.75.75 0 1 0 1.298-.75M6.75 9a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0"
      />
    </G>
    <Defs>
      <ClipPath id="ic_my_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcMy;
