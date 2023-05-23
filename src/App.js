import React from 'react'
import './App.css';
import Navbar from './components/naavbar/Navbar';
import Home from './components/pages/Home';
import 
{ BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';
import Footer from './components/footer/Footer';
import FetchData from './components/fetch/FetchData';
const App = () => {
  return (
    <div>
       <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/general' element={<FetchData cat="general" />} />
          <Route path='/business' element={<FetchData cat="business" />} />
          <Route path='/entertainment' element={<FetchData cat="entertainment" />} />
          <Route path='/health' element={<FetchData cat="health" />} />
          <Route path='/science' element={<FetchData cat="science" />} />
          <Route path='/sports' element={<FetchData cat="sports" />} />
          <Route path='/technology' element={<FetchData cat="technology" />} />
        </Routes>
        <Footer/>
       </Router>
    </div>
  )
}

export default App

