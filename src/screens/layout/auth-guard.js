import React, {useEffect} from 'react';
import {getAsyncStorage} from '../../utils';
import {View} from 'react-native';

const AuthGuard = ({children, navigation}) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await getAsyncStorage('token');
      if (!token) {
        // setIsAuth(true);
        navigation.navigate('onboarding');
      }
    };
    checkToken();
  }, []);
  return <>{children}</>;
};

export default AuthGuard;
