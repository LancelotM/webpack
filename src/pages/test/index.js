import React,{useRef} from 'react';
import {fullScreen} from 'common/utils'
import './index.scss';


export default function Test(props){
    const fullScreenRef = useRef();
    const test5Arr = [1,2,3,4,5]
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
                {
                    test5Arr.map((val)=>{
                        return <div>{val}</div>
                    })
                }
            </p>
        </div>
        <div>
            <h3>左侧固定，右侧自适应</h3>
            <p className='test6Body'>
                <div className='left'></div>
                <div className='center'></div>
            </p>
        </div>
        <div>
            <h3>右侧固定，右侧自适应</h3>
            <p className='test6Body'>
                <div className='center'></div>
                <div className='right'></div>
            </p>
        </div>
        <div>
            <h3>两侧固定，中间自适应</h3>
            <p className='test6Body'>
                <div className='left'></div>
                <div className='center'></div>
                <div className='right'></div>
            </p>
        </div>
    </div>
}