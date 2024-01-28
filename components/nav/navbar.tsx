import Link from 'next/link';
import DiscoverDropdown from './discover';
import HubDropdown from './hub';
import Searchbar from './searchbar';
import ProfileDropdown from './profileDropdown';
import { useState } from 'react';

const Navbar: React.FC = () => {

  const [loggedIn, setLoggedIn] = useState(false);

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
            <HubDropdown />
          </div>
          <div  className='navbar__searchbar'>
            <Searchbar />
          </div>
          <div className='navbar__spacer' >
          </div>
          {loggedIn ? (
            <div className='navbar__loggedIn' >
            <div className='navbar__button'>
             <button className='navbar__iconButton'>
               <img src='/images/bell.png' className='navbar__button__icon'/>
             </button>
             </div>
             <div className='navbar__button'>
             <button className='navbar__iconButton' >
               <img src='/images/email.png' className='navbar__button__icon'/>
             </button>
             </div>
             <div className='navbar__button'>
             <button className='navbar__iconButton'>
               <img src='/images/work-group.png' className='navbar__button__icon'/>
             </button>
             </div>
           <div className='navbar__button'>
             <ProfileDropdown />
            </div>
            </div>
          ) : (
              <div className='navbar__button'>
                <button className='navbar__button__text' >Get Started</button>
              </div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;