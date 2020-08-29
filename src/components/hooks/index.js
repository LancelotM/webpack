 
import React ,{useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function HooksDemo(props){
    let history = useHistory();
    let [count,setCount] = useState(2);
    return <div>
        <h1>Hello Hooks!</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>add</button>
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