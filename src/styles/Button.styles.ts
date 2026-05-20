import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, borderRadius, typography } from '@styles/spacing';

export const styles = StyleSheet.create({
  baseButton: {
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const buttonSizes: Record<'small' | 'medium' | 'large', ViewStyle> = {
  small: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
  medium: { paddingVertical: spacing.md, paddingHorizontal: spacing.lg },
  large: { paddingVertical: spacing.lg, paddingHorizontal: spacing.xl },
};

export const getButtonVariantStyle = (
  variant: 'primary' | 'secondary' | 'danger' | 'outline',
  disabled: boolean
): ViewStyle => {
  const variantStyles: Record<string, ViewStyle> = {
    primary: {
      backgroundColor: disabled ? colors.gray : colors.primary,
    },
    secondary: {
      backgroundColor: disabled ? colors.grayLight : colors.secondary,
    },
    danger: {
      backgroundColor: disabled ? colors.gray : colors.danger,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: disabled ? colors.gray : colors.primary,
    },
  };

  return variantStyles[variant];
};

export const getTextStyle = (
  variant: 'primary' | 'secondary' | 'danger' | 'outline',
  disabled: boolean
): TextStyle => ({
  color: variant === 'outline' && !disabled ? colors.primary : colors.white,
  fontSize: typography.md.fontSize,
  fontWeight: '600',
});
