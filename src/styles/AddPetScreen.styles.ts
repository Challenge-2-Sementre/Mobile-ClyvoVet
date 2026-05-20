import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { spacing } from '@styles/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  buttons: {
    marginTop: spacing.lg,
  },
});
