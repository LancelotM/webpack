import _ from 'lodash';
import './index.css';
import { printMe } from 'compoents/print';
import { testPrintMe } from './test';
import './index.ts'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('red');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    testPrintMe()
    return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
      console.log(json)
    })
    .catch(error => console.error('Something went wrong when fetching this data: ', error))