import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIcCommentOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#ic_comment_off_svg__a)">
      <Path
        fill="#33292C"
        d="M21.757 17.509a7.5 7.5 0 0 0-5.86-10.704A7.5 7.5 0 1 0 2.245 13.01l-.682 2.316a1.5 1.5 0 0 0 1.863 1.863l2.317-.681c.743.357 1.54.59 2.36.689a7.5 7.5 0 0 0 10.157 3.81l2.317.682a1.5 1.5 0 0 0 1.862-1.862zM5.813 14.953a.8.8 0 0 0-.212.03L3 15.75l.765-2.602a.75.75 0 0 0-.059-.563 6 6 0 1 1 2.462 2.462.75.75 0 0 0-.356-.094m14.418 2.694L21 20.25l-2.603-.766a.75.75 0 0 0-.563.06 6.005 6.005 0 0 1-8.05-2.333 7.493 7.493 0 0 0 6.593-8.8 6 6 0 0 1 3.915 8.67.75.75 0 0 0-.06.566z"
      />
    </G>
    <Defs>
      <ClipPath id="ic_comment_off_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIcCommentOff;
