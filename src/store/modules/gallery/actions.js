export function galleryRequest() {
  return {
    type: '@gallery/GALLERY_REQUEST',
  };
}

export function saveGallery(data) {
  return {
    type: '@gallery/SAVE_GALLERY',
    payload: { data },
  };
}

export function saveGalleryFailure() {
  return {
    type: '@gallery/SAVE_GALLERY_FAILURE',
  };
}

export function paginateGallery(page) {
  return {
    type: '@gallery/PAGINATE_GALLERY',
    payload: { page },
  };
}

export function savePaginateGallery(page, data) {
  return {
    type: '@gallery/SAVE_PAGINATE_GALLERY',
    payload: { page, data },
  };
}

export function GalleryUserRequest(id) {
  return {
    type: '@gallery/USER_GALLERY_REQUEST',
    payload: { id },
  };
}

export function saveGalleryUser(userData) {
  return {
    type: '@gallery/SAVE_GALLERY_USER',
    payload: { userData },
  };
}

export function saveGalleryUserFailure() {
  return {
    type: '@gallery/SAVE_GALLERY_USER_FAILURE',
  };
}
