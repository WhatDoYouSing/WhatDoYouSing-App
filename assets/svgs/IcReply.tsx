import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcReply = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_reply_svg__a)">
      <Path
        fill="#33292C"
        d="m21.53 14.78-4.5 4.5a.75.75 0 1 1-1.06-1.06L19.19 15H12a9.76 9.76 0 0 1-9.75-9.75.75.75 0 0 1 1.5 0A8.26 8.26 0 0 0 12 13.5h7.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.747.747 0 0 1 0 1.06"
      />
    </G>
    <Defs>
      <ClipPath id="ic_reply_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcReply;
