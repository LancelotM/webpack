import React,{useState,useEffect} from 'react';

export default function Child(props){
    console.log('Child',props);
    let [countNum,setCountNum] = useState(props.defaultCount);

    useEffect(() => {
        console.warn('Child-useEffect-countNum',countNum);
    },[countNum]);

    useEffect(() => {
        console.warn('Child-useEffect-相当于DidMount');
        for (let i = 0; i < 10; i++) {
            setCountNum((prevState,prevProps)=>{
                console.warn('Child-useEffect-for',prevState,prevProps);
                return prevState+1;
            })
        }
    },[]);

    return(
        <div>
            <p>{'Child-countNum:'+countNum}</p>
            <button onClick={()=>setCountNum(countNum+1)}>add countNum</button>
        </div>
    )
}