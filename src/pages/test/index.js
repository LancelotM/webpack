import React,{useRef} from 'react';
import {fullScreen} from 'common/utils'
import './index.css';


export default function Test(props){
    const fullScreenRef = useRef();
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
        <div>
            <h3>点击全屏幕</h3>
            <p ref={fullScreenRef} className='test4Body' onClick={()=>{fullScreen(fullScreenRef)}}>点我</p>
        </div>
        <div>
            <h3>一行3个元素，超过换行</h3>
            <p className='test5Body'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                {/* <div>6</div> */}
                {/* <div>7</div> */}
            </p>
        </div>
    </div>
}