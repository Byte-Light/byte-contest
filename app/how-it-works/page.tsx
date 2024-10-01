

import React from 'react';
import HowWorks from '../../components/howWorks/HowWorks';
import StepsWithButton from '../../components/howWorks/StepsWithButton';
import WhyUs from '../../components/howWorks/WhyUs';
import SupportSection from '../../components/howWorks/SupportSection';

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