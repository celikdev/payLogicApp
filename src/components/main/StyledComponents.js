import styled from 'styled-components';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {COLORS} from '../../../assets/Colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 48px;
  background-color: ${props =>
    props.disabled ? COLORS.PRIMARY_COLOR : COLORS.TEXT_COLOR};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 18px;
  color: ${COLORS.BACKGROUND_COLOR};
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 48px;
  border-radius: 12px;
  background-color: #e2e2e2;
  color: #202020;
  text-align: center;
  font-family: Montserrat-Bold;
  font-size: 14px;
  margin-bottom: 20px;
`;
