import React from 'react';
import Child from './child';

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
    }

    componentWillMount() {
        console.warn('Parent-componentWillMount');
    }

    componentDidMount() {
        console.warn('Parent-componentDidMount');
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    componentWillReceiveProps(nextProps){
        console.warn('Parent-componentWillReceiveProps',nextProps);
    }

    componentWillUpdate(nextProps, nextState){
        console.warn('Parent-componentWillUpdate',nextProps, nextState);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.warn('Parent-shouldComponentUpdate',nextProps, nextState);
        return true;
    }

    componentDidUpdate(prevProps,prevState,maybeSnapshot){
        console.warn('Parent-componentDidUpdate',prevProps,prevState,maybeSnapshot);
    }
  
    componentWillUnmount() {
        console.warn('Parent-componentWillUnmount');
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
                <div className='parent' onClick={this.tick}>
                    <h1>Hello, React Parent!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
                <Child />
                <button onClick={()=>{
                    console.warn('go to home router');
                }}>go to home</button>
                <button onClick={()=>{
                    console.warn('go to hooks router');
                }}>go to hooks</button>
            </div>
        );
    }
}