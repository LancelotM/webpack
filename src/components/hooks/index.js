 
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Parent from './parent';

export default function HooksDemo(props){
    let history = useHistory();

    useEffect(() => {
        console.warn('HooksDemo-相当于DidMount');
    },[]);

    useEffect(() => {
      console.warn('HooksDemo-useEffect没有第二个参数，每次都触发');
    })
    
    return <div>
        <h1>Hello Hooks!</h1>
        <Parent/>
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