import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { authReducer } from "../reducers/googleAuthReducer";
import { headphoneReducer } from "../reducers/headphoneReducer";

const configureStore = () => {
  const rootReducer = combineReducers({
    googleAuth: authReducer,
    headphoneReducer
  });

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}

export default configureStore;
