import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services';

import {
  saveGallery,
  saveGalleryFailure,
  saveGalleryUser,
  saveGalleryUserFailure,
} from './actions';

export function* gallery() {
  try {
    const response = yield call(api.get, 'photos');
    const data = response.data;
    yield put(saveGallery(data));
  } catch (error) {
    Alert.alert('Erro', 'error requesting photos');

    yield put(saveGalleryFailure());
  }
}

export function* userGallery({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `users/${id}/photos`);
    const data = response.data;
    yield put(saveGalleryUser(data));
  } catch (error) {
    Alert.alert('Erro', 'error requesting photos of user');
    yield put(saveGalleryUserFailure());
  }
}

export default all([
  takeLatest('@gallery/GALLERY_REQUEST', gallery),
  takeLatest('@gallery/USER_GALLERY_REQUEST', userGallery),
]);
