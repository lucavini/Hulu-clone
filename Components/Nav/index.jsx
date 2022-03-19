import requests from '../../Utils/requests';
import { Container } from './styles';

function Nav() {
  return (
    <Container>
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2 key={key}>{title}</h2>
      ))}
    </Container>
  );
}

export default Nav;