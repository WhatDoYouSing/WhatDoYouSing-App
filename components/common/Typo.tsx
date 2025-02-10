import React from 'react';
import { Text, TextProps } from 'react-native';

export const getFontForText = (text: string): 'korean' | 'english' => {
  const koreanRegex = /[가-힣]/;
  return koreanRegex.test(text) ? 'korean' : 'english';
};

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
  | 'text-12_L';

// 디자인 시스템 토큰 매핑
interface TypographyToken {
  tailwindClass: string;
  fontSize: number;
  fontFamily: {
    korean: string;
    english: string;
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
  },
  'text-18_M': {
    tailwindClass: 'text-18_M',
    fontSize: 18,
    fontFamily: { korean: 'GothicA1-Medium', english: 'MinSansVF' },
  },
  'text-16_SB': {
    tailwindClass: 'text-16_SB',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
  },
  'text-16_B': {
    tailwindClass: 'text-16_B',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Bold', english: 'MinSansVF' },
  },
  'text-16_M': {
    tailwindClass: 'text-16_M',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Medium', english: 'MinSansVF' },
  },
  'text-16_R': {
    tailwindClass: 'text-16_R',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Regular', english: 'MinSansVF' },
  },
  'text-16_L': {
    tailwindClass: 'text-16_L',
    fontSize: 16,
    fontFamily: { korean: 'GothicA1-Light', english: 'MinSansVF' },
  },
  'text-14_SB': {
    tailwindClass: 'text-14_SB',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
  },
  'text-14_M': {
    tailwindClass: 'text-14_M',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-Medium', english: 'MinSansVF' },
  },
  'text-14_R': {
    tailwindClass: 'text-14_R',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-Regular', english: 'MinSansVF' },
  },
  'text-14_L': {
    tailwindClass: 'text-14_L',
    fontSize: 14,
    fontFamily: { korean: 'GothicA1-Light', english: 'MinSansVF' },
  },
  'text-12_SB': {
    tailwindClass: 'text-12_SB',
    fontSize: 12,
    fontFamily: { korean: 'GothicA1-SemiBold', english: 'MinSansVF' },
  },
  'text-12_L': {
    tailwindClass: 'text-12_L',
    fontSize: 12,
    fontFamily: { korean: 'GothicA1-Light', english: 'MinSansVF' },
  },
};

interface CustomTextProps extends TextProps {
  variant?: Variant;
  children: string;
  className?: string;
}

const Typo = ({
  variant = 'text-14_SB',
  children,
  style,
  className = '',
  ...rest
}: CustomTextProps): JSX.Element => {
  const language = getFontForText(children);
  const token = typographyMapping[variant];
  const selectedFontFamily = token.fontFamily[language];
  return (
    <Text
      {...rest}
      className={`${token.tailwindClass} ${className}`}
      style={[{ fontFamily: selectedFontFamily, fontSize: token.fontSize }, style]}
    >
      {children}
    </Text>
  );
};

export default Typo;
