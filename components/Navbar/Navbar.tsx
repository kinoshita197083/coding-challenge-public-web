import React from "react";
import Link from "next/link";
import { ZellerLogo } from "../Logo";

const Navbar = () => {

    return (
        <header>
            <nav
                aria-label="Main Navigation"
                className="fixed top-4 left-1/2 max-w-6xl transform -translate-x-1/2 w-[95vw] z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm grid grid-cols-3 px-8 py-2 sm:py-5 border border-gray-200 transition-all duration-100"
            >
                <div className="flex items-center flex-shrink-0 ml-4">
                    <Link href="/" data-testid="logo-link" aria-label="Zeller Home">
                        <ZellerLogo size="default" />
                    </Link>
                </div>
                {/* Navlinks can be added here in the future */}
                {/* <div className="flex justify-center gap-16">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
                </div> */}
                <div />
            </nav>
        </header>
    );
};

export default Navbar; 