import React, {useContext, useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import LagacyText from '../../../components/UI/text';
import LegacyBtn from '../../../components/UI/button';
import Video from 'react-native-video';
import {AppContext} from '../../../context/appContext';
import {appRoutes} from '../../../constants';

interface StartContentsProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

const StartContents: React.FC<StartContentsProps> = ({navigation}) => {
  const bgImage = require('../../../assets/gettingStarted3.png');
  const backIcon = require('../../../assets/back.png');

  const {handleFinishDrill, currentContents, contents} = useContext(AppContext);
  const percent = 45;
  const [countdownToStart, setCountdownToStart] = useState<number>(3);

  const video = useRef<Video>(null);
  const [minutes, setMinutes] = useState<number>(
    Number(currentContents?.duration?.minutes || 10),
  );
  const [seconds, setSeconds] = useState<number>(
    Number(currentContents?.duration?.seconds || 10),
  );

  const [started, setStarted] = useState<boolean>(false);
  const [startVideo, setStartVideo] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [nextAble, setNextAble] = useState<boolean>(false);

  const handleGoBack = () => {
    navigation.navigate(appRoutes.CONTENTS);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownToStart(prev => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setStarted(true);
          setStartVideo(true);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (started) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds < 6) {
          setNextAble(true);
        }

        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          handleGoBack();
          return;
        }

        if (seconds === 0) {
          setMinutes(prev => prev - 1);
          setSeconds(59);
        } else {
          setSeconds(prev => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [started, minutes, seconds]);

  return (
    <View style={styles.container}>
      {!started && (
        <View style={styles.coundown}>
          <View style={styles.coundownNumber}>
            <LagacyText
              color="#ffffff"
              value={countdownToStart}
              styles={{
                fontSize: 68,
                fontWeight: 'bold',
              }}
            />
          </View>
        </View>
      )}

      <View style={styles.blueBG}>
        <Video
          ref={video}
          style={styles.video}
          source={{uri: currentContents?.videoUrl}}
          paused={!startVideo}
          repeat={isLooping}
        />

        <View style={styles.bgTextStyleWrap}>
          <Pressable onPress={handleGoBack}>
            <Image source={backIcon} />
          </Pressable>
        </View>
      </View>
      <View style={styles.otherArea}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <LagacyText
            color="#19212680"
            value={`1/${contents.length}`}
            styles={{
              fontSize: 16,
            }}
          />
          <LagacyText
            value={currentContents?.displayName}
            weight="bold"
            styles={{
              fontSize: 30,
              marginBottom: 5,
              marginTop: 10,
            }}
          />

          <LagacyText
            value={`${String(minutes).padStart(2, '0')}:${String(
              seconds,
            ).padStart(2, '0')}`}
            weight="bold"
            styles={{
              color: '#2A2D74',
              fontSize: 50,
              marginBottom: 5,
            }}
          />
        </View>

        <LegacyBtn
          bg="#2A2D74"
          title="Next"
          disable={!nextAble}
          // handlePress={}
          color="#ffffff"
          style={{
            marginTop: 60,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  coundown: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coundownNumber: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: '-30%',
    width: 100,
    height: 100,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBG: {
    flex: 0.6,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#2A2D74',
  },
  bgImgStyle: {
    width: '100%',
    height: '100%',
  },
  bgTextStyleWrap: {
    position: 'absolute',
    width: '100%',
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 30,
  },
  otherArea: {
    flex: 0.4,
    backgroundColor: '#ffffff',
    marginTop: -27,
    borderRadius: 20,
    padding: 20,
    paddingTop: 40,
    marginBottom: 25,
  },
  mainContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 17,
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: 25,
  },
  card2: {
    width: '40%',
  },
  video: {
    width: '205%',
    height: '100%',
    alignSelf: 'center',
  },
});

export default StartContents;
