import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Landing, Categories, About, ContactCTA } from '@/containers';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [categoriesInView, setCategoriesInView] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const { scrollY } = useScroll();
  const { ref, inView } = useInView();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <ReactLenis root options={{ smoothWheel: true, smoothTouch: false }}>
      <Head>
        <title>T & T Photography</title>
      </Head>
      <Landing scrollPosition={scrollPosition} bgRef={ref} />
      <Categories setInView={setCategoriesInView} />
      <About categoriesInView={categoriesInView} setInView={setAboutInView} />
      <ContactCTA />
      {/* BACKGROUND IMAGES */}
      {inView ? (
        <div className="fixed top-0 left-0 z-0 w-screen h-screen">
          <Image
            src="/images/landing-page-bg.webp"
            alt="mountains"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="fixed top-0 left-0 z-0 w-screen h-screen">
          <Image
            src={`/images/${aboutInView ? 'yellowstone' : 'icy-rocks'}.webp`}
            alt="salt rocks"
            fill
            className="object-cover"
          />
        </div>
      )}
      {/* BACKGROUND IMAGES END*/}
    </ReactLenis>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
