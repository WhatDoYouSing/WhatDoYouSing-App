import React, { useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import colors from 'styles/colors';
import { DashedBorderProps } from 'types/Card/CardType';

const DashedBorder = ({
  children,
  borderColor = colors.black,
  borderWidth = 1,
  borderRadius = 2,
  dashArray = '8,4',
  className,
}: DashedBorderProps) => {
  const [layout, setLayout] = useState<{ width: number; height: number } | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  };

  return (
    <View onLayout={handleLayout} className={`relative ${className ?? ''}`}>
      {children}
      {layout && (
        <Svg
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: layout.width,
            height: layout.height,
          }}
        >
          <Rect
            x={borderWidth / 2}
            y={borderWidth / 2}
            width={layout.width - borderWidth}
            height={layout.height - borderWidth}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderWidth}
            strokeDasharray={dashArray}
            rx={borderRadius}
            ry={borderRadius}
          />
        </Svg>
      )}
    </View>
  );
};

export default DashedBorder;
