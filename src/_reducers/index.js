import { combineReducers } from 'redux';
import blinds from './blindsReducer';
import user from './userReducers';


const rootReducer = combineReducers({
  blinds,
  user
});

export default rootReducer;