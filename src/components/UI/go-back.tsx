import React from 'react';
import {StyleSheet, Pressable, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native-animatable';

const BackIcon = require('../../assets/back_black.png');

const GoBack = ({title}: {title: string}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrap}>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Image source={BackIcon} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    color: '#585858',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wrap: {
    marginBottom: 20,
    // borderColor: 'red',
    // borderWidth: 1,
    width: '90%',
    margin: 'auto',
  },
});

export default GoBack;
