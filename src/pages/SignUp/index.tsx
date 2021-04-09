/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';

import Button from '../../components/Button';
import Input from '../../components/Input';
import InputHalf from '../../components/InputHalf';
import {
  Container,
  ImageLogo,
  Title,
  BackToSignIn,
  BackToSignInText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  return (
    <>
      {/* KeyboardAvoidingView diminuir tamanho ao abrir teclado */}
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        {/* ScrollView dá rolagem. PersistTaps -> teclado ao clicar em qualquer canto da tela*/}
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <Container>
            <ImageLogo source={require('../../assets/logotuira.png')} />
            {/* View por volta do texto para que o texto tenha estilização*/}
            <View>
              <Title>Faça seu cadastro</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={data => {
                console.log(data);
              }}>
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
              <View>
                <Title>Informações de endereço</Title>
              </View>
              <Input name="city" icon="map-pin" placeholder="Cidade" />
              <Input name="district" icon="map-pin" placeholder="Bairro" />
              <Input
                name="address"
                icon="map-pin"
                placeholder="Rua / Avenida"
              />
              <InputHalf name="number" icon="map-pin" placeholder="Número" />
              <Input name="district" icon="map-pin" placeholder="Complemento" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Cadastrar
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
export default SignUp;
