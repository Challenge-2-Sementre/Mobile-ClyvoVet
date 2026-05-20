import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, typography, shadows, borderRadius } from '@styles/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.lg.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.md,
  },
  settingItem: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  settingLabel: {
    fontSize: typography.md.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  settingDescription: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
  },
  aboutCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.md,
  },
  appName: {
    fontSize: typography.xxl.fontSize,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  version: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: typography.md.fontSize,
    color: colors.dark,
    marginBottom: spacing.md,
  },
  featureItem: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  buttonGroup: {
    marginTop: spacing.sm,
  },
});
