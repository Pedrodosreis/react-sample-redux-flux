import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';

const reducer = (state, action) => {
    if(action.type === "INCREMENT") {
        console.log("increment");
    }
    if(action.type === "DECREMENT") {
        console.log("decrement");
    }
};

const store = createStore(reducer);

ReactDOM.render(<App 
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>, document.getElementById('root'));
