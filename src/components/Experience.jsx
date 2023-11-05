import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { textVariant } from '../utils/motion.js';
import { styles } from '../styles.js';
import { SectionWrapper } from '../hoc/index.js';
import { experiences } from '../constants/index.js';

const ExperienceCard = ({ experience }) => {
  return <VerticalTimelineElement></VerticalTimelineElement>;
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{`What I've done so far`}.</p>
        <p className={`${styles.sectionHeadText}`}>Experiences</p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
