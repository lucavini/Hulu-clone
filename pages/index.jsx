// components
import Head from 'next/head';
import Header from '../Components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  );
}
