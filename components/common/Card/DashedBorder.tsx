import React, { useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface DashedBorderProps {
  children: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  dashArray?: string; // 예: "10,5" → dash 길이 10, 간격 5
  className?: string;
}

const DashedBorder = ({
  children,
  borderColor = '#33292C',
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
