import { combineReducers, compose, createStore } from 'redux';
import postReducer from './postsDuck';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  posts: postReducer,
});

export default () => {
  let store = createStore(rootReducer, composeEnhancers());

  return store;
};
