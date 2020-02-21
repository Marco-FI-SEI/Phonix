import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { authReducer } from "../reducers/googleAuthReducer";

const configureStore = () => {
  const rootReducer = combineReducers({
    googleAuth: authReducer,
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
