import {useContext, useEffect} from 'react';
import {Image, StyleSheet, Pressable, View, Alert} from 'react-native';
import LagacyText from '../../../components/UI/text';
import {getAsyncStorage, signOut} from '../../../utils';
import {AppContext} from '../../../context/appContext';
import {NavigationProp} from '@react-navigation/native';
import {appRoutes, asyncStorageKeys} from '../../../constants';

interface LoadingContentsProps {
  handleBack: () => void;
  navigation: NavigationProp<any>;
  goto: string;
}

const LoadingContents: React.FC<LoadingContentsProps> = ({
  handleBack,
  navigation,
  goto,
}) => {
  const loaderImg = require('../../../assets/loaderImg.png');
  const close = require('../../../assets/close.png');

  const {setContents} = useContext(AppContext);

  const handleGoToContent = () => {
    navigation.navigate(goto);
  };

  const getContents = async () => {
    const token = await getAsyncStorage(asyncStorageKeys.TOKEN);
    console.log('before getting contents, token: ', token);
    try {
      const query = await getAsyncStorage(asyncStorageKeys.QUERY);
      const response = await fetch(
        `https://legacy-backend-zmmd.onrender.com/training/allExercise?skillLevel=${query.level}&trainingSection=${query.category}&day=1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();

      if (!response.ok) {
        console.log(response, 'response error');
        if (data?.statusCode === 401 || data?.statusCode === 403) {
          Alert.alert(
            'Session expired',
            'Please login again',
            [
              {
                text: 'Login',
                onPress: async () => {
                  await signOut();
                  navigation.navigate(appRoutes.ONBOARDING);
                },
              },
            ],
            {cancelable: false},
          );
          handleBack();
          return;
        }
        return;
      }
      console.log(data, 'data data');

      if (data[0]?.trainingDescription) {
        setContents(data[0]?.trainingDescription);
        console.log('Contents sent to backend:', data);
        console.log(data[0]?.trainingDescription, 'data?.trainingDescription');
        handleGoToContent();
      } else {
        handleBack();
      }
    } catch (error: any) {
      handleBack();
      if (error?.statusCode === 401) {
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

  useEffect(() => {
    getContents();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={handleBack}>
          <Image source={close} />
        </Pressable>

        <View style={styles.imgBox}>
          <Image source={loaderImg} />
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
};

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
  },
  textBox: {
    alignItems: 'center',
  },
});

export default LoadingContents;
