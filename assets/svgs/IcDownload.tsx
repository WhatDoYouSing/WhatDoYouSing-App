import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcDownload = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#33292C"
      d="M21 13.5v6a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 19.5v-6a.75.75 0 1 1 1.5 0v5.25h15V13.5a.75.75 0 1 1 1.5 0m-9.53.53a.747.747 0 0 0 1.06 0l3.75-3.75a.75.75 0 1 0-1.06-1.06l-2.47 2.47V3a.75.75 0 1 0-1.5 0v8.69L8.78 9.22a.75.75 0 0 0-1.06 1.06z"
    />
  </Svg>
);
export default SvgIcDownload;
