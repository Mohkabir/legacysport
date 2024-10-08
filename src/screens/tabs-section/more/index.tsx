import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../../../styles';
import LagacyText from '../../../components/UI/text';
import {AppContext} from '../../../context/appContext';
import Cards from './cards';
import GoBack from '../../../components/UI/go-back';
const fireIcon = require('../../../assets/fire.png');

const More = () => {
  const {userInfo} = useContext(AppContext);
  console.log(userInfo, '------------userInfo---------');
  return (
    <View style={{...globalStyle.container}}>
      <GoBack title="More" />
      <View style={styles.body}>
        <View style={styles.wrap}>
          <View style={styles.profile}>
            {userInfo?.user?.photo && (
              <Image
                source={{uri: userInfo.user.photo}}
                style={styles.profileImg}
              />
            )}
          </View>
          <LagacyText
            color="#000"
            size="md"
            value={`${userInfo?.user?.givenName}`}
            weight="bold"
            styles={{
              fontSize: 22,
              textAlign: 'center',
            }}
          />
          <View style={styles.blueBg}>
            <View style={styles.blueWrap}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  style={{
                    width: 23,
                    height: 30,
                    marginRight: 10,
                  }}
                  source={fireIcon}
                />
                <View>
                  <LagacyText
                    color="#fff"
                    value="20"
                    weight="bold"
                    styles={{
                      fontSize: 17,
                    }}
                  />
                  <LagacyText
                    color="#fff"
                    value="Days Streak"
                    styles={{
                      fontSize: 9,
                    }}
                  />
                </View>
              </View>
              <View>
                <LagacyText
                  color="#fff"
                  value="Gold"
                  weight="bold"
                  styles={{
                    fontSize: 17,
                    textAlign: 'center',
                  }}
                />
                <LagacyText
                  color="#fff"
                  value="League"
                  styles={{
                    fontSize: 9,
                  }}
                />
              </View>
              <View>
                <LagacyText
                  color="#fff"
                  value="Star"
                  weight="bold"
                  styles={{
                    fontSize: 17,
                    textAlign: 'center',
                  }}
                />
                <LagacyText
                  color="#fff"
                  value="League"
                  styles={{
                    fontSize: 9,
                  }}
                />
              </View>
            </View>
          </View>
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

export default More;
