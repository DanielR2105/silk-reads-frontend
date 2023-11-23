import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
        <div className='navbar' >
            <Link href="/" className='navbar__logo' >
        <img src='/images/spideronlylogo.png' className='navbar__logo'></img>
        </Link>
          <Link href="/">
            <button className='navbar__button' >Home</button>
          </Link>
          <Link href="/about">
            <button className='navbar__button' >About</button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;