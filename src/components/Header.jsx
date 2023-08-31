import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks } from '@/constants/navLinks';

const Header = () => {
  const { route } = useRouter();
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredLink, setHoveredLink] = useState('');
  const [navHovering, setNavHovering] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <div
      id="header"
      className="sticky top-0 z-50 flex items-center justify-between h-16"
    >
      <Link href="/">
        <p
          className={`${
            scrollPosition === 0 ? 'opacity-100' : 'opacity-0'
          } text-5xl tracking-[-.25rem] font-barlow -translate-x-[2px]`}
        >
          TT
        </p>
      </Link>
      <motion.div
        layout
        className="relative flex items-center justify-center rounded-md shadow bg-glass/30 backdrop-blur"
        onHoverStart={() => setNavHovering(true)}
        onHoverEnd={() => setNavHovering(false)}
      >
        {navLinks.map((link) => (
          <Link
            href={link.route}
            key={link.name}
            className="z-20 px-6 py-2 group"
            onMouseEnter={() => setHoveredLink(link.name)}
          >
            <p className="font-medium text-center">{link.name}</p>
            {route === link.active && (
              <motion.span
                layout
                className="fixed w-[13px] h-[2px] rounded-full bg-dark -mt-[2px] ml-[.5px]"
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
