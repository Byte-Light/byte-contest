import HowWorks from '@/components/howWorks/HowWorks';
import StepsWithButton from '@/components/howWorks/StepsWithButton';
import SupportSection from '@/components/howWorks/SupportSection';
import WhyUs from '@/components/howWorks/WhyUs';
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