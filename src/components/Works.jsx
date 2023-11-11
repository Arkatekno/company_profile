import React from 'react';
import { SectionWrapper } from '../hoc/index.js';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion.js';
import { styles } from '../styles.js';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          {`Our team has developing some of the apps below`}.
        </p>
        <p className={`${styles.sectionHeadText}`}>Portofolio</p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, '');
