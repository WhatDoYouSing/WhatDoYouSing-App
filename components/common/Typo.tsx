import React, { ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

//내용 따라 폰트 설정값 바꾸는 함수
export const getFontForText = (text: ReactNode): 'korean' | 'english' => {
  if (typeof text === 'string') {
    return /[가-힣]/.test(text) ? 'korean' : 'english';
  }
  // ReactNode를 문자열로 변환
  const textContent = React.Children.toArray(text).join('');
  return /[가-힣]/.test(textContent) ? 'korean' : 'english';
};

// 사용 가능한 variant 목록
export type Variant =
  | 'text-20_SB'
  | 'text-18_SB'
  | 'text-18_M'
  | 'text-16_SB'
  | 'text-16_B'
  | 'text-16_M'
  | 'text-16_R'
  | 'text-16_L'
  | 'text-14_SB'
  | 'text-14_M'
  | 'text-14_R'
  | 'text-14_L'
  | 'text-12_SB'
  | 'text-12_L'
  | 'text-12_R';

// 디자인 시스템 토큰 매핑
interface TypographyToken {
  tailwindClass: string;
  fontSize: number;
  fontFamily: {
    korean: string;
    english: string;
  };
  fontWeight?: {
    korean?: string;
    english?: string;
  };
}

const typographyMapping: Record<Variant, TypographyToken> = {
  'text-20_SB': {
    tailwindClass: 'text-20_SB',
    fontSize: 20,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
  },
  'text-18_SB': {
    tailwindClass: 'text-18_SB',
    fontSize: 18,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
    fontWeight: { english: '600' },
  },
  'text-18_M': {
    tailwindClass: 'text-18_M',
    fontSize: 18,
    fontFamily: { korean: 'GothicA1-Medium', english: 'MinSansVF' },
    fontWeight: { english: '500' },
  },
  'text-16_SB': {
    tailwindClass: 'text-16_SB',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
    fontWeight: { english: '600' },
  },
  'text-16_B': {
    tailwindClass: 'text-16_B',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Bold', english: 'MinSansVF' },
    fontWeight: { english: '700' },
  },
  'text-16_M': {
    tailwindClass: 'text-16_M',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Medium', english: 'MinSansVF' },
    fontWeight: { english: '500' },
  },
  'text-16_R': {
    tailwindClass: 'text-16_R',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Regular', english: 'MinSansVF' },
    fontWeight: { english: '400' },
  },
  'text-16_L': {
    tailwindClass: 'text-16_L',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Light', english: 'MinSansVF' },
    fontWeight: { english: '300' },
  },
  'text-14_SB': {
    tailwindClass: 'text-14_SB',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
    fontWeight: { english: '600' },
  },
  'text-14_M': {
    tailwindClass: 'text-14_M',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-Medium', english: 'MinSansVF' },
    fontWeight: { english: '500' },
  },
  'text-14_R': {
    tailwindClass: 'text-14_R',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-Regular', english: 'MinSansVF' },
    fontWeight: { english: '400' },
  },
  'text-14_L': {
    tailwindClass: 'text-14_L',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-Light', english: 'MinSansVF' },
    fontWeight: { english: '300' },
  },
  'text-12_SB': {
    tailwindClass: 'text-12_SB',
    fontSize: 12,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
    fontWeight: { english: '600' },
  },
  'text-12_L': {
    tailwindClass: 'text-12_L',
    fontSize: 12,
    fontFamily: { korean: 'GothicA1-Light', english: 'MinSansVF' },
    fontWeight: { english: '300' },
  },
  'text-12_R': {
    tailwindClass: 'text-12_R',
    fontSize: 12,
    fontFamily: { korean: 'GothicA1-Regular', english: 'MinSansVF' },
    fontWeight: { english: '400' },
  },
};

interface CustomTextProps extends TextProps {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}

const Typo = ({
  variant = 'text-14_SB',
  children,
  style,
  className = '',
  ...rest
}: CustomTextProps) => {
  const textContent = typeof children === 'string' ? children : '';
  const language = getFontForText(children);
  const token = typographyMapping[variant];

  //폰트 설정
  const selectedFontFamily = token.fontFamily[language];
  const weightStyle: TextStyle = token.fontWeight
    ? { fontWeight: token.fontWeight[language] as TextStyle['fontWeight'] }
    : {};
  return (
    <Text
      {...rest}
      className={`${token.tailwindClass} ${className} shrink`}
      style={[
        { fontFamily: selectedFontFamily, fontSize: token.fontSize },
        weightStyle,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typo;
