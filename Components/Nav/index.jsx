import { useRouter } from 'next/router';
import requests from '../../Utils/requests';
import { Container } from './styles';

function Nav() {
  const router = useRouter();

  return (
    <Container>
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} >{title}</h2>
      ))}
      <div className='fade' />
    </Container>
  );
}

export default Nav;
