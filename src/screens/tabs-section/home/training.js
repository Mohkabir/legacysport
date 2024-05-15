import {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Pressable, ScrollView, View} from 'react-native';
import LagacyText from '../../../components/UI/text';
import {globalStyle} from '../../../styles';
// import LegacyBtn from "../../components/UI/button";
// import LagacyText from "../../components/UI/text";
// import { globalStyle } from "../../styles";
import LoadingContents from './loading-contents';
import GoBack from '../../../components/UI/go-back';
import {AppContext} from '../../../context/appContext';
const BeginnerImg1 = require('../../../assets/skill1.png');
const BeginnerImg2 = require('../../../assets/skill2.png');
const BeginnerImg3 = require('../../../assets/skill3.png');

export default function Training({navigation}) {
  const [selected, setSelected] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const trainingData = [
    {
      title: 'Exercise',
      text: 'Improve body conditioning and overall fitness.',
      img: BeginnerImg1,
      tag: 0,
    },
    {
      title: 'Drills',
      text: 'Warm-up exercises get your muscles and joints ready for action',
      img: BeginnerImg2,
      tag: 1,
    },
    {
      title: 'Moves',
      text: 'Get ahead in the game, unlock tip and tricks that will level you up',
      img: BeginnerImg3,
      tag: 2,
    },
  ];

  const handleTraining = val => {
    setSelected(val);
    setIsModalVisible(true);
    navigation.navigate('Start Loader', {goTo: 'Contents'});
  };

  return (
    <ScrollView style={{...globalStyle.container, ...styles.container}}>
      <View style={styles.wrap}>
        <GoBack title="Training" />
      </View>
      <View style={styles.cardGroup}>
        {trainingData.map((item, idx) => (
          <Pressable
            style={{
              ...styles.card,
              backgroundColor: selected?.tag === idx ? '#2A2D74' : '#ffffff',
            }}
            onPress={() => handleTraining(item)}
            key={idx}>
            {/* <LinearGradient
              colors={['#0A101F', '#2A2D74']}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.gradient}
            /> */}
            <View style={styles.box1}>
              <LagacyText
                size="lg"
                weight="bold"
                value={item.title}
                styles={{
                  marginBottom: 5,

                  color: selected?.tag === idx ? '#ffffff' : '#2A2D74',
                }}
              />
              <LagacyText
                value={item.text}
                styles={{
                  color: selected?.tag === idx ? '#ffffff' : '#2A2D74',
                }}
              />
            </View>
            <View style={styles.box2}>
              <Image source={item.img} />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
    // borderWidth: 2,
    // borderColor: "blue",
    paddingTop: 60,
  },
  headTexts: {
    marginTop: 20,
    marginBottom: 20,
  },
  cardGroup: {
    marginBottom: 15,
  },
  wrap: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 10,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    // paddingLeft: 30,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#2A2D74',
    paddingTop: 15,
    paddingBottom: 15,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  box1: {
    width: '65%',
    paddingLeft: 10,

    // borderWidth: 2,
    // borderColor: "red",
  },
  box2: {
    width: '35%',
    // borderWidth: 2,
    // borderColor: "red",
  },
  aboutCard: {
    elevation: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
