import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface NextButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

const NextButton = ({
  children,
  isActive = true,
  className = '',
  ...props
}: NextButtonProps) => {
  const isActiveStyle = isActive
    ? 'bg-secondaryBg border border-black'
    : 'bg-primaryBg border border-nonActiveGrey';

  return (
    <TouchableOpacity
      {...props}
      className={`flex-row justify-center items-center gap-1 pt-4 pb-[15] w-full rounded-[2] ${isActiveStyle} ${className}`}
    >
      {children}
    </TouchableOpacity>
  );
};

export default NextButton;
