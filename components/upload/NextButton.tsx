import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface NextButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  isBorder?: boolean;
  isActive?: boolean;
  className?: string;
}

const NextButton = ({
  children,
  isBorder = true,
  isActive = false,
  className = '',
  ...props
}: NextButtonProps) => {
  const borderStyle = isBorder ? 'border border-black' : '';
  const backgroundStyle = isActive ? 'bg-black' : 'bg-secondaryBg';

  return (
    <TouchableOpacity
      {...props}
      className={`flex-row justify-center items-center gap-1 pt-4 pb-[15] w-full rounded-[2] ${backgroundStyle} ${borderStyle} ${className}`}
    >
      {children}
    </TouchableOpacity>
  );
};

export default NextButton;
