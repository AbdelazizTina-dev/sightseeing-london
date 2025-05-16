import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-orange-600 flex-row w-full h-16 py-auto px-96">
            <Image
                src="/london-bis.svg"
                alt="Logo"
                width={100}
                height={50}
                className="hover:opacity-85 transition-opacity duration-100 hover:cursor-pointer"
            />
        </nav>
    );
};

export default Navbar;