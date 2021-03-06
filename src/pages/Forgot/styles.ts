import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #828238;
  padding: 0 30px 90px;
`;

export const ImageLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #35350e;
  border-top-width: 1px;
  border-color: #353500;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #f4ede8;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
