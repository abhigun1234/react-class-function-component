import React, { Component } from "react"
// import Icon from '../angular.png'
class Home extends Component {
   name='abhishek'
    render() {

        return <div class="spinner-border" role="status">
        <span class="visually-hidden">{this.hello("kiran")}</span>
        
      </div>
    }
 hello(name) {
        
        return name
    }
}
export default Home