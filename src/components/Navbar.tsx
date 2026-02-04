import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
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
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Sobre', href: '#sobre' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                        <span className="text-secondary font-bold text-xl">AP</span>
                    </div>
                    <span className={`font-bold text-xl tracking-tighter ${isScrolled ? 'text-primary' : 'text-primary' // Always primary for visibility on white bg areas
                        }`}>
                        ARQUITETO <span className="text-secondary">PRO</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" size="sm" onClick={() => window.open('https://wa.me/5571999999999', '_blank')}>
                        Orçamento Grátis
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 py-6 px-6 flex flex-col gap-6 shadow-xl animate-reveal">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium uppercase tracking-widest text-primary hover:text-secondary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="w-full" onClick={() => window.open('https://wa.me/5571999999999', '_blank')}>
                        Orçamento Grátis
                    </Button>
                </div>
            )}
        </nav>
    );
};
