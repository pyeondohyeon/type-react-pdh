import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Notice, Main, Games } from './views/index'

class App extends Component {
  render() {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Notice" element={<Notice/>} />
            <Route path="/Games" element={<Games/>} />
        </Routes>
    );
  }
}

export default App;
