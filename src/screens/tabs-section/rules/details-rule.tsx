import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LagacyText from '../../../components/UI/text';
import {useRoute, RouteProp} from '@react-navigation/native';
import GoBack from '../../../components/UI/go-back';
import {globalStyle} from '../../../styles';
import LagacyHeight from '../../../components/UI/height';

type RouteParams = {
  params: {
    item: {
      title: string;
      id: number;
      contents: any;
    };
  };
};

const DetailsRule = () => {
  const route = useRoute<RouteProp<RouteParams>>();
  const {item} = route.params;
  return (
    <View style={{...globalStyle.container}}>
      <GoBack title={item.title} />

      <ScrollView style={styles.cardGroup}>
        <LagacyHeight height={70} />
        {item?.contents?.map((contents: any, idx: number) => (
          <View key={item.id} style={styles.contentsWrap}>
            {contents.type === 'numbered' ? (
              <View>
                {Object.entries(contents.body).map(([key, value]) => (
                  <View key={item.id + idx}>
                    <View style={styles.contentHead}>
                      <LagacyText weight="bold" value={String(key)} />
                    </View>
                    <View style={styles.contentBody}>
                      {Array.isArray(value) &&
                        value.map((str, index) => (
                          <View
                            style={styles.contentText}
                            key={item.id + index + idx}>
                            <LagacyText
                              key={index}
                              value="•"
                              styles={{
                                marginRight: 10,
                              }}
                            />
                            <LagacyText
                              key={index}
                              value={str}
                              styles={{
                                lineHeight: 22,
                                color: 'rgba(0,0,0,0.8)',
                              }}
                            />
                          </View>
                        ))}
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View>
                {/* <LagacyText
                  weight="bold"
                  value="List"
                  styles={{
                    marginBottom: 5,
                    fontSize: 14,
                  }}
                /> */}

                <View>
                  {contents.body.map((str, index) => (
                    <View
                      style={styles.contentText}
                      key={item.id + index + idx}>
                      <LagacyText
                        key={index}
                        value={str}
                        styles={{
                          lineHeight: 22,
                          color: 'rgba(0,0,0,0.8)',
                          marginBottom: 20,
                        }}
                      />
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}
        <LagacyHeight height={200} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 15,
    flex: 1,
  },
  sticky: {
    // position: 'absolute',
    // top: 0,
    // zIndex: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardGroup: {
    // paddingTop: 85,
    backgroundColor: '#F4F6FF',
    flex: 1,
  },
  contentsWrap: {
    width: '90%',
    margin: 'auto',
  },
  contentHead: {
    width: '100%',
    padding: 12,
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  contentBody: {
    width: '100%',
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  contentText: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 8,
  },
});

export default DetailsRule;
