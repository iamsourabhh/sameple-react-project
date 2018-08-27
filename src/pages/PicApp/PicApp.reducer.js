import {
  GET_IMAGES_LOADING,
  GET_IMAGES_SUCCESS
} from "../../redux/actions/actionTypes";

const DEFAULT_STATE = {
  isFetching: true,
  isError: false,
  errorMessage: undefined,
  photos: {
    entities: { images: {} },
    result: []
  }
};

const picAppReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_IMAGES_LOADING:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        photos: payload.images
      };
    default:
      return state;
  }
};

export default picAppReducer;
