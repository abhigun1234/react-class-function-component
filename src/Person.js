// import React from 'react';

// function Person(props) {
//     const {name,city,country}=props
//     return (
//         <div>
//            {name}
//            {city}
//            {country} 
//         </div>
//     );
// }

// export default Person;

import React, { Component } from 'react';

class Person extends Component {
    constructor(props){
        super(props)
        this.state={message:'hello'}
        // this.callBuddy=this.callBuddy.bind(this)
    }
    callBuddy(str,arrr){

        // alert('hello')
        this.setState({message:str})
        console.log("this",this)
        // if(username==='abc' && pass==='abc'){

        // }
        // else{

        // }
    }
    render() {
        return (
            <div>
               {this.props.name} 
               {/* <button onClick={this.callBuddy}>callBuddy</button> */}
                { <button onClick={()=>this.callBuddy('bye','gggg')}>click</button>  }
               {this.state.message}
            </div>
        );
    }
 
}

export default Person;