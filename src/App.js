import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News pageSize={15} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News key="business" pageSize={15} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={15} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News key="general" pageSize={15} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News key="health" pageSize={15} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News key="science" pageSize={15} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News key="sports" pageSize={15} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News key="technology" pageSize={15} country="in" category="technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
