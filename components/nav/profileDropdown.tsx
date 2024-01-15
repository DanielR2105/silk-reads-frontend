import Link from "next/link";
import { useState } from "react";

const profileDropdown: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleOpen = () => {
        setIsOpen(true)
    }
    const handleToggleClose = () => {
        setIsOpen(false)
    }

    return (
        <div
        onMouseEnter={handleToggleOpen}
        onMouseLeave={handleToggleClose}
        >
            <div className="navbar__button">
                <button className="navbar__button__text" >
                <img src='/images/user.png' className='navbar__button__icon'/>
                </button>
            </div>
            {isOpen && (
                <div className="navbar__button__dropdown">
                    <Link href={"/profile"} >
                    <button className="nestedDropdown__links__title">
                        Profile
                    </button>
                    </Link>
                    <Link href={"/friends"} >
                    <button className="nestedDropdown__links__title">
                        Friends
                    </button>
                    </Link>
                    <Link href={"/groups"} >
                    <button className="nestedDropdown__links__title">
                        Book Clubs
                    </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default profileDropdown;