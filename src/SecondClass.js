import React, { Component } from 'react'

export class SecondClass extends Component {
  render() {
    return (
      <div>SecondClass{this.props.name}
       <button onClick={()=>this.props.getData("hi")}>Click</button>
      </div>
    )
  }
}

export default SecondClass