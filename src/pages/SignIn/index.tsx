import React from 'react';

import {Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container, Title} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={require('../../assets/logoacaiapp.png')} />
        <Title>Faça seu login</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />
        <Button>Entrar</Button>
      </Container>
    </>
  );
};
export default SignIn;
