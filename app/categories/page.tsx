import PricingCards from '@/components/categories/PricingCards';
import ScrollButtons from '@/components/categories/ScrollButtons';
import React from 'react';

const Categories = () => {
    return (
        <div>
            <ScrollButtons />
            <PricingCards />
        </div>
    );
};

export default Categories;