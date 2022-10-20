import { Button } from 'react-bootstrap'
import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'

export class App extends Component {
  state={
    show:false
  }
toggleShow=()=>{
  this.setState({show:!this.state.show})
}

  render() {
    return (
      <div className='App'>
   <Button variant="secondary" onClick={this.toggleShow} >
    {
      this.state.show ? "Hide":"Show"
    }
    </Button>
{
  this.state.show ? <Counter />:null
}
      </div>
    )
  }
}

export default App