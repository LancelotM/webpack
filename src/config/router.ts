import React from 'react';
import HooksDemo from 'pages/hooks';
import ReactDemo from 'pages/react';
import HomeDemo from 'pages/home';
import TestDemo from 'pages/test';
import TypescriptPage from 'pages/typescript';

const routes = [
    {link:'home',path:'/',component:HomeDemo,exact:true},
    {link:'hooks',path:'/hooks',component:HooksDemo,exact:true},
    {link:'react',path:'/react',component:ReactDemo,exact:true},
    {link:'test',path:'/test',component:TestDemo,exact:true},
    {link:'typescript',path:'/typescript',component:TypescriptPage,exact:true},
]

export {routes};