'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#doctors', label: 'Our Doctors' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#testimonials', label: 'Reviews' },
        { href: '#booking', label: 'Book Now' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-emerald-900/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-300">
                            <span className="text-xl font-bold text-white">DS</span>
                        </div>
                        <span className="text-xl font-semibold text-white hidden sm:block">
                            Dental<span className="text-emerald-400">Studio</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-sm font-medium relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a
                            href="#booking"
                            onClick={(e) => scrollToSection(e, '#booking')}
                            className="px-6 py-3 btn-embossed text-white font-medium rounded-full"
                        >
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col items-center gap-6 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-slate-200 hover:text-emerald-400 transition-colors duration-300 text-lg font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        onClick={(e) => scrollToSection(e, '#booking')}
                        className="mt-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full shadow-lg"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
