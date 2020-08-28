import {join} from 'lodash';

function greeter(person: string): string{
    return join(['Hello', person], ' ');
}
  
let user = "Jane User";
let element = document.createElement('div');
element.innerHTML = greeter(user);
document.body.appendChild(element);