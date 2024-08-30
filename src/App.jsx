import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Home from './home';
import Events from './events'; 
import Scoreboard from './scoreboard'; 
import Contact from './contact'
import Footer from './footer';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
};

export default App;

