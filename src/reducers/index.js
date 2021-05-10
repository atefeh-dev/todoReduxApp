import { combineReducers } from 'redux';
import todoReducers from './todoReducer';

export default combineReducers({
  todo : todoReducers
});
