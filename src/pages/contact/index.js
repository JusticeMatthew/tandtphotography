import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>T & T Photography | Contact</title>
      </Head>
      <section id="content" className="relative z-20">
        <h1>Contact Form</h1>
      </section>
      {/* BACKGROUND GLASS */}
      <div className="absolute top-0 left-0 z-10 w-1/2 h-screen shadow bg-glass/30 backdrop-blur-md" />
      {/* BACKGROUND GLASS END */}
      {/* BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 z-0 w-screen h-screen">
        <Image
          src="/images/contact-page-bg.webp"
          alt="mountains"
          fill
          className="object-cover"
        />
      </div>
      {/* BACKGROUND IMAGE END */}
    </div>
  );
};

export default Contact;
