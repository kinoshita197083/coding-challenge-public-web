import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { ZellerLogo } from "../Logo";

export interface NavbarProps { }

const NAVBAR_HEIGHT = 72; // px, adjust as needed

const Navbar: FC<NavbarProps> = () => {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 10);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <nav
            // className={
            //     scrolled
            //         ? "fixed top-4 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl z-50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-between px-8 py-5 border border-gray-200 transition-all duration-100"
            //         : "fixed top-4 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl z-50 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-between px-8 py-5 transition-all duration-100"
            // }
            className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl z-50 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm flex items-center justify-between px-8 py-5 border border-gray-200 transition-all duration-100"
            style={{ height: NAVBAR_HEIGHT }}
        >
            <div className="flex items-center flex-shrink-0 ml-4">
                <Link href="/" legacyBehavior>
                    <ZellerLogo />
                </Link>
            </div>
            {/* Navlinks can be added here in the future */}
            {/* <div className="flex items-center gap-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
            </div> */}
        </nav>
    );
};

export default Navbar; 