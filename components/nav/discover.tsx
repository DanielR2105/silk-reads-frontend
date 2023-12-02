import Dropdown from './dropdown';
import { useState } from 'react';

const DiscoverDropdown: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleOpen = () => {
      setIsOpen(true);
    };
    const handleToggleClose = () => {
        setIsOpen(false)
    }

  return (
    <div
    onMouseEnter={handleToggleOpen}
    onMouseLeave={handleToggleClose}
    >
        <div className='navbar__button'>
            <button className='navbar__button__text'>
                Discover ▾
            </button>
        </div>
        {isOpen && (
            <div className='navbar__button__dropdown'>
                  <div >
                  <Dropdown
                    title="Books"
                    links={[
                      { text: 'Recommendations', href: '/discover/books/recommendations' },
                      { text: 'New Releases', href: '/discover/books/new-releases' },
                      { text: 'Genres', href: '/discover/books/genres' },
                      { text: 'Collections', href: '/discover/books/collections' },
                      { text: 'Most Popular', href: '/discover/books/most-popular' },
                      { text: 'Awards', href: '/discover/books/awards' },
                    ]}
                  />
                </div>
                <div >
                  <Dropdown
                    title="Book Clubs"
                    links={[
                      { text: 'Recommendations', href: '/discover/book-clubs/recommendations' },
                      { text: 'Starting Soon', href: '/discover/book-clubs/starting-soon' },
                      { text: 'Genres', href: '/discover/book-clubs/genres' },
                      { text: 'Authors', href: '/discover/book-clubs/authors' },
                      { text: 'Near You', href: '/discover/book-clubs/near-you' },
                    ]}
                  />
                </div>
                </div>
        )}
    </div>
  );
};

export default DiscoverDropdown;