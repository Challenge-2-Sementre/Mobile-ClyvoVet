import { Alert, Platform } from 'react-native';

interface ConfirmDestructiveActionOptions {
  title: string;
  message: string;
  confirmText: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
}

export const confirmDestructiveAction = ({
  title,
  message,
  confirmText,
  cancelText = 'Cancelar',
  onConfirm,
}: ConfirmDestructiveActionOptions) => {
  if (Platform.OS === 'web') {
    const confirm = (globalThis as unknown as { confirm?: (message: string) => boolean }).confirm;

    if (confirm?.(`${title}\n\n${message}`)) {
      void onConfirm();
    }

    return;
  }

  Alert.alert(title, message, [
    { text: cancelText, style: 'cancel' },
    {
      text: confirmText,
      style: 'destructive',
      onPress: () => {
        void onConfirm();
      },
    },
  ]);
};
