import React, { useState } from 'react';

const Project = ({ category }) => {

  const [photos] = useState([
    {
      title: '',
      image: '',
      link: '',
      github:''
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <ul>
    {categories.map((category) => (
      <li
      className={`mx-1 ${
        currentCategory.name === category.name && !contactSelected && `navActive`
        }`}
      key={category.name}
    >
        <span onClick={() => {
          setCurrentCategory(category);
          setContactSelected(false);
          }}
          >
          {capitalizeFirstLetter(category.name)}
        </span>
      </li>
    ))}
  </ul>
  );
};

export default Project;