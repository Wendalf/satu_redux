import React, { Component } from 'react';
import CounterButton from './CounterButton';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.counter}</h1>
        <CounterButton symbol="+" onClick={this.props.increment}/>
        <CounterButton symbol="-" onClick={this.props.decrement}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {counter: state.counter}
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: ()=>(dispatch(incrementCounter())),
    decrement: ()=>(dispatch(decrementCounter()))
  }
}

// ACTION CREATOR
const incrementCounter = () => {
  // ACTION
  return {type: "INCREMENT"}
}

// ACTION CREATOR
const decrementCounter = () => {
  // ACTION
  return {type: "DECREMENT"}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
