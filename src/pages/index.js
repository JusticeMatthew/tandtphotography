import { useState } from 'react';
import Head from 'next/head';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Landing, Categories, About } from '@/containers';

export default function Home() {
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollPosition(latest);
  });

  return (
    <div>
      <Head>
        <title>T & T Photography</title>
      </Head>
      <Landing scrollPosition={scrollPosition} />
      <Categories />
      <About />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
