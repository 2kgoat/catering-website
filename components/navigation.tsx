'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Q's Catering Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Q's Catering
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-red-900' : 'text-white hover:text-amber-200'
              }`}
            >
              Services
            </a>
            <a
              href="#contact"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-red-900' : 'text-white hover:text-amber-200'
              }`}
            >
              Contact
            </a>
            <Button
              asChild
              className={`rounded-full px-6 transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-red-900 hover:bg-red-800 text-white'
                  : 'bg-white text-red-900 hover:bg-amber-50'
              }`}
            >
              <a href="#inquiry">Get a Quote</a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-red-900 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-700 hover:text-red-900 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              asChild
              className="w-full bg-red-900 hover:bg-red-800 text-white rounded-full"
            >
              <a href="#inquiry" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
