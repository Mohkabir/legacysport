import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAsyncStorage = async (key: string, data: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const getAsyncStorage = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
