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
  const [isAuth, setIsAuth] = useState(getAsyncStorage('isAuth') || false);

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
    saveAsyncStorage('isAUth', isSignedIn);
    console.log(isSignedIn, 'isSignedIn');

    if (!isSignedIn) {
    }
  };
  useEffect(() => {
    isSignedIn();
  }, []);

  useEffect(() => {
    saveAsyncStorage('isGetStarted', isGetStarted);
  }, [isGetStarted]);

  const signOut = async () => {
    GoogleSignin.configure();
    try {
      const res = await GoogleSignin.signOut();
      console.log(res, 'res---');
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const checkToken = async () => {
      const token = await getAsyncStorage('token');

      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        signOut();
      }
    };
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <SplashSreen />}
      {!isGetStarted && !loading && (
        <GettingStarted login={() => setIsGetStarted(true)} />
      )}
      {!loading && !isAuth && <Auth setIsAuth={() => setIsAuth(true)} />}
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
