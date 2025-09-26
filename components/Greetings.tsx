'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, User, Briefcase, BookOpen, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Greetings() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="greetings" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/background present ghany.jpg"
          alt="Background Presentation Ghany"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay untuk readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Profile Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
              <User size={40} className="text-white" />
            </div>
          </div>

          {/* Main Greeting */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ghany
            </span>
          </h1>

          {/* Full Name */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-white/90">
            Ghany Widito Baskoro
          </h2>

          {/* Tagline Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Briefcase className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Product Owner</h3>
              <p className="text-white/80 text-sm">Leading product development and strategic planning</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">ERP Finance Specialist</h3>
              <p className="text-white/80 text-sm">Expert in financial systems and enterprise solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Lifelong Learner</h3>
              <p className="text-white/80 text-sm">Continuously growing and adapting to new challenges</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to my digital portfolio where I showcase my journey in technology, 
              business development, and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#home" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore My Work
              </a>
              <a 
                href="#contact" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-50 to-transparent z-10"></div>
    </section>
  )
}
