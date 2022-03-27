import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;