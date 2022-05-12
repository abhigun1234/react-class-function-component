import React, { Component } from 'react'

export default class ChildOne extends Component {

    constructor(props){

        super()
        console.log("props",props)

    }
  clickMe(name){
     console.log("name",name)
  }
  render() {
    return (
      <div>{this.props.name}

      {this.props.address}
      <button onClick={()=>this.clickMe("raj")}>ok</button>
      </div>
    )
  }
}
