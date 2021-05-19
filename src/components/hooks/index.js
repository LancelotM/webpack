 
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Parent from './parent';
const defaultCount = 0;

export default function HooksApp(props){
    let history = useHistory();
    let [count,setCount] = useState(defaultCount);

    useEffect(() => {
        console.warn('HooksApp-useEffect-count',count);
    },[count]);

    useEffect(() => {
        console.warn('HooksApp-useEffect-相当于DidMount');
    },[]);

    useEffect(() => {
      console.warn('HooksApp-useEffect没有第二个参数，每次都触发');
    })
    
    return <div>
        <h1>Hello Hooks!</h1>
        <p>{'HooksApp-count:'+count}</p>
        <button onClick={()=>setCount(count+1)}>add app count</button>
        <Parent defaultCount={defaultCount}/>
        <div>
            <button onClick={()=>{
                history.push({
                    pathname: '/',
                    state: {
                        identityId: 1
                    }
                })
                console.error('go to home router');
            }}>go to home</button>
            <button onClick={()=>{
                history.push({
                    pathname: '/react',
                    state: {
                        identityId: 1
                    }
                })
                console.error('go to react router');
            }}>go to react</button>
        </div>
    </div>
}