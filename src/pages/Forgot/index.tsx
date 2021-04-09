/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import {useNavigation} from '@react-navigation/native';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText,
  ImageLogo,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);
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
            <ImageLogo source={require('../../assets/logotuira.png')} />
            {/* View por volta do texto para que o texto tenha estilização*/}
            <View>
              <Title>Digite seu e-mail</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Recuperar Senha
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Icon name="arrow-left" size={20} color="#f4ede8" />
        <BackToSignInText>Voltar para o login</BackToSignInText>
      </BackToSignIn>
    </>
  );
};
export default SignIn;
