import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Auth from '../auth';
import GettingStarted from '../GettingStarted';
import AcountSetup from '../account-setup';
import SplashSreen from '../SplashSreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getAsyncStorage, saveAsyncStorage} from '../../utils';

export default function Onboarding({navigation}) {
  const [loading, setloading] = useState(true);
  const [isGetStarted, setIsGetStarted] = useState(
    getAsyncStorage('isGetStarted') || false,
  );
  const [isAuth, setIsAuth] = useState(false);

  const endLoading = () => {
    setloading(false);
  };

  useEffect(() => {
    setTimeout(endLoading, 2000);
  }, []);

  const handleFinishOnboard = () => {
    navigation.navigate('Back home');
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsAuth(isSignedIn);
    console.log(isSignedIn, 'isSignedIn');
  };
  useEffect(() => {
    isSignedIn();
  }, []);

  // getItem();
  useEffect(() => {
    saveAsyncStorage('isGetStarted', isGetStarted);
  }, [isGetStarted]);

  const signOut = async () => {
    GoogleSignin.configure();
    try {
      const res = await GoogleSignin.signOut();
      // setState({user: null});
      console.log(res, 'res---');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <SplashSreen />}
      {!isGetStarted && !loading && (
        <GettingStarted login={() => setIsGetStarted(true)} />
      )}
      {isGetStarted && !loading && !isAuth && (
        <Auth setIsAuth={() => setIsAuth(true)} />
      )}
      {isGetStarted && !loading && isAuth && (
        <AcountSetup handleFinishOnboard={handleFinishOnboard} />
      )}

      {/* <AcountSetup handleFinishOnboard={handleFinishOnboard} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
