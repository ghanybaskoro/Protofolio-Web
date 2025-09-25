import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Master of Management - Technology Management (M.M.)',
      institution: 'Multimedia Nusantara University',
      period: '08/2020 - 02/2022',
      gpa: 'GPA 3.0',
      location: 'Indonesia',
      highlights: [
        'Digitalization Project ICT - Business Technology',
        'TOEIC 675',
        'Financial Projection'
      ]
    },
    {
      degree: 'Bachelor of Engineering - Industrial Engineering',
      institution: 'Institut Teknologi Indonesia',
      period: '09/2015 - 08/2019',
      gpa: 'GPA 3.0',
      location: 'Indonesia',
      highlights: [
        'Business Plan Supply Chain Management',
        'Statistics Tools Business Simulation'
      ]
    }
  ]

  const achievements = [
    {
      title: 'Finalist of Statistics Essay Competition',
      organization: 'The 13th Statistika Ria Institut Pertanian Bogor',
      date: '11/2018',
      description: 'College students from universities across Southeast Asia region are welcomed to join this competition.'
    },
    {
      title: 'Participant Fresh Graduate Academy Digital Talent Scholarship Machine Learning',
      organization: 'Kementerian Komunikasi dan Informatika Republik Indonesia',
      date: '08/2019',
      description: 'Digital Talent Scholarship 2019'
    },
    {
      title: 'Top 5 Ranking Business Plan Technopreneurship Competition',
      organization: 'Pusat Penelitian Ilmu Pengetahuan dan Teknologi (PUSPIPTEK)',
      date: '12/2016',
      description: 'Recognized for innovative business planning and entrepreneurial thinking'
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
