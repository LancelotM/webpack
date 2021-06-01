
import {PARENT_INCREMENT,PARENT_DECREMENT,PARENT_CHANGE_STATE} from './constants';


export const incrementCount = () => {
    console.log('incrementCount');
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_INCREMENT
        })
    }
};

export const decrementCount = () => {
    console.log('decrementCount');
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: PARENT_DECREMENT
        })
    }
};

export const changeCount = (count) => {
    console.log('changeCount',count);
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