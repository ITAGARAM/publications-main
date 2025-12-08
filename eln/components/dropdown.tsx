'use client'
import React, { useState, useEffect } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { client } from '../lib/sanity'; // Adjust path if needed

// Define the Category interface within this file
interface Category {
  _id: string;
  title: string;
}

interface DropdownMenuProps {
  onCategorySelect: (category: string) => void; // Callback to pass the selected category to the parent
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onCategorySelect }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All Categories');
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const query = `*[_type == "category"]{ _id, title }`;
      try {
        const fetchedCategories = await client.fetch<Category[]>(query);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }

    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (optionText: string) => {
    setSelectedOption(optionText);
    setIsActive(false);
    onCategorySelect(optionText); // Notify parent about the selected category
  };

  return (
    <div className={`select-menu ${isActive ? 'active' : ''}`}>
      <div className="select-btn" onClick={toggleMenu}>
        <span className="sBtn-text">{selectedOption}</span>
        <RiArrowDropDownFill className={`dropdown-icon ${isActive ? 'rotate' : ''}`} />
      </div>
      {isActive && (
        <ul className="options">
          {categories.map((category) => (
            <li
              key={category._id}
              className="option"
              onClick={() => handleOptionClick(category.title)}
            >
              <span className="option-text">{category.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
