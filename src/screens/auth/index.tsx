import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Alert,
} from 'react-native';

import LegacyBtn from '../../components/UI/button';
import LagacyText from '../../components/UI/text';

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

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log(isSignedIn, 'isSignedIn');
    // setState({isLoginScreenPresented: !isSignedIn});
  };
  useEffect(() => {
    isSignedIn();
  }, []);

  const getSignedToken = async (userData: any) => {
    try {
      const payload = {
        email: userData?.user?.email,
        displayName: userData?.user?.displayName,
      };

      const response = await fetch(
        'https://legacy-backend-zmmd.onrender.com/user/createUser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );
      if (!response.ok) {
        console.log(response, 'response error');
        // throw new Error('Failed to send data to backend');
      }
      const data = await response.json();
      console.log('Data sent to backend:', data, 'token:', data.token);
      await saveAsyncStorage('token', data.token);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

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
      console.log('getting token...');
      await getSignedToken(data);
    } catch (error: any) {
      if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow', JSON.stringify(error));

        Alert.alert('Error', 'User cancelled the login flow. Please try again');
      } else if (error?.code === statusCodes.IN_PROGRESS) {
        console.log(
          'operation (e.g. sign in) is in progress already',
          JSON.stringify(error),
        );
        Alert.alert('Error', 'Operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(
          'play services not available or outdated',
          JSON.stringify(error),
        );
        Alert.alert('Error', 'Play services not available or outdated');
      } else {
        console.log('some other error happened', JSON.stringify(error));
        Alert.alert('Error', 'Something went wrong. Please try again.');
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
