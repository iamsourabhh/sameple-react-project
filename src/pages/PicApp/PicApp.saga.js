import {
  GET_IMAGES_LOADING,
  GET_IMAGES_ERROR,
  GET_IMAGES_SUCCESS,
  GET_IMAGES
} from "../../redux/actions/actionTypes";
import { put, call, takeLatest } from "redux-saga/effects";
import getPics from "../../api/getPics";
import { normalize } from "normalizr";
import { arrayOfImages } from "../../redux/normalizr";

function* getImages(action) {
  try {
    yield put({ type: GET_IMAGES_LOADING });
    const response = yield call(getPics);
    yield put({
      type: GET_IMAGES_SUCCESS,
      payload: { images: normalize(response.data, arrayOfImages) }
    });
  } catch (error) {
    yield put({ type: GET_IMAGES_ERROR });
  }
}
function* picAppSaga() {
  yield takeLatest(GET_IMAGES, getImages);
}

export default picAppSaga;
