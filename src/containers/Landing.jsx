import React from 'react';
import Button from '@/components/Button';

const Landing = ({ bgRef }) => {
  return (
    <section
      ref={bgRef}
      id="content"
      className="flex items-center w-full min-h-screen"
    >
      <div className="relative z-10 mb-[35%]">
        <h1 className="mb-16 -translate-x-[6px] font-barlow text-9xl">
          Capturing Nature&apos;s Masterpieces
        </h1>
        <Button variant="glass" path="gallery" className="text-2xl">
          View gallery
        </Button>
      </div>
    </section>
  );
};

export default Landing;
