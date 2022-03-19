import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { Container } from './styles';

function Thumbnail({ result }) {
  const [over, setOver] = React.useState(false);
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <Container
      over={over}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <Image
        layout='responsive'
        alt='Thumbnail'
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={2000}
        height={1080}
      />

      <div className='description'>
        <p>{result.overview}</p>
        <h2>{result.title || result.original_name}</h2>
        <p className='info'>
          {result.media_type && `${result.media_type} •`}{' '}
          {result.release_date || result.first_air_date} •{' '}
          <ThumbUpIcon className='likes' /> {result.vote_count}
        </p>
      </div>

    </Container>
  );
}

export default Thumbnail;
