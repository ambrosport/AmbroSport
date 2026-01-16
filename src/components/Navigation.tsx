import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="absolute inset-0 z-50 bg-transparent nav-styles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="text-3xl font-bold text-blue-600">
            <img src="/src/components/logos/ambroLogo.png" alt="Ambro Logo" className="header-logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 bg-white/10 hover:bg-white/20 hamburger"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 mobile-nav-style">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  isActive(item.path)
                    ? 'text-blue-600 font-semibold bg-blue-50/30'
                    : 'text-gray-700 hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
