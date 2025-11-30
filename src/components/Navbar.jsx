import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">
              Livetocode
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('talent')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Our Talent
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Founder
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('talent')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Our Talent
            </button>
            <button
              onClick={() => scrollToSection('founder')}
              className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Founder
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium text-center"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

