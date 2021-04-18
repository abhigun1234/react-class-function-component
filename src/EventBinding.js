import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'ravi'
        }
        this.changeText=this.changeText.bind(this)
    }
    changeText(){
        console.log("this.this",this)
        this.setState({name:'kamal'})
      
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.changeText}>click</button> */}
                {this.state.name}
            {/* <button onClick={()=>this.changeText()}>click</button>  */}
             <button onClick={this.changeText}>click</button> 
           
            </div>
        );
    }
}

export default EventBinding;