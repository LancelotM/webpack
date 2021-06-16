import React from 'react';


export default function Buttons(){
    return (
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
    )
}

// export default class Buttons extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={()=>{
//                     history.push({
//                         pathname: '/hooks',
//                         state: {
//                             identityId: 1
//                         }
//                     })
//                     console.error('go to hooks router');
//                 }}>go to hooks</button>
//                 <button onClick={()=>{
//                     history.push({
//                         pathname: '/react',
//                         state: {
//                             identityId: 1
//                         }
//                     })
//                     console.error('go to react router');
//                 }}>go to react</button>
//             </div>
//         )
//     }
// }
    