import * as React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';

import Splash from './screens/Splash';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Profile from './screens/Profile';

import SideMenuPage1 from './screens/SideMenuPage1';
import SideMenuPage2 from './screens/SideMenuPage2';
import SideMenuPage3 from './screens/SideMenuPage3';
import SideMenuPage4 from './screens/SideMenuPage4';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator headerMode="float" initialRouteName={Splash}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Splash'}}
        />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="sideMenu" component={sideMenu} />
        <Stack.Screen name="tabBar" component={tabBar} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const sideMenu = props => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: 'violet',
      width: 240,
    }}>
    <Drawer.Screen name="SideMenuPage1" component={SideMenuPage1} />
    <Drawer.Screen name="SideMenuPage2" component={SideMenuPage2} />
    <Drawer.Screen name="SideMenuPage3" component={SideMenuPage3} />
    <Drawer.Screen name="SideMenuPage4" component={SideMenuPage4} />
  </Drawer.Navigator>
);

const tabBar = props => (
  <NavigationNativeContainer>
    <Tab.Navigator>
      <Tab.Screen name="SideMenuPage1" component={SideMenuPage1} />
      <Tab.Screen name="SideMenuPage2" component={SideMenuPage2} />
    </Tab.Navigator>
  </NavigationNativeContainer>
);
export default App;
