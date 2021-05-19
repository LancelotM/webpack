import React,{useState,useEffect} from 'react';

export default function Child(props){
  let [countNum,setCountNum] = useState(2);

  useEffect(() => {
    console.warn('Child-useEffect-countNum',countNum);
  },[countNum]);

  useEffect(() => {
    console.warn('Child-useEffect-相当于DidMount');
  },[]);

  return(
    <div>
      <p>{'countNum:'+countNum}</p>
      <button onClick={()=>setCountNum(countNum+1)}>add countNum</button>
    </div>
  )
}