import React from 'react';
import LargeCategoryLink from '@/components/LargeCategoryLink';
import { largeCategories } from '@/constants/largeCategories';

const Categories = () => {
  return (
    <section className="relative h-screen">
      {largeCategories.map(({ title, src, alt }) => (
        <LargeCategoryLink key={title} title={title} src={src} alt={alt} />
      ))}
    </section>
  );
};

export default Categories;
