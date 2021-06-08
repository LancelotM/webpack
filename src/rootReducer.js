import { combineReducers } from 'redux'
import hooksReducers from './pages/hooks/reducers';

// console.warn('hooksParentReducer',hooksParentReducer);
console.warn('hooksReducers',hooksReducers);
// hooksReducers.map((key,val)=>{
//     console.warn('hooksReducers',key,val);

// })
export default combineReducers({
    hooksReducers
    // hooksParentReducer
    // {...hooksReducers}
})