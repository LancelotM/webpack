import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {CHILD_INCREMENT,CHILD_DECREMENT,CHILD_CHANGE_STATE} from './constants';

export const useClaimAllCount = () => {
    const dispatch = useDispatch();

    const { parentCount,childCount,allCount } = useSelector(
        state => ({
          parentCount: state.hooksReducers.hooksParentReducer.parentCount,
          childCount: state.hooksReducers.hooksChildReducer.childCount,
          allCount: state.hooksReducers.hooksChildReducer.allCount
        })
    ,shallowEqual);
    // console.error('shallowEqual',shallowEqual);
    const boundClaimAllCountAction = useCallback(
        data => dispatch(claimAllCount()),
        [dispatch]
    );
    const boundIncrementChildCountAction = useCallback(
        data => dispatch(incrementChildCount()),
        [dispatch]
    );
    const boundDecrementChildCountAction = useCallback(
        data => dispatch(decrementChildCount()),
        [dispatch]
    );
    return {
        parentCount,
        childCount,
        allCount,
        claimAllCount:boundClaimAllCountAction,
        incrementChildCount:boundIncrementChildCountAction,
        decrementChildCount:boundDecrementChildCountAction
    }
}


export const claimAllCount = ()=>{
    return (dispatch, getState) => {
        let hooksState = getState().hooksReducers;
        let allCount = hooksState.hooksChildReducer.childCount + hooksState.hooksParentReducer.parentCount
        dispatch({
            type:CHILD_CHANGE_STATE,
            data:{
                allCount
            }
        })
    }
}

export const incrementChildCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: CHILD_INCREMENT
        })
    }
};

export const decrementChildCount = () => {
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: CHILD_DECREMENT
        })
    }
};

export const changeChildCount = (childCount) => {
    console.log('child-changeCount',childCount);
    return (dispatch, getState) => {
        console.log(dispatch,getState());
        dispatch({
            type: CHILD_CHANGE_STATE,
            data:{
                childCount
            }
        })
    }
};