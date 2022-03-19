import Image from 'next/image';

function Header() {
  return (
    <header className=''>
      <div>
      </div>

      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        alt='hulu-logo'
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
