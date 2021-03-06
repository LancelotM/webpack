import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boolean:false,
            num:0
        };
        this.input = React.createRef();
        this.fileInput = React.createRef();
        this.handleSubmitText = this.handleSubmitText.bind(this);
        this.handleSubmitFile = this.handleSubmitFile.bind(this);
    }

    componentWillMount() {
        console.warn('Child-componentWillMount');
    }

    componentDidMount() {
        console.warn('Child-componentDidMount');
        // for (let i = 0; i < 10; i++) {
        //   // this.setState({
        //   //   num:this.state.num+1
        //   // })
        //   // console.warn(this.state.num);
          // this.setState((prevState,prevProps)=>{
        //     console.warn('prevState',prevState);
        //     console.warn('prevProps',prevProps);
        //     return {
        //       num:prevState.num+1
        //     }
        //   })
        // }
    }

    componentWillReceiveProps(nextProps){
        console.warn('Child-componentWillReceiveProps',nextProps);
    }

    componentWillUpdate(nextProps, nextState){
        console.warn('Child-componentWillUpdate',nextProps, nextState);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.warn('Child-shouldComponentUpdate',nextProps, nextState);
        const {boolean} = this.state;
        //阻止因为父组建带动子组建渲染
        if(nextState.boolean == boolean){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps,prevState,maybeSnapshot){
        console.warn('Child-componentDidUpdate',prevProps,prevState,maybeSnapshot);
    }
  
    componentWillUnmount() {
        console.warn('Child-componentWillUnmount');
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
        console.warn('Child-render',this.props);
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