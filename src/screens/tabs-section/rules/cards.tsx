import React from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import LagacyText from '../../../components/UI/text';
import {allRules} from './rules-constant';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const Cards = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const handleRule = (item: any) => {
    navigation.navigate('Details Rule', {item});
  };

  return (
    <ScrollView>
      <View style={styles.cardGroup}>
        {allRules.map(item => (
          <Pressable
            style={styles.card}
            onPress={() => {
              handleRule(item);
            }}
            key={item.id}>
            <View>
              <LagacyText
                weight="bold"
                value={item.title}
                styles={{
                  marginBottom: 5,
                  fontSize: 14,
                }}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 0,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  cardGroup: {
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingTop: 15,
  },
  card: {
    width: '100%',
    padding: 12,
    paddingLeft: 38,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Cards;
