 
import React ,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default function HooksDemo(props){
    let history = useHistory();
    let [count,setCount] = useState(2);
    let [countNum,setCountNum] = useState(2);

    useEffect(() => {
        console.warn('HooksDemo-useEffect',count);
        //清理订阅
        return function cleanup() {
            console.warn('HooksDemo-useEffect-cleanup',count);
        }
    },[count]);

    useEffect(() => {
        console.warn('HooksDemo-useEffect-countNum',countNum);
    },[countNum]);

    useEffect(() => {
        console.warn('HooksDemo-useEffect-nop-countNum',countNum);
    },[]);
    
    return <div>
        <h1>Hello Hooks!</h1>
        <p>{'count:'+count}</p>
        <p>{'countNum:'+countNum}</p>
        <button onClick={()=>setCount(count+1)}>add count</button>
        <button onClick={()=>setCountNum(countNum+1)}>add countNum</button>
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