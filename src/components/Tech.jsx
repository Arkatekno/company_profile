import React from 'react';

import { technologies } from '../constants/index.js';
import { BallCanvas } from './canvas/index.js';
import { SectionWrapper } from '../hoc/index.js';

const Tech = () => {
  const technologiesByCategory = technologies.reduce((acc, technology) => {
    const { category } = technology;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(technology);
    return acc;
  }, {});

  const categories = Object.keys(technologiesByCategory);
  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <div className={`flex flex-row flex-wrap justify-center gap-10`}>
            {technologiesByCategory[category].map((technology) => (
              <div className={`w-28 h-28`} key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
