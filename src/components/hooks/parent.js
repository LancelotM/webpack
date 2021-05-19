import React,{useState,useEffect} from 'react';
import Child from './child';

export default function Parent(props){
    console.log('Parent-props',props);
    let [count,setCount] = useState(props.defaultCount);

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
            <button onClick={()=>setCount(count+1)}>add parent count</button>
            <Child parentCount={count} {...props}/>
        </div>
    )
}