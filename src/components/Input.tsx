import React from 'react';
import { View, TextInput, TextInputProps, Text } from 'react-native';
import { styles } from '../styles/Input.styles';
import { colors } from '@styles/colors';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error ? styles.inputError : undefined]}
        placeholderTextColor={colors.gray}
        placeholder={placeholder}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

