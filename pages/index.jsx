// components
import Head from 'next/head';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Results from '../Components/Results';
import requests from '../Utils/requests';

export default function Home(props) {
  
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const response = await request.json();

  return {
    props: {
      results: response,
    },
  };
}
