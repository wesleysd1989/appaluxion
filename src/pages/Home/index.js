import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { galleryRequest } from '../../store/modules/gallery/actions';
import { Container } from './styles';
import { List } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.gallery);

  const getPhotos = useCallback(() => {
    dispatch(galleryRequest());
  }, []);

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container>
      <List list={data} loading={loading} />
    </Container>
  );
};

export default Home;
