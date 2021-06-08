import React,{useState,useEffect,useContext,useReducer} from 'react';
import Child from '../child/index';
import {ThemeContext} from '../context/theme';
import {defaultCount} from '../config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/action';
// import initialState from './redux/initialState';
// import reducer from './redux/reducer';
// import {PARENT_INCREMENT,PARENT_DECREMENT,PARENT_CHANGE_STATE} from './redux/constants';

const Parent = (props) => {
    console.error('Parent-props',props);
    // const [state, dispatch] = useReducer(reducer, initialState);
    // console.log('useReducer-state',state);
    let [count,setCount] = useState(defaultCount);
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
            console.warn('Parent-useEffect-for',count);
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
                {'Parent-redux-count:'+props.parentCount}
                {/* {'Parent-redux-count:'+state.count} */}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={props.actions.incrementCount}
                    // onClick={()=>{
                    //     dispatch({type:PARENT_INCREMENT})
                    // }}
                    >
                        increment redux count
                </button>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={props.actions.decrementCount}
                    // onClick={()=>{
                    //     dispatch({type:PARENT_DECREMENT})
                    // }}
                    >
                        decrement redux count
                </button>
            </p>
            <Child/>
        </div>
    )
}

// export default Parent;

export default (connect(
    state => state.hooksParentReducer,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
))(Parent);