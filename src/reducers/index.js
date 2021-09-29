import { combineReducers } from "redux";

import userReducer from "./userReducer";
import productsReducers from './productsReducer';
import formReducer from "./formReducer";

export default combineReducers({
  user: userReducer,
  products: productsReducers,
  form: formReducer
});
