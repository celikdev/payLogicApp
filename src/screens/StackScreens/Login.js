import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FastScalableTrustworthy} from '../../components/Login';
import {
  Button,
  ButtonText,
  Container,
  Input,
} from '../../components/main/StyledComponents';

const Login = ({navigation}) => {
  const [userTCIdentityNumber, setUserTCIdentityNumber] = useState('');

  return (
    <Container>
      <FastScalableTrustworthy />
      <Input
        onChangeText={text => setUserTCIdentityNumber(text)}
        keyboardType="numeric"
        placeholderTextColor="#202020"
        placeholder="TC Identity Number"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.35,
          shadowRadius: 6.27,

          elevation: 10,
        }}
      />
      <Button disabled dis={true} activeOpacity={0.8}>
        <ButtonText>Next</ButtonText>
      </Button>
      <Text style={{color: 'black'}}>{userTCIdentityNumber}</Text>
    </Container>
  );
};

export default Login;
