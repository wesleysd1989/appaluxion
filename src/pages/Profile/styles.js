import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 26px;
  background-color: #e5e5e5;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  height: 63px;
  width: 63px;
  border-radius: 31.5px;
`;

export const InfoContainer = styled.View`
  margin-left: 8px;
  width: 256px;
`;

export const TitleProfile = styled.Text`
  font-size: 22px;
  line-height: 26px;
  font-family: 'MuseoSans-500';
  font-weight: bold;
  color: #000;
`;

export const SubtitleProfile = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: 'MuseoSans-300';
  color: #000;
`;

export const PortfolioContainer = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const PortifolioTitle = styled.Text`
  font-family: 'MuseoSans-500';
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  color: #000;
`;
