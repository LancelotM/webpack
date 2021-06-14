import axios from 'axios';

export function virtualApi(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.warn('virtualApi处理好了')
            resolve('virtualApi处理好了');
        },3000)
    })
}

export function testAxiosGet(){
    return axios.get('https://www.sohu.com/xtopic/TURBd01ESXlNekk0?_trans_=000014_bdss_dkygcbz')
}