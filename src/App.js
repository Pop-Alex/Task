import React, { Component, useState } from 'react'
import Container from './comps/Container';
import Header from './comps/Header'
import Sidebar from './comps/Sidebar';
function App() {
  
  
  return (
    <div>
    <Header ></Header>
    <Sidebar ></Sidebar>
    <Container ></Container>
    </div>
  );
}

export default App;