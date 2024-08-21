import {statusCodes} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

export const handleError = (error: any) => {
  if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
    console.log('User cancelled the login flow', JSON.stringify(error));

    Alert.alert('Error', 'User cancelled the login flow. Please try again');
  } else if (error?.code === statusCodes?.IN_PROGRESS) {
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
    Alert.alert(
      'Error',
      `${error}` || 'Something went wrong. Please try again.',
    );
  }
};
