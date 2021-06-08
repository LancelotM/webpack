import {PARENT_INCREMENT,PARENT_DECREMENT,PARENT_CHANGE_STATE} from './constants';
import initialState from './initialState';

export default function reducer(state=initialState, action) {
    console.log('parent-reducer', state, action);
    switch (action.type) {
        case PARENT_INCREMENT:
            return {count: state.count + 1};
        case PARENT_DECREMENT:
            return {count: state.count - 1};
        case PARENT_CHANGE_STATE:
            return Object.assign({},state,action.data);
        default:
            return state;
            // throw new Error();
            // break;
    }
}