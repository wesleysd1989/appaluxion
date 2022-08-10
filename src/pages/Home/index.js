import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  galleryRequest,
  paginateGallery,
} from '../../store/modules/gallery/actions';
import { Container } from './styles';
import { List } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, page } = useSelector(state => state.gallery);

  const getPhotos = useCallback(() => {
    dispatch(galleryRequest());
  }, []);

  useEffect(() => {
    getPhotos();
  }, []);

  const loadMore = () => dispatch(paginateGallery(page + 1));

  return (
    <Container>
      <List loadMore={loadMore} list={data} loading={loading} />
    </Container>
  );
};

export default Home;
