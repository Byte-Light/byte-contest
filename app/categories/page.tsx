"use client"
import PricingCards from '@/components/categories/PricingCards';
import ScrollButtons from '@/components/categories/ScrollButtons';
import React, { useState } from 'react';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div>
      <ScrollButtons onSearch={setSearchQuery} onSelectCategory={setSelectedCategory} />
      <PricingCards searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Categories;
