// libraries
import { HomeIcon } from '@heroicons/react/outline';

// components
import Image from 'next/image';
import HeaderItem from '../HeaderItem/';

// styles
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>

      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        alt='hulu-logo'
        width={200}
        height={100}
      />
    </Container>
  );
}

export default Header;
