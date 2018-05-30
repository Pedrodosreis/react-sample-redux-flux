import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: 'algo diferente' };
  }

  render() {
    return (
      <div>
        <h1>First react project</h1>
        <input value={this.state.userInput} />
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
