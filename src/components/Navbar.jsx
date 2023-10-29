import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles.js';
import { navLinks } from '../constants';
import { menu, close, arteksLogo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const menuList = (toggle) => {
    return navLinks.map((link) => (
      <li
        key={link.id}
        className={`${
          active === link.title ? 'text-white' : 'text-secondary'
        } hover:text-white text-[18px] font-medium cursor-pointer sm:font-poppins sm:text-[16px]`}
        onClick={() => {
          if (toggle) {
            setToggle(!toggle);
          }
          setActive(link.title);
        }}>
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ));
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto`}>
        <Link
          to={'/'}
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img src={arteksLogo} alt="logo" className={`w-9 h-9 object-contain`} />
          <p className={`text-white text-[18px] font-bold cursor-pointer flex`}>
            ARTEKS &nbsp; <span className={`sm:block hidden`}>| ARKA Tekno Solusindo</span>
          </p>
        </Link>
        <ul className={`list-none hidden sm:flex flex-row gap-10`}>{menuList(toggle)}</ul>
        <div className={`sm:hidden flex flex-1 justify-end items-center`}>
          <img
            src={toggle ? close : menu}
            alt={`menu`}
            className={`w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
            <ul className={`list-none flex justify-end items-start flex-col gap-4`}>
              {menuList(toggle)}
            </ul>
          </div>
        </div>
      </div>
      {/*<header className="bg-gray-800 md:sticky top-0 z-10">*/}
      {/*  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">*/}
      {/*    <a className="title-font font-medium text-white mb-4 md:mb-0">*/}
      {/*      <a href="#about" className="ml-3 text-xl">*/}
      {/*        ARTEKS*/}
      {/*      </a>*/}
      {/*    </a>*/}
      {/*    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">*/}
      {/*      <a href="#projects" className="mr-5 hover:text-white">*/}
      {/*        Past Work*/}
      {/*      </a>*/}
      {/*      <a href="#skills" className="mr-5 hover:text-white">*/}
      {/*        Skills*/}
      {/*      </a>*/}
      {/*      <a href="#testimonials" className="mr-5 hover:text-white">*/}
      {/*        Testimonials*/}
      {/*      </a>*/}
      {/*    </nav>*/}
      {/*    <a*/}
      {/*      href="#contact"*/}
      {/*      className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">*/}
      {/*      Hire Me*/}
      {/*      <ArrowRightIcon className="w-4 h-4 ml-1" />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</header>*/}
    </nav>
  );
};

export default Navbar;
