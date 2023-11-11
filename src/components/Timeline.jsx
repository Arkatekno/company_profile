import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { textVariant } from '../utils/motion.js';
import { styles } from '../styles.js';
import { SectionWrapper } from '../hoc/index.js';
import { timelineHistory } from '../constants';

const TimelineCard = ({ item }) => {
  const { icon, company_name, title, iconBg, points, date } = item;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center -center w-full h-full">
          <img src={icon} alt={company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }>
      <div>
        <h3 className={`text-white text-[24px] font-bold`}>{title}</h3>
        <p style={{ margin: 0 }} className={`text-secondary text-[16px] font-semibold`}>
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{`Timeline History of Arka`}.</p>
        <p className={`${styles.sectionHeadText}`}>Timeline</p>
      </motion.div>
      <div className={`mt-20 flex flex-col`}>
        <VerticalTimeline>
          {timelineHistory.map((item, index) => (
            <TimelineCard key={`item-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, 'timeline');
