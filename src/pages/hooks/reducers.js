import { combineReducers } from 'redux'
import hooksParentReducer from './parent/redux/reducer';
import hooksChildReducer from './child/redux/reducer';

export default combineReducers({
    hooksParentReducer,
    hooksChildReducer
})