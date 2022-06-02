import React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../../assets/Colors';
import {HomeIcon} from '../../assets/Icons';
import RecentTransactions from '../components/Home/RecentTransactions';
import {BakiyeText, Container, Fix} from '../components/main/StyledComponents';

const Home = () => {
  const userBakiye = '61,10';
  const userPayLogicID = 55348412;
  return (
    <Fix>
      <Container>
        <BakiyeText>Home</BakiyeText>
      </Container>
    </Fix>
  );
};

export default Home;
