import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>First react project</h1>
        <button onClick={this.props.onIncrement}>
          botão de mais
        </button>
        <button onClick={this.props.onDecrement}>
          botão de menos
        </button> 
      </div>
    );
  }
}

export default App;
