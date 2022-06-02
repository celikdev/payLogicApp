import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {RightArrow} from '../../../assets/Icons';

const RecentTransactions = () => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      hitSlop={{left: 8, right: 8, top: 8, bottom: 8}}>
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 12,
          color: 'black',
          marginRight: 2,
        }}>
        Son İşlemler
      </Text>
      <RightArrow />
    </TouchableOpacity>
  );
};

export default RecentTransactions;
