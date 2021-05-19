import React,{useState,useEffect,useContext,useCallback,useMemo,useRef} from 'react';
import {ThemeContext} from './context/theme';
import { mergeCount } from "./testUseCallbackUseMemo";

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

    /**
     * 第二个参数变化 调用第一个回调函数
     */
    const memoizedCallback = useCallback(
        ()=>{
            /**
             * 这里可以写关于第二个参数改后需要处理的业务逻辑
             */
            return mergeCount(props.parentCount,count)
        },
        [props.parentCount,count]
    );
    console.log('memoizedCallback',memoizedCallback,memoizedCallback());
    /**
     * 第二个参数变化 调用第一个方法
     */
    const memoizedValue = useMemo(
        () => mergeCount(props.parentCount,count), 
        [props.parentCount,count]
    );
    console.log('memoizedValue',memoizedValue);

    const inputEl = useRef(null);

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
            <div>
                <input ref={inputEl} type='text'/>
                <button onClick={()=>{
                    inputEl.current.focus();
                }}>Focus the input</button>
                <button onClick={()=>{
                    console.log('inputEl',inputEl);
                }}>submit</button>
            </div>
        </div>
    )
}