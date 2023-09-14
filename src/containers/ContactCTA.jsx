import React from 'react';
import Image from 'next/image';

const ContactCTA = () => {
  return (
    <section className="relative h-screen">
      {/* BACKGROUND IMAGE */}
      <div className="fixed top-0 left-0 z-0 w-screen h-screen">
        <Image
          src="/images/yellowstone.webp"
          alt="mountains"
          fill
          className="sticky object-cover transition-all"
        />
      </div>
      {/* BACKGROUND IMAGE END */}
    </section>
  );
};

export default ContactCTA;
