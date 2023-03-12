import React from 'react';

import { Footer, Blog, Highlight, Header } from './containers';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar } from './components';
// import { CTA, Brand, Navbar } from './components';
import './App.css';
// import Highlight from './containers/whatGPT3/Highlight';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <Highlight />
    {/* <Features /> */}
    {/* <Possibility />
    <CTA /> */}
    <Blog />
    <Footer />
  </div>
);

export default App;
