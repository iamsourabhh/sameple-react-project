import { combineReducers } from "redux";
import picAppReducer from "../pages/PicApp/PicApp.reducer";
import shapeReducer from "../pages/Shape/Shape.reducer";

const rootReducer = combineReducers({
  picApp: picAppReducer,
  shapeApp: shapeReducer
});

export default rootReducer;
