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
  heroTitle: {
    fontSize: typography.xxl.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    fontSize: typography.md.fontSize,
    color: colors.gray,
    lineHeight: 22,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  infoCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginRight: spacing.sm,
    ...shadows.sm,
  },
  infoValue: {
    fontSize: typography.xxl.fontSize,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  infoLabel: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  smallCard: {
    flex: 1,
    backgroundColor: '#E8F8F3',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  smallCardTitle: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
    marginBottom: spacing.xs,
  },
  smallCardSubtitle: {
    fontSize: typography.md.fontSize,
    fontWeight: '700',
    color: colors.dark,
  },
  alertCard: {
    backgroundColor: '#FFFBF0',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  alertTitle: {
    fontSize: typography.lg.fontSize,
    fontWeight: '700',
    color: colors.danger,
    marginBottom: spacing.xs,
  },
  alertSubtitle: {
    fontSize: typography.md.fontSize,
    color: colors.dark,
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
  tipItem: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  tipText: {
    fontSize: typography.sm.fontSize,
    color: colors.dark,
  },
  vetItem: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  vetName: {
    fontSize: typography.md.fontSize,
    fontWeight: '700',
    color: colors.dark,
  },
  vetDistance: {
    fontSize: typography.sm.fontSize,
    color: colors.gray,
  },
  actions: {
    marginBottom: spacing.xxxl,
  },
});
