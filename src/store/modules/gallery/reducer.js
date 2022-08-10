import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  userData: [],
  loading: false,
};

export default function gallery(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@gallery/GALLERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@gallery/SAVE_GALLERY': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@gallery/SAVE_GALLERY_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@gallery/USER_GALLERY_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@gallery/SAVE_GALLERY_USER': {
        draft.userData = action.payload.userData;
        draft.loading = false;
        break;
      }
      case '@gallery/SAVE_GALLERY_USER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
