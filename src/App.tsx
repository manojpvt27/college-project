import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Campus from './pages/Campus';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="academics" element={<Academics />} />
          <Route path="campus" element={<Campus />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;