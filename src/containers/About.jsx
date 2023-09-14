import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = ({ categoriesInView, setInView }) => {
  const { ref, inView } = useInView({ rootMargin: '0px 0px -100%' });
  useEffect(() => setInView(inView), [setInView, inView]);
  return (
    <section ref={ref} className="relative z-20 flex items-center h-screen">
      <div className="z-20 w-full bg-glass/30 h-96 backdrop-blur-lg"></div>
      {/* BACKGROUND IMAGE */}
      <div
        className={`${
          categoriesInView ? 'hidden' : 'absolute'
        } top-0 left-0 z-0 w-screen h-screen`}
      >
        <Image
          src="/images/icy-rocks.webp"
          alt="mountains"
          fill
          className="sticky object-cover transition-all"
        />
      </div>
      {/* BACKGROUND IMAGE END */}
    </section>
  );
};

export default About;
