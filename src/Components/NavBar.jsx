import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import cn from'../lib/utils'

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10) 
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
  <nav className={cn(
    "fixed w-full z-40 transition-all duration-300 backdrop-blur-md",
    isScrolled ? 'bg-emerald-700/70 shadow-md' : 'bg-emerald-700/80'
  )}>
    <div className="container mx-auto px-4 py-5 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-primary flex items-center">
        <div className="flex items-center transition-transform duration-300 hover:scale-105 text-white">
          <img src="/logo.png" alt="Logo" className="w-15 h-15 object-contain" />
          <p className="pl-2 text-xl font-bold">TPL ISSATSO</p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {[
          ['/', 'ACCEUIL'],
          ['/formation', 'FORMATION'],
          ['/equipe', 'EQUIPE'],
          ['/evenements', 'EVENEMENTS'],
          ['/contact', 'CONTACT']
        ].map(([path, label]) => (
          <Link
            key={label}
            to={path}
            className="relative text-white font-medium transition-all duration-300 hover:text-white group"
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMobileMenuOpen ? (
          <X size={45} className="hover:bg-white/10 p-2 rounded-xl" />
        ) : (
          <Menu size={45} className="hover:bg-white/10 p-2 rounded-xl" />
        )}
      </button>
    </div>

    {/* Mobile Menu Dropdown */}
    {isMobileMenuOpen && (
      <div className="md:hidden  px-4 pb-6 pt-4 flex flex-col gap-3">
        {[
          ['/', 'ACCEUIL'],
          ['/formation', 'FORMATION'],
          ['/equipe', 'EQUIPE'],
          ['/evenements', 'EVENEMENTS'],
          ['/contact', 'CONTACT']
        ].map(([path, label]) => (
          <Link
            key={label}
            to={path}
            onClick={toggleMenu}
            className="px-4 py-3 rounded-md border border-white-400 text-white text-center font-medium bg-white/5 hover:text-emerald-200 hover:scale-[1.02] duration-200"
          >
            {label}
          </Link>
        ))}
      </div>
    )}
  </nav>
);

}
