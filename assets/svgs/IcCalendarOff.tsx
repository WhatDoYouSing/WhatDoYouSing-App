import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcCalendarOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_calendar_off_svg__a)">
      <Path
        fill="#33292C"
        d="M19.5 3h-2.25v-.75a.75.75 0 1 0-1.5 0V3h-7.5v-.75a.75.75 0 0 0-1.5 0V3H4.5A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3M6.75 4.5v.75a.75.75 0 0 0 1.5 0V4.5h7.5v.75a.75.75 0 1 0 1.5 0V4.5h2.25v3h-15v-3zm12.75 15h-15V9h15zm-6.375-7.125a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m4.125 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0M9 16.125a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m4.125 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0m4.125 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
      />
    </G>
    <Defs>
      <ClipPath id="ic_calendar_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcCalendarOff;
