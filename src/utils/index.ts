import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const saveAsyncStorage = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving data to AsyncStorage with key ${key}:`, error);
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(
      `Error retrieving data from AsyncStorage with key ${key}:`,
      error,
    );
    return null;
  }
};

export const deleteAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(
      `Error deleting data from AsyncStorage with key ${key}:`,
      error,
    );
  }
};

export const signOut = async () => {
  GoogleSignin.configure();
  try {
    await deleteAsyncStorage('token');
    await deleteAsyncStorage('isAUth');
    await GoogleSignin.signOut();
    await AsyncStorage.clear();
    console.log(viewAsyncStorage(), ' viewAsyncStorage');
  } catch (error) {
    console.error('Error during sign out:', error);
  }
};

export const viewAsyncStorage = async () => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const allValues = await AsyncStorage.multiGet(allKeys);
    const result = allValues.map(([key, value]) => `${key}: ${value}`);
    return result;
  } catch (error) {
    console.error('Error retrieving AsyncStorage contents:', error);
    return [];
  }
};
