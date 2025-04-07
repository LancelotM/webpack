import React, { useEffect, useState, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { virtualApi,testAxiosGet } from 'common/api';
import Buttons from './buttons';
import Images from './images';
import {withLoading} from 'common/hoc';
import './index.scss';
// const ButtonsComponent = React.lazy(() => import('./buttons'));

const Loading = () => <div>loading...</div>;
const withLoadingFunc = withLoading(Loading)(Buttons)

export default function HomeDemo(){
    let history = useHistory();
    let [loadData,setLoadData] = useState(true);
    useEffect(()=>{
        Promise.all([virtualApi(),testAxiosGet()]).then((res)=>{
            console.log('HomeDemo-Promise',res)
            setLoadData(false);
        })
    },[])
    return (
        <div>
            <h1 className='h1FontColor'>Home</h1>
            {/* <Suspense fallback={<div>loading...</div>}>
                <ButtonsComponent/>
            </Suspense> */}
            {withLoadingFunc({loadData})}
            <Images/>
        </div>
        
    )
}