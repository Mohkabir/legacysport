import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Auth from '../auth';
import GettingStarted from '../getting-started';
import AcountSetup from '../account-setup';
import SplashSreen from '../splash-sreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  getAsyncStorage,
  saveAsyncStorage,
  signOut,
  viewAsyncStorage,
} from '../../utils';
import {NavigationProp} from '@react-navigation/native';
import {appRoutes, asyncStorageKeys} from '../../constants';

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
    await saveAsyncStorage(asyncStorageKeys.ISONBOARDED, true);
    navigation.navigate(appRoutes.BACKHOME);
  }, [navigation]);

  const endLoading = () => {
    setloading(false);
  };
  useEffect(() => {
    setTimeout(endLoading, 1000);
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      const getIsGetStarted =
        (await getAsyncStorage(asyncStorageKeys.ISGETSTARTED)) || true;
      setIsGetStarted(getIsGetStarted);
      await saveAsyncStorage(asyncStorageKeys.ISGETSTARTED, getIsGetStarted);
      const token = await getAsyncStorage(asyncStorageKeys.TOKEN);
      const isOnboard = await getAsyncStorage(asyncStorageKeys.ISONBOARDED);
      setIsOnboarded(() => isOnboard);
      const isSignedIn = await GoogleSignin.isSignedIn();

      if (token && isSignedIn) {
        setIsAuth(true);
        await saveAsyncStorage(asyncStorageKeys.ISAUTH, true);
        if (isOnboarded) {
          navigation.navigate(appRoutes.BACKHOME);
        }
      } else {
        setIsAuth(false);
        await saveAsyncStorage(asyncStorageKeys.ISAUTH, false);
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
    await saveAsyncStorage(asyncStorageKeys.ISGETSTARTED, false);
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
      {/* <Text>Testingg</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
