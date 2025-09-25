import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-full">
                <Image
                  src="/asset/pas foto ghany.jpeg"
                  alt="Ghany Widito Baskoro - Professional Photo"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Hi, I'm{' '}
                <span className="gradient-text">Ghany</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 font-medium">
                Industrial Engineering & Technology Management
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Experienced Product Owner and ERP Finance Specialist with a strong background in 
              Industrial Engineering and Technology Management. Passionate about driving digital 
              transformation and optimizing business processes through data-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={20} />
                <span>ghany.baskoro@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={20} />
                <span>081318732870</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Tangerang Selatan, 06 June 1997</span>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/ghany-widito-baskoro-462221191" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://instagram.com/ghany.baskoro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
              <div className="space-y-4 text-sm leading-relaxed">
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
                <p className="italic">
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
