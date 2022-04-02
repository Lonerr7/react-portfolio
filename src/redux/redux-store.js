import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './appReducer';
import formReducer from './formReducer';
import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({
  app: appReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
