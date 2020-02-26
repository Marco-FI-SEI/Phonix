import {
  createStore,
  // combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  forumReducer as forum
} from "../reducers/forumReducer";

const configureStore = () => {
  // const rootReducer = combineReducers({
  //   forum
  // });

  const store = createStore(
    forum,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}

export default configureStore;
