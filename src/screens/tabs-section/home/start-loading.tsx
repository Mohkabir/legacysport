import {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {globalStyle} from '../../../styles';
import LoadingContents from './loading-contents';

export default function StartLoader({navigation, route}) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <ScrollView style={{...globalStyle.container, ...styles.container}}>
      <LoadingContents
        isModalVisible={isModalVisible}
        handleBack={() => navigation.goBack()}
        navigation={navigation}
        goto={route.params.goTo}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
    // borderWidth: 2,
    // borderColor: "red",
  },
});
