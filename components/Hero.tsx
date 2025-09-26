import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Photo & Basic Info */}
          <div className="space-y-8">
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-3 rounded-full shadow-2xl">
                  <Image
                    src="/asset/pas foto ghany2.jpg"
                    alt="Ghany Widito Baskoro - Professional Photo"
                    width={320}
                    height={320}
                    className="rounded-full object-cover w-72 h-72 lg:w-80 lg:h-80"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <Mail size={18} className="text-primary-600" />
                  <span className="text-sm">ghany.baskoro@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                  <Phone size={18} className="text-primary-600" />
                  <span className="text-sm">081318732870</span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <MapPin size={18} className="text-primary-600" />
                <span className="text-sm">Tangerang Selatan, 06 June 1997</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://linkedin.com/in/ghany-widito-baskoro-462221191" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://instagram.com/ghany.baskoro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Instagram size={18} />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Ghany</span>
              </h1>
              <h2 className="text-xl lg:text-2xl xl:text-3xl text-gray-700 font-medium">
                Industrial Engineering & Technology Management
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced Product Owner and ERP Finance Specialist with a strong background in 
              Industrial Engineering and Technology Management. Passionate about driving digital 
              transformation and optimizing business processes through data-driven solutions.
            </p>

            {/* Professional Summary Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  While working as Management Development Program, I took Masters degree in Technology Management (M.M.) 
                  and graduated in February 2022. Able to perform business operational simulations and do feasibility 
                  studies and financial feasibility.
                </p>
                <p>
                  Plunged into the IT industry as a Product Owner, understanding the SDLC concept, and managing 
                  front-end services apps and ERP Financial Module applications. Accustomed to brainstorming and 
                  discussion in solving problems using data analysis tools.
                </p>
                <p className="italic border-l-2 border-primary-200 pl-4">
                  "My biggest fear is facing a learning decline, doing repetitive work for long periods of time 
                  that can reduce insight of mindset and point of view."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
