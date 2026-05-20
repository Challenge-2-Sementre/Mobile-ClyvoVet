import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing, typography, shadows } from '@styles/spacing';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.primary,
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.md,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: typography.xl.fontSize,
    fontWeight: '700',
    color: colors.white,
  },
  backButton: {
    padding: spacing.md,
  },
  backButtonText: {
    fontSize: typography.xl.fontSize,
    color: colors.white,
    fontWeight: 'bold',
  },
});
