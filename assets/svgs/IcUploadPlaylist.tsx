import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcUploadPlaylist = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      fill="#33292C"
      d="M3.666 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75m.75 6.75h11.25a.75.75 0 1 0 0-1.5H4.416a.75.75 0 1 0 0 1.5m6.75 4.5h-6.75a.75.75 0 1 0 0 1.5h6.75a.75.75 0 1 0 0-1.5m12.718-5.41a.75.75 0 0 1-.937.503l-2.781-.835V18a3.004 3.004 0 1 1-1.5-2.596V10.5a.75.75 0 0 1 .966-.718l3.75 1.125a.75.75 0 0 1 .502.934M18.666 18a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
    />
  </Svg>
);
export default SvgIcUploadPlaylist;
