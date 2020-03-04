import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { authReducer as googleAuth } from "../reducers/googleAuthReducer";
import { reviewReducer as review } from "../reducers/reviewReducer";
import { headphoneReducer as headphone } from "../reducers/headphoneReducer";

const configureStore = () => {
  const rootReducer = combineReducers({
    review,
    headphone,
    googleAuth,
    form: formReducer
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
