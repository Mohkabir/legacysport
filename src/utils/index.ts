import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const saveAsyncStorage = async (key: string, data: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const getAsyncStorage = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const deleteAsyncStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const signOut = async () => {
  GoogleSignin.configure();
  try {
    deleteAsyncStorage('token');
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};
