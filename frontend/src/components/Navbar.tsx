'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/sfw.png';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="bg-[#0057B8] h-20 rounded-bl-md rounded-br-md flex flex-row items-center justify-between p-4 relative">
            <Link href="/" passHref>
                <Image 
                    src={logo}
                    width={75} 
                    height={75} 
                    alt="logo"
                />
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white md:hidden">
                <MenuIcon />
            </button>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex md:items-center md:justify-between flex-col md:flex-row top-full md:top-auto w-full md:w-auto bg-[#0057B8] md:bg-transparent left-0 px-4 py-2 md:p-0 absolute md:relative`}>
                <Link href="/" passHref><button onClick={closeMenu} className="text-white p-2 block text-center md:text-left">About Us</button></Link>
                <Link href="/get-involved" passHref><button onClick={closeMenu} className="text-white p-2 block text-center md:text-left">Get Involved</button></Link>
                <Link href="/donate" passHref><button onClick={closeMenu} className="text-white p-2 block text-center md:text-left">Donate</button></Link>
                <Link href="/newsletter" passHref><button onClick={closeMenu} className="text-white p-2 block text-center md:text-left">Newsletter</button></Link>
            </div>
        </div>
    );
}