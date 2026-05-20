import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, borderRadius, typography } from '@styles/spacing';

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.md.fontSize,
    fontWeight: '600',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: typography.md.fontSize,
    color: colors.dark,
    backgroundColor: colors.white,
  },
  inputError: {
    borderColor: colors.danger,
  },
  error: {
    color: colors.danger,
    fontSize: typography.sm.fontSize,
    marginTop: spacing.xs,
  },
});
