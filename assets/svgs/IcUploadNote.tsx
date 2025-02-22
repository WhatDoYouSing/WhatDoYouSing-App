import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcUploadNote = (props: SvgProps) => (
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
      d="m22.633 4.948-7.5-2.25a.75.75 0 0 0-.966.719v10.149a4.5 4.5 0 1 0 1.5 3.35V4.424l6.534 1.96a.75.75 0 1 0 .432-1.436M11.167 19.916a3 3 0 1 1 0-5.999 3 3 0 0 1 0 6"
    />
  </Svg>
);
export default SvgIcUploadNote;
