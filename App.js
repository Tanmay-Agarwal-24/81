import *as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import DrawerNavigator from './navigators/DrawerNavigator';


export default function App() {
  return (
    <NavigationContainer >
      <DrawerNavigator/>
    </NavigationContainer>

  );
}

