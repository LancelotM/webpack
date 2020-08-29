import React from 'react';
import Child from './child';

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentWillMount() {
        console.error('Parent-componentWillMount');
    }

    componentDidMount() {
        console.error('Parent-componentDidMount');
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }
  
    componentWillUnmount() {
        console.error('Parent-componentWillUnmount');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }
  
    render() {
        return (
            <div>
                <div className='parent'>
                    <h1>Hello, React Parent!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
                <Child />
                <button onClick={()=>{
                    console.error('go to home router');
                }}>go to home</button>
                <button onClick={()=>{
                    console.error('go to hooks router');
                }}>go to hooks</button>
            </div>
        );
    }
}