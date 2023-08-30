import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <section>
      {/* BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 z-0 w-screen h-screen">
        <Image
          src="/images/TTheroimage.webp"
          alt="mountains"
          fill
          className="object-cover"
        />
        Landing
      </div>
      {/* BACKGROUND IMAGE END */}
    </section>
  );
};

export default Landing;
