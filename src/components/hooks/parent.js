import React,{useState,useEffect} from 'react';
import Child from './child';

export default function Parent(props){
  let [count,setCount] = useState(2);

  useEffect(() => {
    console.warn('Parent-useEffect-count',count);
    //清理订阅
    return function cleanup() {
        console.warn('Parent-useEffect-cleanup',count);
    }
  },[count]);

  useEffect(() => {
    console.warn('Parent-相当于DidMount');
  },[]);

  return(
    <div>
      <p>{'count:'+count}</p>
      <button onClick={()=>setCount(count+1)}>add count</button>
      <Child/>
    </div>
  )
}