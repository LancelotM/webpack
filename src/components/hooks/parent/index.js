import React,{useState,useEffect,useContext} from 'react';
import Child from '../child/index';
import {ThemeContext} from '../context/theme';
import {defaultCount} from '../config';

export default function Parent(props){
    console.log('Parent-props',props);
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
            <p>{'Parent-count:'+count}</p>
            <button 
                style={{
                    background:theme.background,
                    color:theme.foreground
                }} 
                onClick={()=>setCount(count+1)}>
                    add parent count
            </button>
            <Child parentCount={count} {...props}/>
        </div>
    )
}