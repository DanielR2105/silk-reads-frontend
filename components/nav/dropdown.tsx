import { useState } from "react";
import Link from "next/link";

type SubmenuProps = {
    title: string;
    links?: { text: string; href: string; isTitle?: boolean }[];
  }
  

type DropdownProps = {
    title?: string;
    submenus?: SubmenuProps[];
    links?: { text: string; href: string; isTitle?: boolean }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="nestedDropdown">
            <button className="nestedDropdown__title" onClick={handleToggleOpen}>
                {title} ▸
            </button>
            {isOpen && (
                <div className="nestedDropdown__links"> 
                    {links && links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <button className="nestedDropdown__links__title">
                                {link.text} 
                            </button>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
