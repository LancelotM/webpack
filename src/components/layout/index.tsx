import React from 'react';
import {routes} from 'config/router';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Layout(){
    return (
        <div className='layout'>
            {
                routes.map((router)=>{
                    return (
                        <Link key={router.link} to={router.path}>{router.link}</Link>
                    )
                })
            }
        </div>
    )
}