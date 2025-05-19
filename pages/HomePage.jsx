import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Referans from '../components/Referans';
import Action from '../components/Action';

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Skills />
        <Referans />
        <Action />
    </div>
  )
}

export default HomePage