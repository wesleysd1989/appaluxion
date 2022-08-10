import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const ImageContainer = styled.ImageBackground`
  height: ${Dimensions.get('window').height}px;
  background-color: #e5e5e5;
  display: flex;
  justify-content: flex-end;
`;

export const BottomContainer = styled(LinearGradient)`
  height: 268px;
`;

export const TextContainer = styled.View`
  width: 253px;
  margin: 33px 26px 26px 26px;
`;

export const Title = styled.Text`
  font-size: 42px;
  line-height: 49px;
  font-family: 'MuseoSans-500';
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-family: 'MuseoSans-300';
  color: #fff;
`;

export const ProfileContainer = styled.View`
  margin: 26px 0;
  flex-direction: row;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  height: 37px;
  width: 37px;
  border-radius: 18.5px;
`;

export const InfoContainer = styled.View`
  margin-left: 8px;
`;

export const TitleProfile = styled.Text`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  font-family: 'MuseoSans-500';
  color: #fff;
`;

export const SubtitleProfile = styled.Text`
  font-size: 10px;
  line-height: 12px;
  font-family: 'MuseoSans-300';
  color: #fff;
`;
