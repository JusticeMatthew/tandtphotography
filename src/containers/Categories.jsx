import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LargeCategoryLink from '@/components/LargeCategoryLink';
import { largeCategories } from '@/constants/largeCategories';

const Categories = ({ setInView }) => {
  const { ref, inView } = useInView();
  useEffect(() => setInView(inView), [setInView, inView]);

  return (
    <section ref={ref} className="relative z-10 h-screen">
      {largeCategories.map(({ title, src, alt }) => (
        <LargeCategoryLink key={title} title={title} src={src} alt={alt} />
      ))}
    </section>
  );
};

export default Categories;
