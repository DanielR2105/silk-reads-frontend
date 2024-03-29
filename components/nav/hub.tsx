import Link from "next/link";
import { useState } from "react";

const HubDropdown: React.FC = () => {

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
                  Your Hub ▾
                </button>
            </div>
            {isOpen && (
                <div className="navbar__button__dropdown">
                    <Link href={"/hub/discussions"} >
                    <button className="nestedDropdown__links__title">
                        Discussions
                    </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default HubDropdown