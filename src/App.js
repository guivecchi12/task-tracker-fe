import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store'
import Project from './components/Project'

function App(){
  return (
    <Provider store = {store}>
      <div className="App">
        <div>
          <Project/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
