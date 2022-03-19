// components
import Head from 'next/head';
import Header from '../Components/Header';
import Nav from '../Components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Nav />

    </div>
  );
}
