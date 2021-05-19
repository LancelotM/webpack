 
import React,{useState,useEffect,useContext,useReducer} from 'react';
import Parent from './parent';
import AppFoot from './foot';
import {ThemeContext} from './context/theme';
import reducer from './testUseReducer';

const defaultCount = 0;
const initialState = {count: defaultCount};

export default function HooksApp(props){
    // let [count,setCount] = useState(defaultCount);
    /**
     * 测试下来 useReducer 和 state差别不大
     *  切换后不会保存上次的值
     */
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('useReducer',state);
    const theme = useContext(ThemeContext);
    console.log('HooksApp-theme',theme);

    useEffect(() => {
        console.warn('HooksApp-useEffect-count',state.count);
    },[state.count]);

    useEffect(() => {
        console.warn('HooksApp-useEffect-相当于DidMount');
    },[]);

    useEffect(() => {
      console.warn('HooksApp-useEffect没有第二个参数，每次都触发');
    })
    
    return (
        <ThemeContext.Provider value={theme.dark}>
            <h1>Hello Hooks!</h1>
            <p>{'HooksApp-useReducer-count:'+state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
            <Parent defaultCount={defaultCount}/>
            <AppFoot/>
        </ThemeContext.Provider>
    )
}