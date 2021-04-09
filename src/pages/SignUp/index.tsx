/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
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
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const cityInputRef = useRef<TextInput>(null);
  const districtInputRef = useRef<TextInput>(null);
  const addressInputRef = useRef<TextInput>(null);
  const numberInputRef = useRef<TextInput>(null);
  const complementInputRef = useRef<TextInput>(null);
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
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => {
                  cityInputRef.current?.focus();
                }}
              />
              <View>
                <Title>Informações de endereço</Title>
              </View>
              <Input
                ref={cityInputRef}
                name="city"
                icon="map-pin"
                placeholder="Cidade"
                autoCorrect={true}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  districtInputRef.current?.focus();
                }}
              />
              <Input
                ref={districtInputRef}
                name="district"
                icon="map-pin"
                placeholder="Bairro"
                autoCorrect={false}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  addressInputRef.current?.focus();
                }}
              />
              <Input
                ref={addressInputRef}
                name="address"
                icon="map-pin"
                placeholder="Rua / Avenida"
                autoCorrect={true}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  numberInputRef.current?.focus();
                }}
              />
              <InputHalf
                ref={numberInputRef}
                name="number"
                icon="map-pin"
                placeholder="Número"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => {
                  complementInputRef.current?.focus();
                }}
              />
              <Input
                ref={complementInputRef}
                name="complement"
                icon="map-pin"
                placeholder="Complemento"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

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
