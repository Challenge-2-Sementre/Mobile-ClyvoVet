import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from '@data/AppContext';
import { HomeScreen } from '@screens/HomeScreen';
import { PetsScreen } from '@screens/PetsScreen';
import { AddPetScreen } from '@screens/AddPetScreen';
import { PetDetailsScreen } from '@screens/PetDetailsScreen';
import { VetAIScreen } from '@screens/VetAIScreen';
import { SettingsScreen } from '@screens/SettingsScreen';
import { colors } from '@styles/colors';
import { typography } from '@styles/spacing';
import { FAIcon, Icons } from '@components/FontAwesomeIcon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PetsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Pets" component={PetsScreen} />
    <Stack.Screen name="AddPet" component={AddPetScreen} />
    <Stack.Screen name="PetDetails" component={PetDetailsScreen} />
  </Stack.Navigator>
);

const TabIcon: React.FC<{ icon: any }> = ({ icon }) => (
  <FAIcon icon={icon} size={24} />
);

const createTabIcon = (icon: any) => () => <TabIcon icon={icon} />;

export const AppNavigator = () => (
  <AppProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.grayLight,
            borderTopWidth: 1,
            paddingBottom: 8,
            paddingTop: 8,
            height: 62,
          },
          tabBarLabelStyle: {
            fontSize: typography.xs.fontSize,
            fontWeight: '600',
            marginTop: 2,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            tabBarLabel: 'Início',
            tabBarIcon: createTabIcon(Icons.home),
          }}
        />
        <Tab.Screen
          name="PetsTab"
          component={PetsNavigator}
          options={{
            title: 'Pets',
            tabBarLabel: 'Pets',
            tabBarIcon: createTabIcon(Icons.paw),
          }}
        />
        <Tab.Screen
          name="VetAI"
          component={VetAIScreen}
          options={{
            title: 'Vet AI',
            tabBarLabel: 'Vet AI',
            tabBarIcon: createTabIcon(Icons.robot),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Configurações',
            tabBarLabel: 'Configurações',
            tabBarIcon: createTabIcon(Icons.cog),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </AppProvider>
);
