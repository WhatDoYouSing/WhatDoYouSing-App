import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Typo } from 'components/common';
import { IcPlus } from 'assets/svgs';

type ButtonType = 'filled' | 'ghost' | 'outline' | 'borderless';

interface FilledButtonProps extends TouchableOpacityProps {
  text: string;
  type?: ButtonType;
  hasIcon?: boolean;
  isSmall?: boolean;
  isActive?: boolean;
  className?: string;
}

const FilledButton = ({
  text,
  type = 'ghost',
  hasIcon = false,
  isSmall = false,
  isActive = true,
  className = '',
  ...props
}: FilledButtonProps) => {
  const sizeStyle = isSmall ? 'pt-3 pb-[11]' : 'pt-4 pb-[15]';

  let typeStyle = '';
  let textColor = 'text-black';

  if (!isActive) {
    typeStyle = `bg-primaryBg ${type === 'borderless' || 'border border-nonActiveGrey'}`;
    textColor = 'text-nonActiveGrey';
  } else {
    switch (type) {
      case 'filled':
        typeStyle = 'bg-black border border-black';
        textColor = 'text-secondaryBg';
        break;
      case 'ghost':
        typeStyle = 'bg-secondaryBg border border-black';
        textColor = 'text-black';
        break;
      case 'outline':
        typeStyle = 'bg-primaryBg border border-black';
        textColor = 'text-black';
        break;
      case 'borderless':
        typeStyle = 'bg-secondaryBg border-0';
        textColor = 'text-black';
        break;
      default:
        typeStyle = 'bg-secondaryBg border border-black';
        textColor = 'text-black';
        break;
    }
  }

  return (
    <TouchableOpacity
      {...props}
      className={`
        flex-row justify-center items-center gap-1 w-full rounded-[2]
        ${sizeStyle}
        ${typeStyle}
        ${className}
      `}
    >
      {hasIcon && <IcPlus width={18} height={18} />}
      <Typo variant="text-16_M" className={textColor}>
        {text}
      </Typo>
    </TouchableOpacity>
  );
};

export default FilledButton;
