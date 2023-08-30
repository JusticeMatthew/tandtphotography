import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '@/constants/navLinks';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState('');
  const [navHovering, setNavHovering] = useState(false);

  return (
    <div
      id="header"
      className="sticky z-10 flex items-center justify-between h-16"
    >
      <Link href="/">
        <p className="text-4xl font-barlow">T&T</p>
      </Link>
      <motion.div
        layout
        className="relative flex items-center justify-center rounded-md shadow bg-glass/30 backdrop-blur-lg"
        onHoverStart={() => setNavHovering(true)}
        onHoverEnd={() => setNavHovering(false)}
      >
        {navLinks.map((link) => (
          <Link
            href={link.path}
            key={link.name}
            className={`z-20 px-6 py-2 group`}
            onMouseEnter={() => setHoveredLink(link.name)}
          >
            <p className="text-center">{link.name}</p>
          </Link>
        ))}
        <motion.div
          layout
          className={`absolute flex ${
            hoveredLink === 'Home' ? 'justify-start' : ''
          } ${hoveredLink === 'Gallery' ? 'justify-center right-2' : ''} ${
            hoveredLink === 'Contact' ? 'justify-end' : ''
          } w-full h-full`}
        >
          <motion.div
            layout
            className={`${hoveredLink === 'Home' ? 'w-[102px]' : ''} ${
              hoveredLink === 'Gallery' ? 'w-[106px]' : ''
            } ${
              hoveredLink === 'Contact' ? 'w-[114px]' : ''
            } h-full rounded-md bg-glass/30 ${
              navHovering ? 'opacity-100' : 'opacity-0'
            } transition-opacity`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
