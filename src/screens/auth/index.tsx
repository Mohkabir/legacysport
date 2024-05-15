import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';

import LegacyBtn from '../../components/UI/button';
import Input from '../../components/UI/Input';
import LagacyText from '../../components/UI/text';
import {globalStyle} from '../../styles';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveAsyncStorage} from '../../utils';
import {IUserInfo} from '../../interfaces';

interface AuthProps {
  setIsAuth: any;
}

const Auth = ({setIsAuth}: AuthProps) => {
  const bgImage = require('../../assets/gettingStarted1.png');
  const GoogleIcon = require('../../assets/google-icon.png');
  const AppleIcon = require('../../assets/apple-icon.png');
  const [tab, setTab] = useState(0);

  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  const authData = [
    {
      title: 'Learn to play basketball Like a PRO',
      content:
        'Learn how to play basketball through instructional animations and text-based lessons that cover basic basketball skills ',
    },
    {title: 'Create account', content: 'Select an option'},
    {title: 'Log In', content: 'Select an option'},
  ];

  console.log(userInfo, 'userInfo');

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log(userInfo, 'is signed in userInfo...');
      setUserInfo(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log('user has not signed in yet...');
      } else {
        // some other error
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log(isSignedIn, 'isSignedIn');
    // setState({isLoginScreenPresented: !isSignedIn});
  };
  useEffect(() => {
    isSignedIn();
  }, []);

  // const saveUser = async (data: any) => {
  //   await AsyncStorage.setItem('user', JSON.stringify(data));
  // };

  const signIn = async () => {
    try {
      GoogleSignin.configure();
      await GoogleSignin.hasPlayServices();
      const data: IUserInfo = await GoogleSignin.signIn({
        webClientId:
          '434340160141-6thi8u8tnm19h56padkjma9rrs8fsiqu.apps.googleusercontent.com',
      });
      setUserInfo(data);
      saveAsyncStorage('user', data);
      setIsAuth();
    } catch (error: any) {
      if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow', JSON.stringify(error));
      } else if (error?.code === statusCodes.IN_PROGRESS) {
        console.log(
          'operation (e.g. sign in) is in progress already',
          JSON.stringify(error),
        );
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(
          'play services not available or outdated',
          JSON.stringify(error),
        );
      } else {
        console.log('some other error happened', JSON.stringify(error));
      }
    }
  };
  return (
    <View style={{...styles.wrap}}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}></View>
        <View style={styles.contents}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
            <Image
              style={styles.imgText}
              source={require('../../assets/legacy-white.png')}
            />
          </View>
          <LagacyText
            color="#ffffff"
            size={tab === 0 ? 'lg' : 'md'}
            value={authData[tab].title}
            weight="bold"
          />
          <LagacyText
            color="#ffffff"
            value={authData[tab].content}
            styles={{marginTop: 10}}
          />
          {tab === 0 ? (
            <View style={styles.btnGroup}>
              <LegacyBtn
                bg="#2A2D74"
                color="#ffffff"
                title="Get Started"
                style={{marginBottom: 20}}
                handlePress={() => setTab(1)}
              />
              <LegacyBtn title="Log In" handlePress={() => setTab(2)} />
            </View>
          ) : (
            <>
              <View style={styles.btnGroup}>
                <LegacyBtn
                  title="Continue with Google"
                  style={{marginBottom: 20}}
                  handlePress={() => {
                    signIn();
                    // setIsAuth()
                  }}
                  icon={GoogleIcon}
                />
                <LegacyBtn
                  bg="#000000"
                  color="#ffffff"
                  title="Continue with Apple"
                  handlePress={() => setIsAuth()}
                  icon={AppleIcon}
                />
              </View>
              <View style={styles.authSwitchWrap}>
                <LagacyText
                  color="#ffffff"
                  value={
                    tab === 1
                      ? 'Already have an account?'
                      : 'Don’t  have an account?'
                  }
                  styles={{marginTop: 10}}
                />

                <Pressable onPress={() => setTab(tab === 1 ? 2 : 1)}>
                  <LagacyText
                    color="#ffffff"
                    value={tab === 1 ? 'LOG IN' : 'Create an account'}
                    styles={{marginTop: 10}}
                    weight="semi-bold"
                  />
                </Pressable>
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    // borderWidth: 2,
    // borderColor: "blue",
    // backgroundColor: "red",
    flex: 1,
    // paddingTop: 60,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '104%',
  },
  contents: {
    // borderWidth: 2,
    // borderColor: "blue",
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logoWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 79,
    height: 79,
    marginBottom: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  btnGroup: {
    marginTop: 40,
  },
  head: {
    display: 'flex',
    alignItems: 'center',
  },
  authSwitchWrap: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#2A2D74',
  },
  text16: {
    fontSize: 16,
  },
});

export default Auth;
