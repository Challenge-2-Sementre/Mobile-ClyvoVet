import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faPaw,
  faRobot,
  faCog,
  faArrowLeft,
  faCheck,
  faTimes,
  faPlus,
  faSearch,
  faTrash,
  faPencil,
  faCalendar,
  faSyringe,
  faStethoscope,
  faHeartPulse,
  faBook,
  faBell,
  faUser,
  faSignOut,
  faEye,
  faEyeSlash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { ViewStyle } from 'react-native';
import { colors } from '@styles/colors';

export interface FontAwesomeIconProps {
  icon: IconDefinition;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export const FAIcon: React.FC<FontAwesomeIconProps> = ({
  icon,
  size = 24,
  color = colors.primary,
  style,
}) => (
  <FontAwesomeIcon
    icon={icon}
    size={size}
    color={color}
    style={style}
  />
);

// Icon exports for easy access
export const Icons = {
  home: faHome,
  paw: faPaw,
  robot: faRobot,
  cog: faCog,
  arrowLeft: faArrowLeft,
  check: faCheck,
  times: faTimes,
  plus: faPlus,
  search: faSearch,
  trash: faTrash,
  pencil: faPencil,
  calendar: faCalendar,
  syringe: faSyringe,
  stethoscope: faStethoscope,
  heartPulse: faHeartPulse,
  book: faBook,
  bell: faBell,
  user: faUser,
  signOut: faSignOut,
  eye: faEye,
  eyeSlash: faEyeSlash,
};
