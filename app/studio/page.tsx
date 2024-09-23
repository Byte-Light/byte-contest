import BrandingSection from '@/components/studio/BrandingSection';
import BrandPackageSection from '@/components/studio/BrandPackageSection';
import StudioCard from '@/components/studio/StudioCard';
import TeamProfiles from '@/components/studio/TeamProfiles';
import React from 'react';

const Studio = () => {
    return (
        <div>
            <StudioCard />
            <BrandingSection />
            <BrandPackageSection />
            <TeamProfiles />
        </div>
    );
};

export default Studio;