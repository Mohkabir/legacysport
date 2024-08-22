import React from 'react';
import Onboarding from './screens/onboarding';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import League from './screens/tabs-section/league';
import More from './screens/tabs-section/more/index.tsx';
import Store from './screens/tabs-section/store';
import Welcome from './screens/tabs-section/home/index.tsx';
import Training from './screens/tabs-section/home/training';
import Contents from './screens/tabs-section/home/content';
import StartContents from './screens/tabs-section/home/start-contents';
import StartLoader from './screens/tabs-section/home/start-loading';
import {appRoutes} from './constants/index.ts';
// import {Ionicons} from '@expo/vector-icons';

export default function Route() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const MainApp = () => {
    // const activeColor = '#2A2D74';
    const checkActive = (focused: any) => {
      return focused ? '#2A2D74' : 'gray';
    };

    return (
      <Tab.Navigator>
        <Tab.Screen
          name={appRoutes.HOME}
          component={Welcome}
          options={{
            headerShown: false,
            tabBarLabel: ({focused}) => {
              return <Text style={{color: checkActive(focused)}}>HOME</Text>;
            },
            // tabBarIcon: ({focused, size, color}) => (
            //   <Ionicons name="home" size={size} color={checkActive(focused)} />
            // ),
          }}
        />
        <Tab.Screen
          name={appRoutes.STORE}
          component={Store}
          options={{
            headerShown: false,
            tabBarLabel: ({focused}) => {
              return <Text style={{color: checkActive(focused)}}>STORE</Text>;
            },
            // tabBarIcon: ({focused, size}) => (
            //   <Ionicons name="home" size={size} color={checkActive(focused)} />
            // ),
          }}
        />
        <Tab.Screen
          name={appRoutes.LEAGUE}
          component={League}
          options={{
            headerShown: false,
            tabBarLabel: ({focused}) => {
              return <Text style={{color: checkActive(focused)}}>LEAGUE</Text>;
            },
            // tabBarIcon: ({focused, size}) => (
            //   <Ionicons name="home" size={size} color={checkActive(focused)} />
            // ),
          }}
        />
        <Tab.Screen
          name={appRoutes.MORE}
          component={More}
          options={{
            headerShown: false,
            tabBarLabel: ({focused}) => {
              return <Text style={{color: checkActive(focused)}}>MORE</Text>;
            },
            // tabBarIcon: ({focused, size}) => (
            //   <Ionicons
            //     name="menu-outline"
            //     size={size}
            //     color={checkActive(focused)}
            //   />
            // ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen
        name={appRoutes.ONBOARDING}
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={appRoutes.BACKHOME}
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={appRoutes.TRAINING}
        component={Training}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={appRoutes.STARTLOADER}
        component={StartLoader}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={appRoutes.CONTENTS}
        component={Contents}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={appRoutes.STARTCONTENTS}
        component={StartContents}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
