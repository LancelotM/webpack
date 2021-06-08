import React,{useState,useEffect} from 'react';

export default function Test(props){
    const [test,testFunc] = useState(0)
    return <div>
        {test}
    </div>
}