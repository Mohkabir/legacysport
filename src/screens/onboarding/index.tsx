import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Auth from '../auth';
import GettingStarted from '../GettingStarted';
import AcountSetup from '../account-setup';
import SplashSreen from '../SplashSreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  getAsyncStorage,
  saveAsyncStorage,
  signOut,
  viewAsyncStorage,
} from '../../utils';
import {NavigationProp} from '@react-navigation/native';

export default function Onboarding({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [loading, setloading] = useState(true);
  const [isGetStarted, setIsGetStarted] = useState<boolean | null>(true);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);

  const [isAuth, setIsAuth] = useState(false);

  const handleFinishOnboard = useCallback(async () => {
    console.log('going... home');
    await saveAsyncStorage('isOnboarded', true);
    navigation.navigate('Back home');
  }, [navigation]);

  const endLoading = () => {
    setloading(false);
  };
  useEffect(() => {
    setTimeout(endLoading, 1000);
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      const getIsGetStarted = (await getAsyncStorage('isGetStarted')) || true;
      setIsGetStarted(getIsGetStarted);
      await saveAsyncStorage('isGetStarted', getIsGetStarted);
      const token = await getAsyncStorage('token');
      const isOnboard = await getAsyncStorage('isOnboarded');
      setIsOnboarded(() => isOnboard);
      const isSignedIn = await GoogleSignin.isSignedIn();

      if (token && isSignedIn) {
        setIsAuth(true);
        await saveAsyncStorage('isAUth', true);
        if (isOnboarded) {
          navigation.navigate('Back home');
        }
      } else {
        setIsAuth(false);
        await saveAsyncStorage('isAUth', false);
        signOut();
      }
      getAss();
    };
    checkToken();
  }, [isOnboarded]);

  const getAss = async () => {
    const rr = await viewAsyncStorage();
    console.log(rr, 'all async values');
  };

  const finishGetStarted = async () => {
    console.log('saving isGetStarted to storage');
    await saveAsyncStorage('isGetStarted', false);
    setIsGetStarted(false);
    getAss();
  };
  return (
    <View style={styles.container}>
      {loading && <SplashSreen />}
      {isGetStarted && !loading && !isAuth && (
        <GettingStarted goToLogin={() => finishGetStarted()} />
      )}
      {!isGetStarted && !loading && !isAuth && (
        <Auth
          setIsAuth={() => {
            setIsAuth(true);
          }}
        />
      )}
      {!isOnboarded && !loading && isAuth && (
        <AcountSetup handleFinishOnboard={handleFinishOnboard} />
      )}
      <Text>Testingg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
