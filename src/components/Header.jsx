import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useScroll } from 'framer-motion';
import { navLinks } from '@/constants/navLinks';

const Header = () => {
  const { pathname } = useRouter();
  const { scrollY } = useScroll();
  const [hoveredLink, setHoveredLink] = useState('');
  const [navHovering, setNavHovering] = useState(false);

  return (
    <div
      id="header"
      className="sticky z-10 flex items-center justify-between h-16"
    >
      <Link href="/">
        <p
          className={`${
            scrollY === 0 ? 'opacity-0' : 'opacity-100'
          } text-5xl tracking-[-.25rem] font-barlow`}
        >
          TT
        </p>
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
            <p className="font-medium text-center">{link.name}</p>
            {pathname === link.active && (
              <motion.span
                layout
                className={`fixed w-8 h-[2px] rounded-full bg-dark ${
                  pathname === '/' ? 'translate-x-1/3' : ''
                } ${pathname === '/gallery' ? 'translate-x-1/2' : ''} ${
                  pathname === '/contact' ? 'translate-x-2/3' : ''
                }`}
              />
            )}
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
