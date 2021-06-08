import React from 'react';
import Layout from 'compoents/layout';
import HooksDemo from './pages/hooks';
import ReactDemo from './pages/react';
import HomeDemo from './pages/home';
import TestDemo from './pages/test';

const oldRoutes = {
    path: '/',
    component: Layout, // 这个组件是导航栏
    indexRoute: { component: Layout }, // 默认加载home组件，没有用户信息就只是一个搜索框而已
    childRoutes: [
        {
            path: 'hooksDemo',
            component: HooksDemo,
        },
        {
            path: 'reactDemo',
            component: ReactDemo,
        }
    ]
}

const routes = [
    {link:'home',path:'/',component:HomeDemo,exact:true},
    {link:'hooks',path:'/hooks',component:HooksDemo,exact:true},
    {link:'react',path:'/react',component:ReactDemo,exact:true},
    {link:'test',path:'/test',component:TestDemo,exact:true},
]

export {oldRoutes ,routes};