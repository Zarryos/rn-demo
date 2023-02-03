import {combineReducers} from 'redux';
import users from './users';

const appReducer = combineReducers({
  users,
});

export default appReducer;

export type State = any;
