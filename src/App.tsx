import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Notice, Main, Games } from './views/index'
// 왜 빌드 안돼 씨발
// 왜 빌드 안돼 씨발
// 왜 빌드 안돼 씨발
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
