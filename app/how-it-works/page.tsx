import HowWorks from '@/components/HowWorks/HowWorks';
import StepsWithButton from '@/components/HowWorks/StepsWithButton';
import SupportSection from '@/components/HowWorks/SupportSection';
import WhyUs from '@/components/HowWorks/WhyUs';
import React from 'react';

const HowItWorks = () => {
    return (
        <div>
           <HowWorks />
           <StepsWithButton />
           <WhyUs />
           <SupportSection />
        </div>
    );
};

export default HowItWorks;