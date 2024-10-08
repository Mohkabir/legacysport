import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyle} from '../../../styles';
import Cards from './cards';
import GoBack from '../../../components/UI/go-back';

const Rules = () => {
  return (
    <View style={{...globalStyle.container}}>
      <GoBack title="Rules" />
      <View style={styles.body}>
        <View style={styles.wrap}>
          <Cards />
        </View>
      </View>
    </View>
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
  body: {
    marginTop: 0,
    marginBottom: 20,
    flex: 1,
    backgroundColor: '#F4F6FF',
  },
  wrap: {
    width: '90%',
    margin: 'auto',
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
  },
  profile: {
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 100,
    marginTop: 40,
    marginBottom: 15,
    width: 120,
    height: 120,
    margin: 'auto',
  },
  profileImg: {
    borderRadius: 100,
    margin: 'auto',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },

  blueBg: {
    backgroundColor: '#2A2D74',
    padding: 20,
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 40,
  },
  blueWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Rules;
