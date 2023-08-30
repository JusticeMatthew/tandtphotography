import Head from 'next/head';
import Landing from '@/containers/Landing';

export default function Home() {
  return (
    <div id="content">
      <Head>
        <title>T & T Photography</title>
      </Head>
      <Landing />
    </div>
  );
}
