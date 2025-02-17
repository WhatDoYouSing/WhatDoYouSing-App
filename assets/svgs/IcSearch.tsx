import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_search_svg__a)">
      <Path
        fill="#33292C"
        d="m21.53 20.47-4.693-4.694a8.26 8.26 0 1 0-1.06 1.06l4.693 4.695a.75.75 0 1 0 1.06-1.062M3.75 10.5a6.75 6.75 0 1 1 6.75 6.75 6.76 6.76 0 0 1-6.75-6.75"
      />
    </G>
    <Defs>
      <ClipPath id="ic_search_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcSearch;
