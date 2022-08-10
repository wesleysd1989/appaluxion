import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground`
  height: 218px;
  width: 151px;
  background-color: #e5e5e5;
  border-radius: 10px;
  margin-left: ${props => (props.margin ? `26px` : 0)};
  margin-top: ${props => (props.margin ? `${props.margin}px` : 0)};
`;

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const TextContainer = styled(LinearGradient)`
  display: flex;
  justify-content: flex-end;
  height: 59px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 9px 12px;
`;

export const Title = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: 'MuseoSans-500';
  font-weight: bold;
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-size: 8px;
  line-height: 9px;
  font-family: 'MuseoSans-500';
  color: #fff;
`;
