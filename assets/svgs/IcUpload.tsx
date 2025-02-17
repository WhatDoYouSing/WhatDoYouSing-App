import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcUpload = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_upload_svg__a)">
      <Path
        fill={props.fill || '#33292C'}
        d="m21.31 6.878-4.188-4.19a1.5 1.5 0 0 0-2.122 0L3.44 14.25A1.49 1.49 0 0 0 3 15.31v4.19A1.5 1.5 0 0 0 4.5 21h4.19a1.49 1.49 0 0 0 1.06-.44L21.31 9a1.5 1.5 0 0 0 0-2.122M8.69 19.5H4.5v-4.19l8.25-8.25 4.19 4.19zM18 10.189 13.81 6l2.25-2.25 4.19 4.189z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_upload_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcUpload;
