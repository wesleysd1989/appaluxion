import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
  height: ${Dimensions.get('window').height}px;
  align-items: center;
  justify-content: center;
`;

export const AnimatableText = styled(Animatable.Text)`
  font-size: 24px;
`;
