import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const Landing = () => {
  return (
    <section id="content" className="flex items-center w-full min-h-[80vh]">
      <div className="relative z-10">
        <h1 className="mb-16 -translate-x-2 font-barlow text-9xl">
          Capturing Nature&apos;s Masterpieces
        </h1>
        <Button variant="glass" path="gallery" className="text-2xl">
          View gallery
        </Button>
      </div>
      {/* BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 z-0 w-screen h-screen">
        <Image
          src="/images/TTheroimage.webp"
          alt="mountains"
          fill
          className="object-cover"
        />
      </div>
      {/* BACKGROUND IMAGE END */}
    </section>
  );
};

export default Landing;
