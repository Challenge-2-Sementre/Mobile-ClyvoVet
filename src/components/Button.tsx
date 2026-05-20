import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ViewStyle } from 'react-native';
import {
  styles as buttonStyles,
  buttonSizes,
  getButtonVariantStyle,
  getTextStyle,
} from '../styles/Button.styles';
import { shadows } from '@styles/spacing';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  ...props
}) => {
  const getButtonStyle = (): ViewStyle => {
    return {
      ...buttonStyles.baseButton,
      ...buttonSizes[size],
      ...getButtonVariantStyle(variant, disabled),
    } as ViewStyle;
  };

  const textStyle = getTextStyle(variant, disabled);

  return (
    <TouchableOpacity
      style={[getButtonStyle(), shadows.md, style]}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7}
      {...props}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
