import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import DashboardScreen from './src/screens/DashboardScreen';
import AddScreen from './src/screens/AddScreen';
import SettingScreen from './src/screens/SettingScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Tab() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notifications') {
            iconName = 'bell';
          } else if (route.name === 'Settings') {
            iconName = 'gear';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <BottomTab.Screen name="Home" component={DashboardScreen} />
      <BottomTab.Screen name="Notifications" component={NotificationsScreen} />
      <BottomTab.Screen name="Settings" component={SettingScreen} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
