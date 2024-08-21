import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import LegacyBtn from '../../components/UI/button';
import LegacyDropDown from '../../components/UI/dropdown';
import LagacyText from '../../components/UI/text';
import {globalStyle} from '../../styles';

export default function About({handleNext}) {
  const [gender, setGender] = useState('Male');

  return (
    <View style={{...globalStyle.container, ...styles.container}}>
      <ScrollView>
        <LagacyText
          color="#2A2D74"
          size="md"
          value="ABOUT YOU"
          weight="bold"
          styles={{
            marginTop: 0,
            textAlign: 'center',
          }}
        />

        <View style={styles.imgCard}>
          <Image
            style={styles.img}
            source={require('../../assets/onboard-image.png')}
          />
        </View>

        <View style={styles.aboutCard}>
          <View style={styles.about}>
            <View style={styles.about2}>
              <Image
                style={styles.aboutIcon}
                source={require('../../assets/height-icon.png')}
              />
              <LagacyText
                size="sm"
                value="Height"
                styles={{
                  fontSize: 20,
                }}
              />
            </View>
            <View style={styles.box2}>
              {/* <LegacyDropDown /> */}
              <LagacyText size="sm" value="dropdown" />
            </View>
          </View>
          <View style={styles.about}>
            <View style={styles.about2}>
              <Image
                style={styles.aboutIcon}
                source={require('../../assets/age-icon.png')}
              />
              <LagacyText
                size="sm"
                value="Age"
                styles={{
                  fontSize: 20,
                }}
              />
            </View>
            <View style={styles.box2}>
              {/* <LegacyDropDown /> */}
              <LagacyText size="sm" value="dropdown" />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnSticky}>
        <LegacyBtn
          bg="#2A2D74"
          title="Next"
          handlePress={handleNext}
          color="#ffffff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    textAlign: 'center',
    // borderWidth: 2,
    flex: 1,
    // borderColor: "green",
    // position: "relative",
  },
  btnSticky: {
    position: 'absolute',
    bottom: 10,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // borderColor: "green",
    position: 'relative',
  },
  imgCard: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // borderWidth: 2,
    // borderColor: "red",
    height: 250,
    width: '50%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  aboutCard: {
    borderRadius: 10,
    padding: 30,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 40,
    elevation: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // borderWidth: 2,
    // borderColor: "red",
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  about: {
    // borderWidth: 2,
    // borderColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    padding: 10,
  },
  box2: {
    // borderWidth: 2,
    // borderColor: "green",
    // width: "50%",
  },
  about2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aboutIcon: {
    // borderWidth: 2,
    // borderColor: "green",
    marginBottom: -5,
    marginRight: 5,
  },
});
