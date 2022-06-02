import React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../../assets/Colors';
import {FastScalableTrustworthy} from '../../components/Login';
import {
  Button,
  ButtonText,
  Container,
} from '../../components/main/StyledComponents';

const LoginOrRegister = ({navigation}) => {
  return (
    <Container>
      <FastScalableTrustworthy />
      <Button
        onPress={() => navigation.navigate('LoginPage')}
        activeOpacity={0.8}>
        <ButtonText>Login</ButtonText>
      </Button>
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 12,
          color: COLORS.TEXT_COLOR,
          paddingVertical: 10,
        }}>
        or
      </Text>
      <Button activeOpacity={0.8}>
        <ButtonText>Register</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginOrRegister;
