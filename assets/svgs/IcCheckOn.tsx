import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcCheckOn = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_check_on_svg__a)">
      <Path
        fill="#FF005C"
        d="m21.53 7.28-12 12a.75.75 0 0 1-1.061 0l-5.25-5.25a.75.75 0 0 1 1.061-1.06L9 17.69 20.468 6.22a.75.75 0 1 1 1.061 1.06"
      />
    </G>
    <Defs>
      <ClipPath id="ic_check_on_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcCheckOn;
