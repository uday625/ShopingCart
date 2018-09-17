import React, { Component } from 'react';
import Counter from './Counter/Counter'
import Navbar from './Navbar/Navbar';
import './App.css';

class App extends Component {
  
  state = {
    counters : [
      {id:1, value:4},
      {id:2, value:2},
      {id:3, value:0},
      {id:4, value:3}
    ]
  }

  deleteHandler = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !==counterId)
    this.setState({counters:counters});
  }

  incrementHandler = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value ++;
    this.setState({counters:counters});
  }

  resetHandler = () =>{
    const counters = this.state.counters.map(counter =>{
      counter.value =0
      return counter;
    })
    this.setState({counters:counters});
  }

  render() {
    return (
      <div className="App">
          <Navbar/>
          <h3 className="header text-info m-2 p-2">Welcome to Shopping Cart React App</h3>          
          {this.state.counters.map(counter => 
          <Counter 
            key ={counter.id} 
            onDelete = {this.deleteHandler} 
            onIncrement = {this.incrementHandler} 
            counter = {counter}
            />)}
          <button 
            className="btn btn-info btn-sm m-2"
            onClick ={this.resetHandler}>
            Reset
          </button>
      </div>
    );
  }
}

export default App;
