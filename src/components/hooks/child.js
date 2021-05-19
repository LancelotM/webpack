import React,{useState,useEffect,useContext} from 'react';
import {ThemeContext} from './context/theme';

export default function Child(props){
    console.log('Child-props',props);
    let [count,setCount] = useState(props.defaultCount);
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
        }
    },[]);

    return(
        <div>
            <p>{'Child-count:'+count}</p>
            <button 
                style={{
                    background:theme.background,
                    color:theme.foreground
                }} 
                onClick={()=>setCount(count+1)}>
                    add child count
            </button>
        </div>
    )
}