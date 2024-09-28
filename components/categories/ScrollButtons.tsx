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

interface ScrollButtonsProps {
  onSearch: (query: string) => void;
  onSelectCategory: (category: string | null) => void; // Modify this prop to handle category
}

const ScrollButtons: React.FC<ScrollButtonsProps> = ({ onSearch, onSelectCategory }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSelectAllCategories = () => {
    setSelected(null); // Reset category selection
    onSelectCategory(null); // Show all categories
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-center">What do you need designed?</h2>

      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Logo, website, book..."
          className="px-4 py-2 border rounded-l-md"
        />
        <button
          className="flex justify-center items-center w-12 h-12 bg-gray-200 hover:bg-cyan-600 text-gray-700 hover:text-white rounded-r-md transition-all"
        >
          <FiSearch />
        </button>
      </div>

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
          <button
            onClick={handleSelectAllCategories}
            className={`px-12 py-6 whitespace-nowrap rounded-lg border transition-colors ${
              selected === null
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Categories
          </button>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelected(option.value);
                onSelectCategory(option.value); // Pass category to parent
              }}
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
