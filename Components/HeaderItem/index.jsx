import { Container } from './styles';

function HeaderItem({ title, Icon }) {
  return (
    <Container>
      <Icon className='MenuIcon' />
      <p>{title}</p>
    </Container>
  );
}

export default HeaderItem;
