import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GoBack from '../../../components/UI/go-back';
import {globalStyle} from '../../../styles';
import LagacyText from '../../../components/UI/text';

const League = () => {
  const topThree = [
    {
      id: 1,
      name: 'Lionel Messi',
      points: 20,
      theme: '#CCCCCCCC',
      position: 2,
    },
    {
      id: 2,
      name: 'Cristiano Ronaldo',
      points: 18,
      theme: '#FFD700',
      position: 1,
    },
    {
      id: 3,
      name: 'Neymar Jr',
      points: 15,
      theme: '#CD7F32',
      position: 3,
    },
  ];
  return (
    <View style={{...globalStyle.container}}>
      <GoBack title="League" />
      <View style={styles.blueBG}>
        <View style={styles.cardWrap}>
          {topThree.map(item => (
            <View
              style={{...styles.card, borderTopColor: item.theme}}
              key={item.id}>
              <View style={{...styles.position, backgroundColor: item.theme}}>
                <LagacyText
                  color="#ffffff"
                  value={item.position}
                  weight="bold"
                  styles={{
                    fontSize: 22,
                    textAlign: 'center',
                  }}
                />
              </View>
              <LagacyText
                color="#ffffff"
                value={item.name}
                styles={{
                  textAlign: 'center',
                }}
              />
              <LagacyText
                color="#ffffff"
                value={item.points}
                weight="bold"
                styles={{
                  fontSize: 22,
                  textAlign: 'center',
                }}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.wrap}>
        <Text>League</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '90%',
    margin: 'auto',
    flex: 1,
  },
  blueBG: {
    flex: 0.5,
    overflow: 'hidden',
    backgroundColor: '#0A101F',
  },
  cardWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '90%',
    margin: 'auto',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 15,
    paddingTop: 40,
    borderTopColor: '#CCCCCCCC',
    borderTopWidth: 4,
    backgroundColor: '#2A2D7466',
    position: 'relative',
  },
  position: {
    position: 'absolute',
    top: -15,
    left: '50%',
    borderRadius: 4,
    // padding: 1,
    // paddingBottom: 0,
    // paddingTop: -0,
    width: 24,
    height: 24,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default League;
