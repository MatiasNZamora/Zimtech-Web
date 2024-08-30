import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FictureSection from './components/FictureSection';
import WorkSection from './components/WorkSection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar /> 
    <div className="max-w-7xl mx-auto pt-20 px-6"> 
      <HeroSection />
      <FictureSection /> 
      <WorkSection />   
    </div>
  </StrictMode>,
)
