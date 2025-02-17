import React from 'react';
import Svg, { Line } from 'react-native-svg';
import colors from 'styles/colors';

interface DashedLineProps {
  width?: number | string;
  color?: string;
  dashArray?: string;
  strokeWidth?: number;
}

const DashedLine = ({
  width = '100%',
  color = colors.black,
  dashArray = '4,2',
  strokeWidth = 1,
}: DashedLineProps) => {
  return (
    <Svg width={width} height={strokeWidth * 2}>
      <Line
        x1="0"
        y1={strokeWidth}
        x2={width}
        y2={strokeWidth}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
      />
    </Svg>
  );
};

export default DashedLine;
