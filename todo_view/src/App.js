import React from 'react';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './actions/reducer';

import MainPage from './components/MainPage'

import '../node_modules/carbon-components/css/carbon-components.css';
import './App.css';

let todoStore = createStore(reducer);

function App() {
  return (
    <Provider store={todoStore}>
        <MainPage/>
    </Provider>    
  );
}

export default App;