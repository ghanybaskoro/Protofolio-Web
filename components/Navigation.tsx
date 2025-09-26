'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isInGreetings, setIsInGreetings] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Check if we're in greetings section (first 100vh)
      const greetingsSection = document.getElementById('greetings')
      if (greetingsSection) {
        const rect = greetingsSection.getBoundingClientRect()
        setIsInGreetings(rect.top <= 0 && rect.bottom > 0)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Greetings', href: '#greetings' },
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Activity', href: '#activity' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : isInGreetings ? 'bg-white/40 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className={`flex items-center gap-3 text-xl font-bold transition-colors duration-300 ${
            isInGreetings && !scrolled ? 'text-gray-900' : 'gradient-text'
          }`}>
            <Image
              src="/asset/Logo Kotig Karsa.svg"
              alt="Kotig Karsa Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span>Ghany Widito Baskoro</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isInGreetings && !scrolled 
                    ? 'text-gray-800 hover:text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-200 ${
              isInGreetings && !scrolled 
                ? 'text-gray-800 hover:text-primary-600' 
                : 'text-gray-700 hover:text-primary-600'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-800 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
