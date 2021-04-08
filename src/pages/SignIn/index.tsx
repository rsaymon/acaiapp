/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      {/* KeyboardAvoidingView diminuir tamanho ao abrir teclado */}
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        {/* ScrollView dá rolagem. PersistTaps -> teclado ao clicar em qualquer canto da tela*/}
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={require('../../assets/logotuira.png')} />
            {/* View por volta do texto para que o texto tenha estilização*/}
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log('deu');
              }}>
              Entrar
            </Button>

            <ForgotPassword
              onPress={() => {
                console.log('deu');
              }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton
        onPress={() => {
          console.log('deu');
        }}>
        <Icon name="log-in" size={20} color="#f4ede8" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default SignIn;
