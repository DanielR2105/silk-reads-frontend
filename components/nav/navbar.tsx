import Link from 'next/link';
import DiscoverDropdown from './discover';

const Navbar: React.FC = () => {
  return (
    <nav>
        <div className='navbar' >
            <Link href="/" >
            <div className='navbar__logoContainer'>
        <img src='/images/spideronlylogo.png' className='navbar__logo'></img>
        </div>
        </Link>
        <div className='navbar__button'>
          <Link href="/">
            <button className='navbar__button__text' >Home</button>
          </Link>
          </div>
          <div className='navbar__button'>
          <Link href="/about">
            <button className='navbar__button__text' >About</button>
          </Link>
          </div>
          <div className='navbar__button'>
          <DiscoverDropdown />
          </div>
          <div className='navbar__button'>
          <button className='navbar__button__text'>Hub ▾</button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;