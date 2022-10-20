import React, { Component } from 'react'
import { Button, FormControl } from 'react-bootstrap'

export class Counter extends Component {
    constructor(props){
super(props)
console.log('constructor')
this.state={
    count:0,
    username:""
}

    }
increment=()=>{
    this.setState({count:this.state.count+1})
}
decrement=()=>{
 this.state.count>0 &&   this.setState({count:this.state.count-1})
}

componentDidMount(){
   this.interval=setInterval(()=>{
    this.setState({count:this.state.count+1})
   },1000)
}
componentDidUpdate(){
    console.log('component did update')
}
componentWillUnmount(){
    clearInterval(this.interval)
}

  render() {
    console.log('render')
    return (
      <div>
        <Button variant="success" onClick={this.increment} >+</Button>
        <span>{this.state.count}</span>
        <Button variant='danger' onClick={this.decrement} >-</Button>
        <br/>
        <FormControl type='text' onChange={(e)=>this.setState({username:e.target.value})} />
        <br/>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

export default Counter