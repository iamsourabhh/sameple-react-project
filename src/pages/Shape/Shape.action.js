import {
  UPDATE_SHAPE,
  CHANGE_SHAPE,
  CHANGE_COLOR,
  CHANGE_PROJECT,
  UNDO_SHAPE,
  REDO_SHAPE
} from "../../redux/actions/actionTypes";

export const updateShape = (shape, color) => {
  return {
    type: UPDATE_SHAPE,
    payload: {
      shape,
      color
    }
  };
};
export const changeShape = shape => {
  return {
    type: CHANGE_SHAPE,
    payload: {
      shape
    }
  };
};
export const changeColor = color => {
  return {
    type: CHANGE_COLOR,
    payload: {
      color
    }
  };
};
export const changeProject = project => {
  return {
    type: CHANGE_PROJECT,
    payload: {
      project
    }
  };
};
export const undo = () => {
  return {
    type: UNDO_SHAPE
  };
};
export const redo = () => {
  return {
    type: REDO_SHAPE
  };
};
