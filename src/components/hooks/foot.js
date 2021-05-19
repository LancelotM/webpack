import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {ThemeContext} from './context/theme';

export default function AppFoot(props){
    let history = useHistory();
    const theme = useContext(ThemeContext);
    return (
        <div>
            <p>App Foot</p>
            <button 
                style={{
                    background:theme.background,
                    color:theme.foreground
                }} 
                onClick={()=>{
                    history.push({
                        pathname: '/',
                        state: {
                            identityId: 1
                        }
                })
                console.error('go to home router');
            }}>go to home</button>
            <button 
                style={{
                    background:theme.background,
                    color:theme.foreground
                }} 
                onClick={()=>{
                    history.push({
                        pathname: '/react',
                        state: {
                            identityId: 1
                        }
                    })
                console.error('go to react router');
            }}>go to react</button>
        </div>
    )
}