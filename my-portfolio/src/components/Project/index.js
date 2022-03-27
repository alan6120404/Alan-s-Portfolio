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
    <div>
      <div className="flex-row">

      </div>
    </div>
  );
};

export default Project;