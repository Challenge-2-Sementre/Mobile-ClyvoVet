import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, typography, borderRadius, shadows } from '@styles/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  description: {
    fontSize: typography.md.fontSize,
    color: colors.gray,
    marginBottom: spacing.lg,
  },
  estimateCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginVertical: spacing.lg,
    ...shadows.md,
  },
  estimateTitle: {
    fontSize: typography.lg.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  estimateText: {
    fontSize: typography.md.fontSize,
    color: colors.primary,
  },
  responsesWrapper: {
    marginTop: spacing.lg,
  },
  responseCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  responseTitle: {
    fontSize: typography.md.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  responseText: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  warningCard: {
    backgroundColor: '#FFF4E5',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginTop: spacing.lg,
  },
  warningTitle: {
    fontSize: typography.lg.fontSize,
    fontWeight: '700',
    color: colors.danger,
    marginBottom: spacing.sm,
  },
  warningText: {
    fontSize: typography.sm.fontSize,
    color: colors.dark,
  },
});
