import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'

const App = () => {
  return (<div>
          <BrowserRouter>
            <Layout/>
          </BrowserRouter>
          </div>
  )
}

export default App;
