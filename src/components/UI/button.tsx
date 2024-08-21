import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

interface LegacyBtnProps {
  bg?: string;
  title: string;
  handlePress: () => void;
  color?: string;
  style?: ViewStyle;
  icon?: ImageSourcePropType;
  size?: number;
  disable?: boolean;
}

const LegacyBtn: React.FC<LegacyBtnProps> = ({
  bg,
  title,
  handlePress,
  color = '#000000',
  style,
  icon,
  size = 16,
  disable = false,
}) => {
  return (
    <Pressable
      style={{
        ...styles.btn,
        ...style,
        backgroundColor: disable ? '#BABCBF' : bg ? bg : '#ffffff',
      }}
      onPress={!disable ? handlePress : undefined}>
      <Text style={{...styles.text, color: color}}>
        {icon && <Image style={styles.icon} source={icon} />}{' '}
        <Text style={{fontSize: size}}>{title}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    borderRadius: 10,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    display: 'flex',
  } as TextStyle,
  icon: {
    marginBottom: -2,
  },
});

export default LegacyBtn;
