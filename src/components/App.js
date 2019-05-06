import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Introduce from './Introduce'
import Product from './Product'
import Howitworks from './Howitworks'
import Review from './Review'
import Contact from './Contact'
import { BrowserRouter as Router} from 'react-router-dom'
// import {Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Introduce />
      <Product />
      <Howitworks />
      <Review />
      <Contact />
      <Footer />
      
    </Router>
     
  );
}

export default App;
