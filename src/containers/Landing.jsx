import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const Landing = () => {
  return (
    <section id="content" className="flex items-center w-full min-h-screen">
      <div className="relative z-10 mb-[20%]">
        <h1 className="mb-16 -translate-x-[6px] font-barlow text-9xl">
          Capturing Nature&apos;s Masterpieces
        </h1>
        <Button variant="glass" path="gallery" className="text-2xl">
          View gallery
        </Button>
      </div>
      {/* BACKGROUND IMAGE */}
      <div className="fixed top-0 left-0 z-0 w-screen h-screen">
        <Image
          src="/images/landing-page-bg.webp"
          alt="mountains"
          fill
          className="fixed object-cover"
        />
      </div>
      {/* BACKGROUND IMAGE END */}
    </section>
  );
};

export default Landing;
