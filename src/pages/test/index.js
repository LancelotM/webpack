import React,{useState,useEffect} from 'react';
import './index.css';

export default function Test(props){
    return <div className='cssTest'>
        <h1>Css样式</h1>
        <div>
            <h3>div模拟输入框</h3>
            <p className='divToTextarea' contenteditable="true"></p>
        </div>
        <div>
            <h3>4个正方形分别放到4个角落</h3>
            <p className='flex test2Body flexBetween'>
                <div className='flex flexBetween'>
                    <div className='flex test2Item'>1</div>
                    <div className='flex test2Item'>2</div>
                </div>
                <div className='flex flexBetween'>
                    <div className='flex test2Item'>3</div>
                    <div className='flex test2Item'>4</div>
                </div>
            </p>
        </div>
        <div>
            <h3>三角形</h3>
            <p>
                <div className='test3ItemAll'></div>
                <div className='test3Item triangleUp'></div>
                <div className='test3Item triangleDown'></div>
                <div className='test3Item triangleLeft'></div>
                <div className='test3Item triangleRight'></div>
            </p>
        </div>
    </div>
}