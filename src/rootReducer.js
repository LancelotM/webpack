import { combineReducers } from 'redux'
import {hooksParentReducer} from './components/hooks/reducers';

console.warn('hooksParentReducer',hooksParentReducer);
// console.warn('hooksReducers',hooksReducers);
// hooksReducers.map((key,val)=>{
//     console.warn('hooksReducers',key,val);

// })
export default combineReducers({
    hooksParentReducer
    // {...hooksReducers}
})