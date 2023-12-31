import React from 'react';
import Tilt from 'react-tilt/dist/tilt.js';
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { services } from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';
import { SectionWrapper } from '../hoc';

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className={`xs:w-[250px] w-full`}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`}>
        <div
          options={{
            max: 45,
            speed: 450,
            scale: 1
          }}
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}>
          <img src={icon} alt={title} className={`w-16 h-16 object-contain`} />
          <h3 className={`text-center text-white font-bold text-[20px]`}>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <p className={`${styles.sectionHeadText}`}>Overview.</p>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}>
        I'm Skilled Yeah Bitch
      </motion.p>

      <div className={`mt-20 flex flex-wrap gap-10`}>
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
