import React from 'react';
import {StyleSheet, View} from 'react-native';
import GoBack from '../../../components/UI/go-back';
import {globalStyle} from '../../../styles';
import LagacyText from '../../../components/UI/text';
import {ScrollView} from 'react-native-gesture-handler';
import LagacyHeight from '../../../components/UI/height';

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
    {
      id: 4,
      name: 'Neymar Jr',
      points: 14345,
      theme: '#719FD4',
      position: 4,
    },
    {
      id: 5,
      name: 'Jr Kazan',
      points: 159876,
      theme: '#806858',
      position: 5,
    },
    {
      id: 6,
      name: 'Neymar Jr',
      points: 14345,
      theme: '#010100',
      position: 6,
    },
    {
      id: 7,
      name: 'Jr Kazan',
      points: 159876,
      theme: '#FFD700',
      position: 7,
    },

    {
      id: 8,
      name: 'Neymar Jr',
      points: 14345,
      theme: '#CD3232',
      position: 8,
    },
    {
      id: 9,
      name: 'Jr Kazan',
      points: 9876,
      theme: '#528A30',
      position: 9,
    },
    {
      id: 10,
      name: 'Neymar Jr',
      points: 1345,
      theme: '#5130B6DB',
      position: 10,
    },
  ];
  return (
    <View style={{...globalStyle.container}}>
      <GoBack title="Leaderboard" />
      <LagacyHeight height={60} />
      <View style={styles.blueBG}>
        <View style={styles.cardWrap}>
          {topThree.slice(0, 3).map(item => (
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
              <View style={{...styles.profile, backgroundColor: item.theme}}>
                <LagacyText
                  value={item.name[0]}
                  weight="bold"
                  styles={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#ffffff',
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
      <ScrollView style={styles.wrapTwo}>
        <LagacyText
          value="Weekly"
          weight="bold"
          styles={{
            fontSize: 22,
            marginBottom: 10,
          }}
        />
        <View style={styles.group}>
          {topThree.slice(3).map(item => (
            <View style={styles.groupCard} key={item.id}>
              <View style={styles.boxOne}>
                <LagacyText
                  value={item.position}
                  weight="bold"
                  styles={{
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                />
              </View>

              <View style={styles.boxTwo}>
                <View style={{...styles.profile, backgroundColor: item.theme}}>
                  <LagacyText
                    value={item.name[0]}
                    weight="bold"
                    styles={{
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#ffffff',
                    }}
                  />
                </View>
                <LagacyText
                  value={item.name}
                  weight="bold"
                  styles={{
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                />
              </View>

              <View style={styles.boxThree}>
                <LagacyText
                  value={item.points}
                  weight="bold"
                  styles={{
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                />
              </View>
            </View>
          ))}
        </View>
        <LagacyHeight height={100} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '90%',
    margin: 'auto',
    flex: 1,
  },
  wrapTwo: {
    flex: 1,
    width: '90%',
    margin: 'auto',
    paddingTop: 12,
    paddingBottom: 30,
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
    paddingTop: 20,
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
    width: 24,
    height: 24,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  group: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: 10,
  },
  groupCard: {
    // backgroundColor: '#2A2D7466',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom,
  },
  boxOne: {
    width: '15%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTwo: {
    width: '52%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxThree: {
    width: '30%',
    // borderColor: 'red',
    // borderWidth: 1,
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#806858',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default League;
