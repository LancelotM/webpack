import {CHILD_INCREMENT,CHILD_DECREMENT,CHILD_CHANGE_STATE} from './constants';


export const incrementCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: CHILD_INCREMENT
        })
    }
};

export const decrementCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: CHILD_DECREMENT
        })
    }
};

export const changeCount = (count) => {
    console.log('child-changeCount',count);
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: CHILD_CHANGE_STATE,
            data:{
                count
            }
        })
    }
};