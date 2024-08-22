import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SplashSreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('../assets/logo.png')} />
        <Image
          style={styles.imgText}
          source={require('../assets/logo_text.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    padding: 10,
    paddingTop: 60,
    color: 'red',
  },

  logoWrapper: {
    // flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  imgText: {
    fontSize: 40,
    color: '#2A2D74',
    marginTop: 16,
  },
});

export default SplashSreen;
