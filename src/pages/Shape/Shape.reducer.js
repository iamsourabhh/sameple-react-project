import {
  UPDATE_SHAPE,
  CHANGE_SHAPE,
  CHANGE_COLOR,
  CHANGE_PROJECT,
  UNDO_SHAPE,
  REDO_SHAPE
} from "../../redux/actions/actionTypes";

const INITIAL_STATE = {
  activeProject: "project-1",
  projectState: {},
  undoStack: {
    "project-1": [],
    "project-2": [],
    "project-3": [],
    "project-4": []
  },
  redoStack: {
    "project-1": [],
    "project-2": [],
    "project-3": [],
    "project-4": []
  }
};

const shapeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SHAPE:
      console.log(state);
      if (state.undoStack[state.activeProject] === undefined) {
        return {
          ...state,
          projectState: {
            ...state.projectState,
            [state.activeProject]: {
              shape: payload.shape,
              color: payload.color,
              project: state.activeProject
            }
          },
          undoStack: {
            ...state.undoStack,
            [state.activeProject]: [
              {
                shape: payload.shape,
                color: payload.color,
                project: state.activeProject
              }
            ]
          }
        };
      }
      return {
        ...state,
        projectState: {
          ...state.projectState,
          [state.activeProject]: {
            shape: payload.shape,
            color: payload.color,
            project: state.activeProject
          }
        },
        undoStack: {
          ...state.undoStack,
          [state.activeProject]: state.undoStack[state.activeProject].concat({
            shape: payload.shape,
            color: payload.color,
            project: state.activeProject
          })
        }
      };
    case CHANGE_SHAPE:
      return {
        ...state,
        projectState: {
          ...state.projectState,
          [state.activeProject]: {
            ...state.projectState[state.activeProject],
            shape: payload.shape
          }
        }
      };
    case CHANGE_COLOR:
      return {
        ...state,
        projectState: {
          ...state.projectState,
          [state.activeProject]: {
            ...state.projectState[state.activeProject],

            color: payload.color
          }
        }
      };
    case CHANGE_PROJECT:
      return {
        ...state,
        activeProject: payload.project
      };
    case UNDO_SHAPE:
      if (
        state.undoStack[state.activeProject] === undefined ||
        state.undoStack[state.activeProject].length === 0
      ) {
        return { ...state };
      }
      return {
        ...state,
        redoStack: {
          ...state.redoStack,
          [state.activeProject]: state.redoStack[state.activeProject].concat(
            state.undoStack[state.activeProject][
              state.undoStack[state.activeProject].length - 1
            ]
          )
        },
        projectState: {
          ...state.projectState,
          [state.activeProject]:
            state.undoStack[state.activeProject][
              state.undoStack[state.activeProject].length - 1
            ]
        },
        undoStack: {
          ...state.undoStack,
          [state.activeProject]: state.undoStack[state.activeProject].slice(
            0,
            state.undoStack[state.activeProject].length - 1
          )
        }
      };
    case REDO_SHAPE:
      if (
        state.undoStack[state.activeProject] === undefined ||
        state.redoStack[state.activeProject].length === 0
      ) {
        return { ...state };
      }
      return {
        ...state,
        projectState: {
          ...state.projectState,

          [state.activeProject]:
            state.undoStack[state.activeProject][
              state.undoStack[state.activeProject].length - 1
            ]
        },
        undoStack: {
          ...state.undoStack,
          [state.activeProject]: state.undoStack[state.activeProject].concat(
            state.redoStack[state.activeProject][
              state.redoStack[state.activeProject].length - 1
            ]
          )
        },
        redoStack: {
          ...state.redoStack,
          [state.activeProject]: state.redoStack[state.activeProject].slice(
            0,
            state.redoStack[state.activeProject].length - 1
          )
        }
      };
    default:
      return state;
  }
};

export default shapeReducer;
