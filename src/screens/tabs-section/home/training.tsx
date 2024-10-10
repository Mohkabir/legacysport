import React, {useState} from 'react';
import {Image, StyleSheet, Pressable, ScrollView, View} from 'react-native';
import LagacyText from '../../../components/UI/text';
import {globalStyle} from '../../../styles';
import GoBack from '../../../components/UI/go-back';
import {appRoutes, asyncStorageKeys} from '../../../constants';
import {getAsyncStorage, saveAsyncStorage} from '../../../utils';
import LagacyHeight from '../../../components/UI/height';

const BeginnerImg1 = require('../../../assets/skill1.png');
const BeginnerImg2 = require('../../../assets/skill2.png');
const BeginnerImg3 = require('../../../assets/skill3.png');

interface TrainingItem {
  title: string;
  text: string;
  img: any;
  tag: number;
  value: string;
}

export default function Training({navigation}: {navigation: any}) {
  const [selected, setSelected] = useState<TrainingItem | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  console.log(isModalVisible, 'isModalVisible');

  const trainingData: TrainingItem[] = [
    {
      title: 'Exercise',
      text: 'Improve body conditioning and overall fitness.',
      img: BeginnerImg1,
      tag: 0,
      value: 'Exercise',
    },
    {
      title: 'Drills',
      text: 'Warm-up exercises get your muscles and joints ready for action',
      img: BeginnerImg2,
      tag: 1,
      value: 'Drills',
    },
    {
      title: 'Moves',
      text: 'Get ahead in the game, unlock tip and tricks that will level you up',
      img: BeginnerImg3,
      tag: 2,
      value: 'Moves',
    },
  ];

  const handleTraining = async (val: TrainingItem) => {
    setSelected(val);
    setIsModalVisible(true);
    const query = await getAsyncStorage(asyncStorageKeys.QUERY);
    await saveAsyncStorage(asyncStorageKeys.QUERY, {
      ...query,
      category: val.value,
    });
    navigation.navigate(appRoutes.STARTLOADER, {goTo: appRoutes.CONTENTS});
  };

  return (
    <ScrollView style={{...globalStyle.container, ...styles.container}}>
      <View style={styles.wrap}>
        <GoBack title="Training" />
        <LagacyHeight height={60} />
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
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
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
  },
  box2: {
    width: '35%',
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
