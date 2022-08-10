import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  BottomContainer,
  Container,
  ImageContainer,
  Title,
  Subtitle,
  TextContainer,
  ProfileContainer,
  InfoContainer,
  TitleProfile,
  SubtitleProfile,
  ImageProfile,
} from './styles';

const Detail = ({ route, navigation }) => {
  const {
    params: { item },
  } = route;

  return (
    <Container>
      <ImageContainer source={{ uri: item.urls.regular }} resizeMode="cover">
        <BottomContainer colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0, 0.75)']}>
          <TextContainer>
            <Title>
              {item?.description?.length > 15
                ? `${item.description.slice(0, 15)}...`
                : item.user.name}
            </Title>
            <Subtitle>{item.likes} likes</Subtitle>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('Profile', {
                  user: item.user,
                })
              }
            >
              <ProfileContainer>
                <ImageProfile source={{ uri: item.user.profile_image.small }} />
                <InfoContainer>
                  <TitleProfile>{item.user.name}</TitleProfile>
                  <SubtitleProfile>View profile</SubtitleProfile>
                </InfoContainer>
              </ProfileContainer>
            </TouchableOpacity>
          </TextContainer>
        </BottomContainer>
      </ImageContainer>
    </Container>
  );
};

export default Detail;
