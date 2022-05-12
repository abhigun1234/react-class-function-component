import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
     console.log("data",props)
    }
    callMe(data){
        console.log("data",data)
    }
  render() {
    return (
      <div>{this.props.name}
      <button onClick={()=>this.callMe("data")}>click</button>
      </div>
    )
  }
}
