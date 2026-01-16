import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";


import LandinPage from './components/LandingPage';
import Services from "./components/Services";

import ContactSection from "./components/ContactSection";
import FlipFileTest from './components/FlipFileTest';
import EthosSection from './components/EthosSection';
import SocialSection from './components/SocialSection';
import NewsletterSection from './components/NewsLetterSection';



import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LandinPage />} />
      <Route path="/about" element={<Services />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/expertise" element={<FlipFileTest />} />
      <Route path="/goals" element={<EthosSection />} />
      <Route path="/social" element={<SocialSection />} />
      <Route path="/newsletter" element={<NewsletterSection />} />


    </Routes>
  );
}

export default App
