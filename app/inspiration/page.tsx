import DesignCard from '@/components/inspiration/DesignCard';
import SearchInspiration from '@/components/inspiration/SearchInspiration';
import React from 'react';

const Inspiration = () => {
    return (
        <div>
            <SearchInspiration />
            <DesignCard />
        </div>
    );
};

export default Inspiration;