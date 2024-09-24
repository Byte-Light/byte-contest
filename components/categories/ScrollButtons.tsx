"use client"
import { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'Logo & identity', value: 'logo' },
  { label: 'Web & app design', value: 'web' },
  { label: 'Business & advertising', value: 'business' },
  { label: 'Clothing & merchandise', value: 'clothing' },
  { label: 'Art & illustration', value: 'art' },
  { label: 'Packaging & label', value: 'packaging' },
  { label: 'Book & magazine', value: 'book' },
];

const ScrollButtons: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  // Reference for the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // State to track mouse dragging
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // 2 = scroll speed factor
      container.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-center">What do you need designed?</h2>

      {/* Scrollable container with horizontal scroll and hidden scrollbar */}
      <div className="flex justify-center items-center">
        <div
          className="flex items-center gap-4 overflow-x-auto py-4 px-2 no-scrollbar"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Search Button */}
          <button
            className={`flex items-center justify-center px-12 py-6 whitespace-nowrap rounded-lg border bg-gray-200 text-gray-700 hover:bg-gray-300 transition ${
              selected === 'search' ? 'bg-cyan-600 text-white' : ''
            }`}
            onClick={() => setSelected('search')}
          >
            <FiSearch size={24} />
          </button>

          {/* Options Buttons */}
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelected(option.value)}
              className={`px-12 py-6 whitespace-nowrap rounded-lg border transition-colors ${
                selected === option.value
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollButtons;
