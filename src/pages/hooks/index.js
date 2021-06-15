 
import React,{useState,useEffect,useContext,useReducer} from 'react';
import Parent from './parent/index';
import AppFoot from './foot';
import {ThemeContext} from './context/theme';
import {defaultCount} from './config';

export default function HooksApp(props){
    const theme = useContext(ThemeContext);
    console.log('HooksApp-theme',theme);

    useEffect(() => {
        console.warn('HooksApp-useEffect-相当于DidMount');
    },[]);

    useEffect(() => {
      console.warn('HooksApp-useEffect没有第二个参数，每次都触发');
    })
    
    return (
        <ThemeContext.Provider value={theme.dark}>
            <h1>Hello Hooks!</h1>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
            <Parent/>
            <AppFoot/>
        </ThemeContext.Provider>
    )
}