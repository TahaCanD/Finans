import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
    </div>
  )
}

export default HomePage