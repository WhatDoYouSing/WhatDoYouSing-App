import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcViewAll = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_view_all_svg__a)">
      <Path
        fill="#33292C"
        d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25m8.214 9H16.48c-.168-3.423-1.486-5.843-2.567-7.275a8.27 8.27 0 0 1 6.302 7.275m-11.192 1.5h5.956c-.216 3.9-2.084 6.292-2.978 7.219-.895-.928-2.762-3.319-2.978-7.219m0-1.5c.216-3.9 2.084-6.292 2.978-7.219.895.931 2.762 3.322 2.978 7.219zm1.065-7.275c-1.081 1.432-2.4 3.852-2.567 7.275H3.785a8.27 8.27 0 0 1 6.302-7.275M3.785 12.75H7.52c.17 3.423 1.486 5.843 2.567 7.275a8.27 8.27 0 0 1-6.302-7.275m10.125 7.275c1.08-1.432 2.396-3.852 2.567-7.275h3.735a8.27 8.27 0 0 1-6.299 7.275z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_view_all_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcViewAll;
