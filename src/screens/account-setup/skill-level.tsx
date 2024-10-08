import React, {useState} from 'react';
import {Image, StyleSheet, Pressable, ScrollView, View} from 'react-native';
import LagacyText from '../../components/UI/text';
import {saveAsyncStorage} from '../../utils';
import {asyncStorageKeys} from '../../constants';

interface SkillLevelProps {
  handleFinishOnboard: () => void;
}

interface SkillLevelItem {
  title: string;
  text: string;
  img: any;
  tag: number;
  value: string;
}

export default function SkillLevel({handleFinishOnboard}: SkillLevelProps) {
  const BeginnerImg1 = require('../../assets/skill1.png');
  const BeginnerImg2 = require('../../assets/skill2.png');
  const BeginnerImg3 = require('../../assets/skill3.png');
  const BeginnerImg4 = require('../../assets/skill4.png');

  const [selected, setSelected] = useState<SkillLevelItem | null>(null);

  const skillLevelData: SkillLevelItem[] = [
    {
      title: 'Beginner',
      text: 'Discover the joy of basketball through fun drills and basic skills to build a solid foundation',
      img: BeginnerImg1,
      tag: 0,
      value: 'Beginner',
    },
    {
      title: 'Intermediate',
      text: 'Level up your game with cool tricks and advanced techniques.',
      img: BeginnerImg2,
      tag: 1,
      value: 'Intermediate',
    },
    {
      title: 'Expert',
      text: 'Become a basketball prodigy with advanced moves and smart plays.',
      img: BeginnerImg3,
      tag: 2,
      value: 'Expert',
    },
    {
      title: 'Elite',
      text: 'Unleash your inner superstar as you conquer the court with style.',
      img: BeginnerImg4,
      tag: 3,
      value: 'Elite',
    },
  ];

  const handleSelectSkill = async (val: SkillLevelItem) => {
    setSelected(val);
    await saveAsyncStorage(asyncStorageKeys.QUERY, {level: val.value});
    handleFinishOnboard();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headTexts}>
        <LagacyText
          color="#2A2D74"
          size="md"
          value="Select your skill level"
          styles={{
            textAlign: 'center',
          }}
        />
        <LagacyText
          color="#2A2D74"
          value="Lorem ipsum dolor sit amet consectetur."
          styles={{
            marginTop: 5,
            textAlign: 'center',
          }}
        />
      </View>

      <View style={styles.cardGroup}>
        {skillLevelData.map((item, idx) => (
          <Pressable
            style={{
              ...styles.card,
              backgroundColor: selected?.tag === idx ? '#2A2D74' : '#ffffff',
            }}
            onPress={() => {
              handleSelectSkill(item);
            }}
            key={idx}>
            <View style={styles.box1}>
              <LagacyText
                weight="bold"
                value={item.title}
                styles={{
                  marginBottom: 5,
                  fontSize: 18,
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
    width: '85%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headTexts: {
    marginTop: 20,
    marginBottom: 20,
  },
  cardGroup: {
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    marginBottom: 12,
    padding: 20,
    paddingLeft: 30,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#2A2D74',
  },
  box1: {
    width: '65%',
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
