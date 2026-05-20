import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, borderRadius, shadows, typography } from '@styles/spacing';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.lg,
    ...shadows.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: typography.xl.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  tutor: {
    fontSize: typography.sm.fontSize,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  extra: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
  },
  badgeContainer: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  badgeText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: typography.sm.fontSize,
  },
});
