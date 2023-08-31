import React from 'react';
import LargeCategoryLink from '@/components/LargeCategoryLink';
import { largeCategories } from '@/constants/largeCategories';

const Categories = () => {
  return (
    <section className="relative mt-[15vh]">
      {largeCategories.map((category) => (
        <LargeCategoryLink
          key={category}
          title={category.title}
          src={category.src}
          alt={category.alt}
        />
      ))}
    </section>
  );
};

export default Categories;
