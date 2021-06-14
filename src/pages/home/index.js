import React, { useEffect, useState, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { virtualApi,testAxiosGet } from 'common/api';
import Buttons from './buttons';
import Images from './images';
// const ButtonsComponent = React.lazy(() => import('./buttons'));


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
            <h1>Home</h1>
            {/* <Suspense fallback={<div>loading...</div>}>
                <ButtonsComponent/>
            </Suspense> */}
            {
                loadData ? <div>loading...</div> : (
                    <Buttons/>
                )
            }
            <Images/>
        </div>
        
    )
}