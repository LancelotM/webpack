import React from 'react';
import Parent from './parent';
import MyWorldMap from './MyWorldMap';
import './index.scss';

export default function ReactDemo(){
    const myWordMapRef = React.useRef();

    return (
        <div>
            <button onClick={()=>{
                console.warn('myWordMapRef',myWordMapRef);
            }}>parentRef</button>
            <MyWorldMap ref={myWordMapRef}></MyWorldMap>
            <Parent/>
        </div>
    )
}