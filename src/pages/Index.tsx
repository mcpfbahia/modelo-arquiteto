import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Portfolio />
            <Services />
            <About />
            <HowItWorks />
            <Testimonials />
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Index;
