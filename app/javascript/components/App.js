import React from "react"
import PropTypes from "prop-types"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Greeting from './Greeting'

import configureStore from "../configureStore"

import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' render={() => ('Home!')} />
          <Route path='/hello' render={() => <Greeting message='Friends' /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
