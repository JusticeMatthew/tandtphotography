import React from 'react';
import Image from 'next/image';

const LargeCategoryLink = ({ src, title, alt }) => {
  return (
    <div className="relative flex justify-end w-screen cursor-pointer h-1/4 group overflow-y-clip">
      <div className="z-10 flex items-center w-1/2 h-full shadow bg-glass/30 backdrop-blur-md">
        <p className="text-6xl max-w-[43.75rem] font-barlow ml-24">{title}</p>
        <Image
          src="/images/arrow-up-right.svg"
          alt="arrow icon"
          width={32}
          height={32}
          className="mt-2 ml-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
    </div>
  );
};

export default LargeCategoryLink;
