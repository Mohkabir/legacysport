import {useContext, useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  View,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import LagacyText from '../../../components/UI/text';
import {globalStyle} from '../../../styles';
import {getAsyncStorage, signOut} from '../../../utils';
import {AppContext} from '../../../context/appContext';

export default function LoadingContents({handleBack, navigation, goto}) {
  const loaderImg = require('../../../assets/loaderImg.png');
  const close = require('../../../assets/close.png');

  const {setContents} = useContext(AppContext);

  const handleGoToContent = () => {
    navigation.navigate(goto);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleGoToContent();
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    // isSignedIn();
    getContents();
  }, []);

  const getContents = async () => {
    const token = await getAsyncStorage('token');
    console.log('before getting contents, token: ', token);
    try {
      const response = await fetch(
        'https://legacy-backend-zmmd.onrender.com/training/allExercise?trainingSection=Drills&skillLevel=Intermediate',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        console.log(response, 'response error');
      }
      const data = await response.json();

      if (data?.statusCode === 401) {
        Alert.alert(
          'Session expired',
          'Please login again',
          [
            {
              text: 'Login',
              onPress: async () => {
                await signOut();
                navigation.navigate('onboarding');
              },
            },
          ],
          {cancelable: false},
        );
        handleBack();
      }
      if (data[0]?.trainingDescription) {
        setContents(data[0]?.trainingDescription);
        console.log(' Contents sent to backend:', data);
        console.log(data[0]?.trainingDescription, 'data?.trainingDescription');
        handleGoToContent();
      } else {
        handleBack();
      }
    } catch (error) {
      handleBack();
      if (error.statusCode === 401) {
        Alert.alert('Session expired', 'Please login again');
      } else {
        Alert.alert(
          'Error',
          error.message || 'An error occurred. Please try again later.',
        );
      }
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <View style={{...styles.container}}>
      <View>
        <Pressable onPress={handleBack}>
          <Image source={close} />
        </Pressable>

        <View style={styles.imgBox}>
          <Image style={styles.imgStyle} source={loaderImg} />
        </View>

        <View style={styles.textBox}>
          <LagacyText
            size="md"
            weight="bold"
            value="Loading...."
            styles={{
              marginBottom: 10,
              marginTop: 10,
              color: '#2A2D74',
            }}
          />
          <LagacyText
            value="Exercises are secret weapon against injuries. Warm-up exercises get your muscles and joints ready for action, preventing any aches along the way. It boosts your strength, flexibility, and endurance"
            styles={{
              marginBottom: 10,
              marginTop: 10,
              color: '#585858',
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    flex: 1,
    margin: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingLeft: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imgBox: {
    alignItems: 'center',
    paddingTop: 60,
    // width: 200,
    // height: 400,
  },
  textBox: {
    alignItems: 'center',
  },
});
