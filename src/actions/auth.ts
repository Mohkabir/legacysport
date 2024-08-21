import {saveAsyncStorage} from '../utils';
import {handleError} from '../utils/error';

export const getSignedToken = async (userData: any) => {
  try {
    const payload = {
      email: userData?.user?.email,
      displayName: userData?.user?.name,
    };
    console.log(
      '--------',
      '\n',
      '\n',
      '\n',
      payload,
      'payload........',
      '\n',
      '\n',
      '\n',
    );

    const response = await fetch(
      'https://legacy-backend-zmmd.onrender.com/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(response, 'response error');
      //   console.log('\n \n \n \n', '---data---', data, '\n \n \n \n');
      //   console.log('\n \n \n \n', '---token---', data?.token, '\n \n \n \n');
      return {error: data?.message || 'An error occurred'};
    } else {
      await saveAsyncStorage('token', data.token);
      return {
        data: data,
      };
    }
  } catch (error) {
    handleError(error);
  }
};
