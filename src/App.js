// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Herocarousel from './components/Herocarousel'
import Overview from './components/Overview'
import Highlight from './components/Highlight'
import Vana from './components/Vana'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery';
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Modal from './components/Modal'
function App() {
  const [showModal, setShowModal] = useState(false); 
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="100" class="scroll-container">
      <Header/>
      <Herocarousel/>
      <Overview setShowModal={setShowModal}/>
      <Highlight/>
      {/* price plan */}
      <Vana/> 
      <Amenities/>
      <Gallery/>
      <Location/>
      <Contact/>
      <Footer/>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
