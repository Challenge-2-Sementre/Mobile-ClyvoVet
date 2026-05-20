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
  heroCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  petName: {
    fontSize: typography.xxl.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  petMeta: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.lg.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  sectionItem: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  sectionText: {
    fontSize: typography.md.fontSize,
    color: colors.dark,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  emptyTitle: {
    fontSize: typography.xl.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  emptyDescription: {
    fontSize: typography.md.fontSize,
    color: colors.gray,
    textAlign: 'center',
  },
});
