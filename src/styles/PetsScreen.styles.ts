import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, typography } from '@styles/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  emptyTitle: {
    fontSize: typography.xl.fontSize,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    fontSize: typography.md.fontSize,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  addButton: {
    width: '100%',
  },
  footerButton: {
    padding: spacing.lg,
  },
});
