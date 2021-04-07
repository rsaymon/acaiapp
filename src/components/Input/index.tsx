import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => (
  <Container>
    <Icon name={icon} size={20} color="#aaaaaa" />
    <TextInput placeholderTextColor="#aaaaaa" {...rest} />
  </Container>
);
export default Input;
