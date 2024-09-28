"use client"
import PricingCards from '@/components/categories/PricingCards';
import ScrollButtons from '@/components/categories/ScrollButtons';
import React, { useState } from 'react';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <ScrollButtons onSearch={setSearchQuery} />
      <PricingCards searchQuery={searchQuery} />
    </div>
  );
};

export default Categories;
