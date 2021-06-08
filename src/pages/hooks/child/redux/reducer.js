import {CHILD_INCREMENT,CHILD_DECREMENT,CHILD_CHANGE_STATE} from './constants';
import initialState from './initialState';

export default function reducer(state=initialState, action) {
    console.log('child-reducer', state, action);
    switch (action.type) {
        case CHILD_INCREMENT:
            return {count: state.count + 1};
        case CHILD_DECREMENT:
            return {count: state.count - 1};
        case CHILD_CHANGE_STATE:
            return Object.assign({},state,action.data);
        default:
            return state;
            // throw new Error();
            // break;
    }
}