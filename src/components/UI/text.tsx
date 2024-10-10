import React from 'react';
import {Text, TextStyle} from 'react-native';

interface LagacyTextProps {
  value: string | number;
  styles?: TextStyle;
  color?: string;
  size?: 'lg' | 'md' | 'sm';
  weight?: 'bold' | 'semi-bold' | 'regular';
}

const LagacyText: React.FC<LagacyTextProps> = ({
  value,
  styles,
  color = '#000000',
  size = 'sm',
  weight = 'regular',
}) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: size === 'lg' ? 40 : size === 'md' ? 30 : 14,
        fontWeight:
          weight === 'bold' ? '700' : weight === 'semi-bold' ? '600' : '400',
        flexWrap: 'wrap',
        ...styles,
      }}>
      {value}
    </Text>
  );
};

export default LagacyText;
