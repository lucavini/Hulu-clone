import React from 'react';
import { Container } from './styles';

function HeaderItem({ title, Icon }) {
  const [over, setOver] = React.useState(false);
  return (
    <Container
      over={over}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <Icon className='MenuIcon' />
      <p>{title}</p>
    </Container>
  );
}

export default HeaderItem;
