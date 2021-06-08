
import {PARENT_INCREMENT,PARENT_DECREMENT,PARENT_CHANGE_STATE} from './constants';


export const incrementParentCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_INCREMENT
        })
    }
};

export const decrementParentCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_DECREMENT
        })
    }
};

export const changeParentCount = (parentCount) => {
    console.log('parent-changeCount',parentCount);
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_CHANGE_STATE,
            data:{
                parentCount
            }
        })
    }
};