/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

import Route from './src/route';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './src/context/appContext';

function App(): React.JSX.Element {
  // useEffect(() => {
  //   if (Platform.OS !== 'ios') {
  //     SplashScreen.hide();
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <AppProvider>
        <Route />
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;
