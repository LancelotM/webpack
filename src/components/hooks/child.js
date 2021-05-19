import React,{useState,useEffect} from 'react';

export default function Child(props){
    console.log('Child-props',props);
    let [count,setCount] = useState(props.defaultCount);

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
            <button onClick={()=>setCount(count+1)}>add child count</button>
        </div>
    )
}