import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomeDemo(){
    let history = useHistory();
    return (
        <div>
            <h1>Home</h1>
            <div>
                <button onClick={()=>{
                    history.push({
                        pathname: '/hooks',
                        state: {
                            identityId: 1
                        }
                    })
                    console.error('go to hooks router');
                }}>go to hooks</button>
                <button onClick={()=>{
                    history.push({
                        pathname: '/react',
                        state: {
                            identityId: 1
                        }
                    })
                    console.error('go to react router');
                }}>go to react</button>
            </div>
        </div>
        
    )
}