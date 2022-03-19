// libraries
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

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
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLETIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
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
