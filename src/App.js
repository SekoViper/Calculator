import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route element={<Calculator />} path="/calculator" />
        <Route element={<Home />} exact path="/" />
        <Route element={<Quotes />} exact path="/quotes" />
      </Routes>
    </div>
  );
}

export default App;
