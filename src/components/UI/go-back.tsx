import React from 'react';
import {StyleSheet, Pressable, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native-animatable';

const BackIcon = require('../../assets/back_black.png');

const GoBack = ({title}: {title: string}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bg}>
      <View style={styles.wrap}>
        <Pressable onPress={() => navigation.goBack()} style={styles.back}>
          <Image source={BackIcon} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 13,
    left: 0,
    zIndex: 1,

    width: 60,
    // paddingTop: 10,
    // paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#585858',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bg: {
    backgroundColor: '#ffffff',
    // borderColor: 'red',
    // borderWidth: 1,
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: '100%',
  },
  wrap: {
    paddingTop: 15,
    paddingBottom: 15,
    width: '90%',
    margin: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default GoBack;
