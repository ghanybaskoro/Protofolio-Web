import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Master of Management - Technology Management (M.M.)',
      institution: 'Multimedia Nusantara University',
      period: '08/2020 - 02/2022',
      gpa: 'GPA 3.72',
      location: 'Indonesia',
      highlights: [
        'Digitalization Project ICT - Business Technology',
        'TOEIC 675',
        'Financial Projection'
      ],
      thesisLink: 'https://drive.google.com/file/d/1Or4WeRCcQuos0XtbLpMvHpzy0L32QbNi/view?usp=sharing'
    },
    {
      degree: 'Bachelor of Engineering - Industrial Engineering',
      institution: 'Institut Teknologi Indonesia',
      period: '09/2015 - 08/2019',
      gpa: 'GPA 3.20',
      location: 'Indonesia',
      highlights: [
        'Business Plan Supply Chain Management',
        'Statistics Tools Business Simulation'
      ],
      thesisLink: 'https://drive.google.com/file/d/1rVz8p-qgFxg0pzCO8H4-Guu8hm7mTOdO/view?usp=sharing'
    }
  ]

  const achievements = [
    {
      title: 'Finalist of Statistics Essay Competition',
      organization: 'The 13th Statistika Ria Institut Pertanian Bogor',
      date: '11/2018',
      description: 'College students from universities across Southeast Asia region are welcomed to join this competition.',
      link: 'https://www.instagram.com/p/BrfmLQTlssm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      certificateUrl: 'https://drive.google.com/file/d/1V94xcl9Rkn6zX8nFYfiALumCMEehDoM3/view?usp=sharing'
    },
    {
      title: 'Participant Fresh Graduate Academy Digital Talent Scholarship Machine Learning',
      organization: 'Kementerian Komunikasi dan Informatika Republik Indonesia',
      date: '08/2019',
      description: 'Digital Talent Scholarship 2019',
      link: 'https://www.instagram.com/p/B1bolofh0x8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      certificateUrl: 'https://drive.google.com/file/d/1LpUDzg7rfoYHQITk_rpFPBDp7bCyAQqF/view?usp=sharing'
    },
    {
      title: 'Top 5 Ranking Business Plan Technopreneurship Competition',
      organization: 'Pusat Penelitian Ilmu Pengetahuan dan Teknologi (PUSPIPTEK)',
      date: '12/2016',
      description: 'Recognized for innovative business planning and entrepreneurial thinking',
      link: 'https://www.instagram.com/p/BPrU0nBFaZi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    }
  ]

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Strong academic foundation in Industrial Engineering and Technology Management with notable achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary-600" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin size={16} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {edu.gpa}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Focus Areas:</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-600 text-sm">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                    {edu.thesisLink && (
                      <div className="mt-4">
                        <a 
                          href={edu.thesisLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                          </svg>
                          View Thesis/Final Project
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Award className="text-primary-600" size={28} />
              Notable Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 card-hover">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                    <div className="text-primary-600 font-semibold mb-2">{achievement.organization}</div>
                    <div className="text-sm text-gray-600 mb-3">{achievement.date}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {achievement.link && (
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          View Evidence
                        </a>
                      )}
                      {achievement.certificateUrl && (
                        <a 
                          href={achievement.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg font-medium text-sm transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                          </svg>
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
