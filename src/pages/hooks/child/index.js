import React,{useState,useEffect,useLayoutEffect,useContext,useCallback,useMemo,useRef} from 'react';
import {ThemeContext} from '../context/theme';
import {defaultCount} from '../config';
import { useClaimAllCount } from './redux/action';

export default function Child(props){
    console.error('Child-props',props);
    // const {childCount,allCount,actions} = props;
    const [count,setCount] = useState(defaultCount);
    const {childCount,allCount,parentCount,claimAllCount,incrementChildCount,decrementChildCount} = useClaimAllCount();
    console.warn(claimAllCount);
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
            incrementChildCount()
        }
    },[]);

    //点按钮太快 allCount有时会undefined 用 useLayoutEffect 同步渲染可以了
    // useLayoutEffect(() => {
    useEffect(() => {
        claimAllCount()
    },[parentCount,childCount])

    const inputEl = useRef(null);

    return(
        <div>
            <p>
                {'Child-state-count:'+count}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>setCount(count+1)}>
                        add child count
                </button>
            </p>
            <p>
                {'Child-redux-count:'+childCount}
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    // onClick={actions.incrementChildCount}>
                    onClick={incrementChildCount}>
                        increment redux count
                </button>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    // onClick={actions.decrementChildCount}>
                    onClick={decrementChildCount}>
                        decrement redux count
                </button>
            </p>
            <p>{'allCount:'+allCount}</p>
            <div>
                <input ref={inputEl} type='text'/>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>{
                        inputEl.current.focus();
                    }}>
                        Focus the input
                </button>
                <button 
                    style={{
                        background:theme.background,
                        color:theme.foreground
                    }} 
                    onClick={()=>{
                        console.log('inputEl',inputEl.current.value);
                    }}>
                        submit
                </button>
            </div>
        </div>
    )
}
