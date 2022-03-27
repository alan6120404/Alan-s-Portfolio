import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <Project category={currentCategory.name} />
    </section>
  );
}

export default Portfolio;