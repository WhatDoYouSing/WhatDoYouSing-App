import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcKebab = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_kebab_svg__a)">
      <Path
        fill="#33292C"
        d="M13.125 12a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M12 6.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m0 10.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25"
      />
    </G>
    <Defs>
      <ClipPath id="ic_kebab_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcKebab;
