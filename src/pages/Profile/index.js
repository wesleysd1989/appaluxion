import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GalleryUserRequest } from '../../store/modules/gallery/actions';
import { List } from '../../components';

import {
  Container,
  ProfileContainer,
  ImageProfile,
  InfoContainer,
  TitleProfile,
  SubtitleProfile,
  PortfolioContainer,
  PortifolioTitle,
} from './styles';

const Profile = ({ route }) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.gallery.userData);
  const {
    params: { user },
  } = route;

  const getPhotos = useCallback(() => {
    dispatch(GalleryUserRequest(user.username));
  }, []);

  useEffect(() => {
    getPhotos();
  }, [user]);

  return (
    <Container>
      <ProfileContainer>
        <ImageProfile source={{ uri: user.profile_image.small }} />
        <InfoContainer>
          <TitleProfile>{user.name}</TitleProfile>
          <SubtitleProfile>{user.bio ?? 'without BIO'}</SubtitleProfile>
        </InfoContainer>
      </ProfileContainer>
      <PortfolioContainer>
        <PortifolioTitle>My Photos</PortifolioTitle>
        <List list={userData} />
      </PortfolioContainer>
    </Container>
  );
};

export default Profile;
