import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import LagacyText from '../../../components/UI/text';
import LegacyBtn from '../../../components/UI/button';
import {AppContext} from '../../../context/appContext';
import LagacyHeight from '../../../components/UI/height';

const Contents = ({navigation}) => {
  const bgImage = require('../../../assets/gettingStarted3.png');
  const backIcon = require('../../../assets/back.png');

  const {
    contents: drillsData,
    updateCurrentContents,
    currentContents,
  } = useContext(AppContext);

  const handleGoBack = () => {
    console.log('traininggggg..');
    navigation.navigate('Training');
  };

  const handleStart = data => {
    updateCurrentContents(data);
    navigation.navigate('Start contents');
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueBG}>
        <Image style={styles.bgImgStyle} source={bgImage} />
        <View style={styles.overlay}></View>
        <View style={styles.bgTextStyleWrap}>
          <Pressable onPress={handleGoBack}>
            <Image source={backIcon} />
          </Pressable>

          <View style={styles.bgTextStyle}>
            <LagacyText color="#ffffff" size="lg" value="Day 1" weight="bold" />
            <LagacyText
              color="#ffffff"
              value="1/5 Exercises"
              styles={{
                marginTop: 4,
                marginBottom: 4,
              }}
            />
            <LagacyText color="#ffffff" value="Beginner Level" />
          </View>
        </View>
      </View>
      <ScrollView style={styles.otherArea}>
        {drillsData &&
          drillsData.map((drill, idx) => (
            <View style={styles.mainContents} key={idx}>
              <View style={{flex: 0.7}}>
                <Image style={styles.img} source={drill?.thumbnail} />
              </View>
              <View style={styles.card2}>
                <LagacyText
                  value={drill?.title}
                  // weight="bold"
                  styles={{
                    fontSize: 14,
                    marginBottom: 5,
                    color: '#192126',
                    // color: "red",
                  }}
                />
                <LagacyText
                  color="#19212680"
                  value={drill?.description}
                  styles={{
                    fontSize: 13,
                  }}
                />
              </View>
              <View style={{flex: 0.8}}>
                <LegacyBtn
                  bg="#2A2D74"
                  title="Start"
                  handlePress={() => handleStart(drill)}
                  color="#ffffff"
                  size={12}
                  style={{
                    // width: 83,
                    borderRadius: 14,
                    padding: 0,
                    height: 40,
                  }}
                />
              </View>
            </View>
          ))}
        <LagacyHeight height={60} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  blueBG: {
    flex: 0.6,
    position: 'relative',
    borderWidth: 2,
    overflow: 'hidden',
  },
  bgImgStyle: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '100%',
    // opacity: "0.6",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 30,
  },
  bgTextStyleWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 30,
    // zIndex: "2",
  },
  bgTextStyle: {
    alignItems: 'center',
  },
  otherArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: -70,
    borderRadius: 20,
    padding: 20,
    paddingTop: 40,
  },

  mainContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 17,
    // padding: 2,
    padding: 5,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    height: 85,
  },
  img: {
    // borderWidth: 2,
    // borderColor: "red",
    height: '95%',
    width: '100%',
  },
  card2: {
    flex: 2,
    // width: "40%",
    marginLeft: 10,
    // borderWidth: 2,
    // borderColor: "red",
  },
});

export default Contents;
