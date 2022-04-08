import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
function App() {

  return (
    <Router>
    <div className='d-flex flex-column min-vh-100'>
      <Header></Header>
        <main className='container'>
          <Routes>
            <Route exact path='/' element={<About/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/Contact' element={<ContactForm/>} />
            <Route exact path='/resume' element={<Resume/>} />
          </Routes>
        </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;