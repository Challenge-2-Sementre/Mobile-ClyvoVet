import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Header.styles';
import { FAIcon, Icons } from './FontAwesomeIcon';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  showBackButton = false,
  rightComponent,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          {showBackButton && (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <FAIcon icon={Icons.arrowLeft} size={24} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.rightContainer}>
          {rightComponent}
        </View>
      </View>
    </SafeAreaView>
  );
};

