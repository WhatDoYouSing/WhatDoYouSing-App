import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcHidden = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_hidden_svg__a)">
      <Path
        fill="#33292C"
        d="M21.375 16.406a.75.75 0 0 1-1.024-.281l-1.781-3.113a11.6 11.6 0 0 1-3.383 1.562l.55 3.302a.75.75 0 0 1-.737.874.75.75 0 0 1-.739-.627l-.54-3.242c-1.142.159-2.299.159-3.44 0l-.54 3.242a.75.75 0 1 1-1.482-.247l.553-3.302a11.6 11.6 0 0 1-3.38-1.564l-1.776 3.115a.753.753 0 1 1-1.307-.75l1.875-3.281a14.4 14.4 0 0 1-1.809-1.875.75.75 0 1 1 1.168-.938C5.14 11.207 7.862 13.5 12 13.5s6.86-2.296 8.417-4.219a.75.75 0 1 1 1.166.938 14.4 14.4 0 0 1-1.81 1.875l1.876 3.281a.75.75 0 0 1-.274 1.031"
      />
    </G>
    <Defs>
      <ClipPath id="ic_hidden_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcHidden;
