import React,{useState,useEffect,useContext,useReducer} from 'react';
import Child from '../child/index';
import {ThemeContext} from '../context/theme';
import {defaultCount} from '../config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/action';

const Parent = (props) => {
    console.error('Parent-props',props);
    const [count,setCount] = useState(defaultCount);
    const {parentCount,actions} = props;
    const theme = useContext(ThemeContext);
    console.log('Parent-theme',theme);

    useEffect(() => {
        console.warn('Parent-useEffect-count',count);
        // const interval = setInterval(()=>{
        //     console.log('Parent-setInterval',count)
        // },1000)
        //清理订阅
        return function cleanup() {
            console.warn('Parent-useEffect-cleanup',count);
            // clearInterval(interval);
        }
    },[count]);

    useEffect(() => {
        console.warn('Parent-useEffect-相当于DidMount');
        for (let i = 0; i < 10; i++) {
            setCount(count+1)
            actions.incrementParentCount()
            // console.warn('Parent-useEffect-for',count);
        }
    },[]);

    return(
        <div>
            <p>
                {'Parent-state-count:'+count}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>setCount(count+1)}>
                        add parent count
                </button>
            </p>
            <p>
                {'Parent-redux-count:'+parentCount}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={actions.incrementParentCount}
                    >
                        increment redux count
                </button>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={actions.decrementParentCount}
                    >
                        decrement redux count
                </button>
            </p>
            <Child/>
        </div>
    )
}

export default (connect(
    state => state.hooksReducers.hooksParentReducer,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
))(Parent);