import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Connect = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: "General Discussions" },
    { id: 2, name: "Introduce Yourself" },
    { id: 3, name: "Feedback & Critiquing" }
  ];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const buttonAnimation = useSpring({
    scale: selectedCategory ? 1.1 : 1,
  });

  return (
    <div className="connect">
      {categories.map(category => (
        <animated.button
          key={category.id}
          className={`category ${selectedCategory === category.id ? 'selected' : ''}`}
          onClick={() => handleCategorySelect(category.id)}
          style={buttonAnimation}
        >
          {category.name}
        </animated.button>
      ))}
    </div>
  );
};

export default Connect;
