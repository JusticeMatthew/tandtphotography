import Head from 'next/head';
import { Landing, Categories } from '@/containers';

export default function Home() {
  return (
    <div>
      <Head>
        <title>T & T Photography</title>
      </Head>
      <Landing />
      <Categories />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
