import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcFilterOn = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <G clipPath="url(#ic_filter_on_svg__a)">
      <Path
        fill="#FF005C"
        d="M3 18.64c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1m0-12c0 .55.45 1 1 1h9v-2H4c-.55 0-1 .45-1 1m10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1m-6-10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1m14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1m-5-3c.55 0 1-.45 1-1v-1h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1"
      />
    </G>
    <Defs>
      <ClipPath id="ic_filter_on_svg__a">
        <Path fill="#fff" d="M0 .64h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcFilterOn;
