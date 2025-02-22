import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcLink = (props: SvgProps) => (
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
      d="M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.751.751 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0m4.683-4.682a5.25 5.25 0 0 0-7.425 0L9.97 6.605a.75.75 0 1 0 1.06 1.061l2.819-2.812a3.75 3.75 0 0 1 5.304 5.302l-2.82 2.818a.75.75 0 0 0 1.06 1.061l2.82-2.822a5.25 5.25 0 0 0 0-7.425M12.97 16.333l-2.818 2.818a3.75 3.75 0 1 1-5.303-5.303l2.817-2.817A.75.75 0 0 0 6.605 9.97l-2.817 2.818a5.25 5.25 0 0 0 7.425 7.425l2.818-2.82a.75.75 0 0 0-1.061-1.06"
    />
  </Svg>
);
export default SvgIcLink;
