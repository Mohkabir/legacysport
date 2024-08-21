import {Alert} from 'react-native';
import {getAsyncStorage, signOut} from '.';

export const apiCall = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any,
  token?: string,
) => {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else {
      const storedToken = await getAsyncStorage('token');
      if (storedToken) headers['Authorization'] = `Bearer ${storedToken}`;
    }

    const response = await fetch(
      `https://legacy-backend-zmmd.onrender.com/${endpoint}`,
      {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      },
    );

    if (!response.ok) {
      console.error('API Response Error:', response);

      if (response.status === 401) {
        Alert.alert(
          'Session expired',
          'Please login again',
          [
            {
              text: 'Login',
              onPress: async () => {
                await signOut();
              },
            },
          ],
          {cancelable: false},
        );
      }
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    console.error('API Call Error:', error.message);
    Alert.alert(
      'Error',
      error.message || 'An error occurred. Please try again later.',
    );
    throw error;
  }
};
