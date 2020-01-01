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
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

const tabBar = props => (
  <NavigationNativeContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationNativeContainer>
);
export default App;
