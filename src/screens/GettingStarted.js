import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LegacyBtn from '../components/UI/button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const GettingStarted = ({login}) => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: ['Learn to play', 'basketball', 'Like a PRO'],
      image: require('../assets/gettingStarted1.png'),
    },
    {
      title: ['Beat the', 'Timer', 'Challenge'],
      image: require('../assets/gettingStarted2.png'),
    },
    {
      title: ['', 'Virtual', 'Competition'],
      image: require('../assets/gettingStarted3.png'),
    },
  ];

  const signOut = async () => {
    GoogleSignin.configure();
    try {
      const res = await GoogleSignin.signOut();
      // setState({user: null});
      console.log(res, 'res---');
    } catch (error) {
      console.error(error);
    }
  };
  const handleNext = async () => {
    await signOut();
    if (current === 2) {
      login();
    } else {
      setCurrent(prev => prev + 1);
    }
  };
  return (
    <View style={styles.container}>
      {steps.map(
        (step, idx) =>
          idx === current && (
            <View style={styles.boxOne} key={idx}>
              <View style={styles.textContainer}>
                <Text style={styles.textWrap}>
                  <Text style={styles.text}>{step.title[0]}</Text>
                  <Text style={{...styles.red, ...styles.text}}>
                    {' '}
                    {step.title[1]}{' '}
                  </Text>
                  <Text style={styles.text}>{step.title[2]}</Text>
                </Text>
              </View>
              <View style={styles.imgCard}>
                <Image style={styles.img} source={step.image} />
              </View>
            </View>
          ),
      )}
      <View style={styles.controls}>
        <View style={styles.trackers}>
          {steps.map((_, idx) => (
            <Pressable onPress={() => setCurrent(idx)} key={idx}>
              <Text
                style={idx === current ? {...styles.active} : {...styles.track}}
              />
            </Pressable>
          ))}
        </View>
        <LegacyBtn
          bg="#2A2D74"
          title={current === 2 ? 'Get Started' : 'Next'}
          handlePress={handleNext}
          color="#ffffff"
        />
        {current === 0 && (
          <LegacyBtn
            title="Skip"
            handlePress={() => setCurrent(2)}
            color="#2A2D74"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    paddingTop: 40,
    // marginTop: 40,
  },
  boxOne: {
    // borderWidth: 2,
    // borderColor: "green",
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '85%',
    // height: 160,
    // height: 180,
    marginLeft: 'auto',
    marginRight: 'auto',
    // borderWidth: 2,
    // borderColor: "blue",
    flex: 1.5,
  },
  textWrap: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  red: {
    color: '#D16639',
  },
  text: {
    fontSize: 38,
    display: 'inline',
  },
  imgCard: {
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    flex: 3,
    // borderWidth: 2,
    // borderColor: "blue",
    width: '85%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  controls: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1.2,
  },
  trackers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    // borderWidth: 2,
    // borderColor: "red",
  },
  track: {
    width: 14,
    height: 8,
    backgroundColor: '#C7C7C7',
    marginRight: 10,
    borderRadius: 4,
  },
  active: {
    width: 36,
    height: 8,
    backgroundColor: '#2A2D74',
    marginRight: 10,
    borderRadius: 4,
  },
});

export default GettingStarted;
