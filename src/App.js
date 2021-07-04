import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'

const App = () => {
  return (<div>
          <HashRouter>
            <Layout/>
          </HashRouter>
          </div>
  )
}

export default App;
