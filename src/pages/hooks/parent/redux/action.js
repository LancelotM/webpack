
import {PARENT_INCREMENT,PARENT_DECREMENT,PARENT_CHANGE_STATE} from './constants';


export const incrementCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_INCREMENT
        })
    }
};

export const decrementCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_DECREMENT
        })
    }
};

export const changeCount = (count) => {
    console.log('parent-changeCount',count);
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_CHANGE_STATE,
            data:{
                count
            }
        })
    }
};