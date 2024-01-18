import Link from "next/link"
import { useState } from "react"

const loginModal: React.FC = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="loginModal" >

        </div>
    )
}

export default loginModal