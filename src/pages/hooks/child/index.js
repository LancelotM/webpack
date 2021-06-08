import React,{useState,useEffect,useContext,useCallback,useMemo,useRef} from 'react';
import {ThemeContext} from '../context/theme';
import {defaultCount} from '../config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/action';

const Child = (props) => {
    console.error('Child-props',props);
    const {childCount,allCount,actions} = props;
    const [count,setCount] = useState(defaultCount);
    // const [allCount,setAllCount] = useState(0);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        console.warn('Child-useEffect-count',count);
    },[count]);

    useEffect(() => {
        console.warn('Child-useEffect-相当于DidMount');
        for (let i = 0; i < 10; i++) {
            setCount((prevState,prevProps)=>{
                console.warn('Child-useEffect-for',prevState,prevProps);
                return prevState+1;
            })
            actions.incrementChildCount()
        }
    },[]);

    useEffect(() => {
        actions.claimAllCount1()
    })

    const inputEl = useRef(null);

    return(
        <div>
            <p>
                {'Child-state-count:'+count}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>setCount(count+1)}>
                        add child count
                </button>
            </p>
            <p>
                {'Child-redux-count:'+childCount}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={actions.incrementChildCount}>
                        increment redux count
                </button>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={actions.decrementChildCount}>
                        decrement redux count
                </button>
            </p>
            <p>{'allCount:'+allCount}</p>
            <div>
                <input ref={inputEl} type='text'/>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>{
                        inputEl.current.focus();
                    }}>
                        Focus the input
                </button>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>{
                        console.log('inputEl',inputEl.current.value);
                    }}>
                        submit
                </button>
            </div>
        </div>
    )
}

export default (connect(
    state => state.hooksReducers.hooksChildReducer,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
))(Child);

// export default (connect(
//     state => ({
//         parent:state.hooksReducers.hooksParentReducer,
//         child:state.hooksReducers.hooksChildReducer
//     }),
//     dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
// ))(Child);