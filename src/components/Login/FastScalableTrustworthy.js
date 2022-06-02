import React from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../../assets/Colors';

const FastScalableTrustworthy = () => {
  return (
    <View style={{marginVertical: 48}}>
      <Text
        style={{
          textAlign: 'left',
          fontFamily: 'Montserrat-Bold',
          color: COLORS.TEXT_COLOR,
          fontSize: 50,
          opacity: 0.8,
        }}>
        Fast
      </Text>
      <Text
        style={{
          textAlign: 'left',
          fontFamily: 'Montserrat-Bold',
          color: COLORS.TEXT_COLOR,
          fontSize: 50,
          opacity: 0.4,
        }}>
        Scalable
      </Text>
      <Text
        style={{
          textAlign: 'left',
          fontFamily: 'Montserrat-Bold',
          color: COLORS.TEXT_COLOR,
          fontSize: 50,
          opacity: 0.4,
        }}>
        Trustworthy
      </Text>
    </View>
  );
};

export default FastScalableTrustworthy;
