import React, {useEffect, ReactNode} from 'react';
import {getAsyncStorage} from '../../utils';
import {appRoutes, asyncStorageKeys} from '../../constants';
import {NavigationProp} from '@react-navigation/native';

interface AuthGuardProps {
  children: ReactNode;
  navigation: NavigationProp<any>;
}

const AuthGuard: React.FC<AuthGuardProps> = ({children, navigation}) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await getAsyncStorage(asyncStorageKeys.TOKEN);
      if (!token) {
        navigation.navigate(appRoutes.ONBOARDING);
      }
    };
    checkToken();
  }, [navigation]);

  return <>{children}</>;
};

export default AuthGuard;
