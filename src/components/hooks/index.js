 
import React,{useState,useEffect,useContext} from 'react';
import Parent from './parent';
import AppFoot from './foot';
import {ThemeContext} from './context/theme';

const defaultCount = 0;

export default function HooksApp(props){
    let [count,setCount] = useState(defaultCount);
    const theme = useContext(ThemeContext);
    console.log('HooksApp-theme',theme);

    useEffect(() => {
        console.warn('HooksApp-useEffect-count',count);
    },[count]);

    useEffect(() => {
        console.warn('HooksApp-useEffect-相当于DidMount');
    },[]);

    useEffect(() => {
      console.warn('HooksApp-useEffect没有第二个参数，每次都触发');
    })
    
    return (
        <ThemeContext.Provider value={theme.dark}>
            <h1>Hello Hooks!</h1>
            <p>{'HooksApp-count:'+count}</p>
            <button onClick={()=>setCount(count+1)}>add app count</button>
            <Parent defaultCount={defaultCount}/>
            <AppFoot/>
        </ThemeContext.Provider>
    )
}