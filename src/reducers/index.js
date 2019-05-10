import { combineReducers } from 'redux';
import user from './user';
import networkInfo from './networkInfo';

export default combineReducers({
  user,
  networkInfo,
});
