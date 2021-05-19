import React,{useState,useEffect} from 'react';
import Child from './child';

export default function Parent(props){
    let [count,setCount] = useState(props.defaultCount);

    useEffect(() => {
        console.warn('Parent-useEffect-count',count);
        //清理订阅
        return function cleanup() {
            console.warn('Parent-useEffect-cleanup',count);
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
            <button onClick={()=>setCount(count+1)}>add count</button>
            <Child parentCount={count} {...props}/>
        </div>
    )
}