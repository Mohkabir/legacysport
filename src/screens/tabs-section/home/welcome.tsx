import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {globalStyle} from '../../../styles';
import LagacyText from '../../../components/UI/text';
import LegacyBtn from '../../../components/UI/button';
import {getAsyncStorage, signOut} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserInfo} from '../../../interfaces';
import AuthGuard from '../../layout/auth-guard';

const Welcome = ({navigation}) => {
  const fireIcon = require('../../../assets/fire.png');
  const coinIcon = require('../../../assets/coin.png');
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  const Card = ({icon, text1, text2, sm}) => {
    return (
      <View style={styles.card}>
        <Image
          style={{
            ...styles.cardImg,
            width: sm ? 38 : 50,
            height: sm ? 38 : 50,
          }}
          source={icon}
        />
        <View style={styles.cardText}>
          <LagacyText
            color="#ffffff"
            size="md"
            value={text1}
            weight="bold"
            styles={{
              fontSize: 22,
              textAlign: 'center',
            }}
          />
          <LagacyText
            color="#ffffff"
            value={text2}
            styles={{
              textAlign: 'center',
            }}
          />
        </View>
      </View>
    );
  };

  const percent = 0;

  const gotoTraining = () => {
    navigation.navigate('Training');
  };

  useEffect(() => {
    getStorate();
  }, []);

  // const user = getAsyncStorage('user');

  const getStorate = async () => {
    const user = await getAsyncStorage('user');
    setUserInfo(user);
    // const user = await AsyncStorage.getItem('user');
    // console.log(user, 'user');
  };

  console.log(userInfo, 'userInfo');
  return (
    <AuthGuard navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.blueBG}>
          <View style={{...styles.bellWrap, ...styles.paddingX}}>
            <LagacyText
              color="#ffffff"
              size="md"
              value={`What’s up ${userInfo?.user?.name?.split(' ')[0]},`}
              weight="bold"
              styles={{
                fontSize: 22,
              }}
            />

            <Image
              style={styles.img}
              source={require('../../../assets/notification.png')}
            />
          </View>
          <LagacyText
            color="#ffffff"
            size="md"
            value="Let’s train today"
            weight="bold"
            styles={styles.paddingX}
          />
          <View style={{...styles.cardWrap, ...styles.paddingX}}>
            <Card icon={fireIcon} text1="0" text2="Days Streak" sm />
            <Card icon={coinIcon} text1="0" text2="Coins" />
          </View>
        </View>
        <View style={styles.otherArea}>
          <View style={styles.trainingCard}>
            <View style={styles.trainingCardImgCard}>
              <Image
                style={styles.trainingCardImg}
                source={require('../../../assets/basketball.png')}
              />
            </View>
            <View style={styles.trainingCard_box2}>
              <LagacyText
                color="#2A2D74"
                size="lg"
                value="Training"
                weight="bold"
              />
              <LagacyText value="Basketball is a physical contact sport, and in other to truly succeed at any level of play, you have to elevate your game." />

              <View style={styles.progressButtonWrap}>
                <View style={{width: '45%'}}>
                  <View style={styles.progressBar}>
                    <View
                      style={{
                        ...styles.progressWidth,
                        width: `${percent}%`,
                      }}></View>
                  </View>
                  <LagacyText
                    value={`${percent}% progress`}
                    color="#D16639"
                    weight="bold"
                    styles={{
                      fontSize: 10,
                    }}
                  />
                </View>
                <LegacyBtn
                  bg="#2A2D74"
                  title="Let’s Go"
                  handlePress={gotoTraining}
                  color="#ffffff"
                  size={14}
                  style={{
                    width: 83,
                    borderRadius: 14,
                    padding: 0,
                    height: 35,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {/* <LegacyBtn
          bg="#2A2D74"
          title="Signout"
          handlePress={async () => await signOut()}
          color="#ffffff"
          size={14}
          style={{
            width: 83,
            borderRadius: 14,
            padding: 0,
            height: 35,
            marginRight: 20,
          }}
        /> */}
      </View>
    </AuthGuard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  blueBG: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#0A101F',
  },
  otherArea: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },

  paddingX: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cardWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  card: {
    // borderWidth: 2,
    // borderColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '47%',
    padding: 15,
    // paddingTop: 25,
    // paddingBottom: 25,
    backgroundColor: 'rgba(225,225,225,0.4)',
    borderRadius: 10,
  },
  cardImg: {
    // minwidth: 40,
    // minheight: 40,
    // maxwidth: 40,
    // maxheight: 40,
  },
  cardText: {},
  textCenter: {
    textAlign: 'center',
  },
  trainingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#2A2D74',
    padding: 10,
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '-20%',
  },
  trainingCardImgCard: {
    flex: 1,
    paddingTop: 20,
  },
  trainingCardImg: {
    maxWidth: 90,
    maxHeight: 100,
  },
  trainingCard_box2: {
    flex: 2,
  },
  progressButtonWrap: {
    // borderWidth: 2,
    // borderColor: "red",
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    borderWidth: 1,
    borderColor: '#D16639',
    borderRadius: 58,
    width: '100%',
    height: 10,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressWidth: {
    backgroundColor: '#D16639',
    height: '100%',
  },
});

export default Welcome;
