import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CHILD_INCREMENT,CHILD_DECREMENT,CHILD_CHANGE_STATE} from './constants';

export const useClaimAllCount = () => {
    const dispatch = useDispatch();

    const { fetchClaimPending } = useSelector(
        state => ({
            fetchClaimPending: state.farm.fetchClaimPending,
        })
    );

    const boundAction = useCallback(
        data => dispatch(fetchClaim(data)),
        [dispatch]
    );
    return
}


export const claimAllCount1 = ()=>{
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