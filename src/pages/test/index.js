import React,{useState,useEffect} from 'react';
import './index.css';

export default function Test(props){
    return <div className='css-test'>
        <h1>Css样式</h1>
        <div>
            <h3>div模拟输入框</h3>
            <div className='divToTextarea' contenteditable="true"></div>
        </div>
    </div>
}