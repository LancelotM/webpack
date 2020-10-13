import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boolean:false,
        };
        this.input = React.createRef();
        this.fileInput = React.createRef();
        this.handleSubmitText = this.handleSubmitText.bind(this);
        this.handleSubmitFile = this.handleSubmitFile.bind(this);
    }

    componentWillMount() {
        console.error('Child-componentWillMount');
    }

    componentDidMount() {
        console.error('Child-componentDidMount');
        
    }

    componentWillReceiveProps(nextProps){
        console.error('Child-componentWillReceiveProps',nextProps);
    }

    componentWillUpdate(nextProps, nextState){
        console.error('Child-componentWillUpdate',nextProps, nextState);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.error('Child-shouldComponentUpdate',nextProps, nextState);
        const {boolean} = this.state;
        //阻止因为父组建带动子组建渲染
        if(nextState.boolean == boolean){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps,prevState,maybeSnapshot){
        console.error('Child-componentDidUpdate',prevProps,prevState,maybeSnapshot);
    }
  
    componentWillUnmount() {
        console.error('Child-componentWillUnmount');
    }

    handleClick(e) {
        // e.preventDefault();
        console.log('The link was clicked.');
        this.setState((state)=>({
            boolean: !state.boolean
        }))
    }

    handleSubmitText(e) {
        console.log('A name was submitted: ' + this.input.current.value);
        e.preventDefault();
    }

    handleSubmitFile(e) {
        console.log('A name was submitted: ' + this.fileInput.current.files[0].name);
        e.preventDefault();
    }
  
    render() {
        console.error('Child-render',this.props);
        return (
            <div>
                <div className='child' onClick={()=>{this.handleClick()}}>
                    <h3>hello Child</h3>
                    <h4>{this.state.boolean?'true':'false'}</h4>
                </div>
                <form onSubmit={this.handleSubmitText}>
                    <label>Name:
                        <input type="text" ref={this.input} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form onSubmit={this.handleSubmitFile}>
                    <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}