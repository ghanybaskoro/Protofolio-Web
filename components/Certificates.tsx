import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react'

interface Certificate {
  title: string
  issuer: string
  date: string
  status: string
  description: string
  certificateUrl?: string
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: 'National Training & Workshop on Monsoon SIM Enterprise Resource Planning',
      issuer: 'MonsoonSIM',
      date: '12/2018 - Present',
      status: 'Valid',
      description: 'Comprehensive training in enterprise resource planning simulation and business process optimization',
      certificateUrl: 'https://drive.google.com/file/d/1UU6ZQW-Uz5Cw3mo_qcmN7XEWHHR7CtvI/view'
    },
    {
      title: 'Pelatihan & Sertifikasi Kompetensi Supply Chain Management',
      issuer: 'Lembaga Pelatihan Kompetensi Teknik Dan Manajemen Industri - BNSP',
      date: '02/2022 - 02/2024',
      status: 'Valid',
      description: 'Professional certification in supply chain management competencies'
    },
    {
      title: 'SAP Implementation Methodology for Enterprise Resource Planning',
      issuer: 'Persatuan Insinyur Indonesia Learning Center',
      date: '03/2022 - Present',
      status: 'Valid',
      description: 'Advanced methodology for implementing SAP ERP solutions in enterprise environments'
    },
    {
      title: 'Kursus ERP with Odoo Series #1 Peta Jalan, Bisnis Proses dan Implementasi ERP',
      issuer: 'Persatuan Insinyur Indonesia Learning Center',
      date: '10/2021 - Present',
      status: 'Valid',
      description: 'Comprehensive ERP implementation course covering business processes and roadmapping'
    },
    {
      title: 'Awareness Training for Quality Management System Based On ISO 9001:2015',
      issuer: 'Bina Profesi Institute',
      date: '10/2018 - Present',
      status: 'Valid',
      description: 'Quality management system awareness and implementation training'
    },
    {
      title: 'Supply Chain Analytics in Python',
      issuer: 'DataCamp.com',
      date: '09/2019 - Present',
      status: 'Valid',
      description: 'Data analytics and programming skills for supply chain optimization'
    },
    {
      title: 'Business Process Analytics in R',
      issuer: 'DataCamp.com',
      date: '10/2019 - Present',
      status: 'Valid',
      description: 'Statistical analysis and business process optimization using R programming'
    },
    {
      title: 'SQL Fundamentals course',
      issuer: 'SoloLearn (E-Learning)',
      date: '10/2019 - Present',
      status: 'Valid',
      description: 'Fundamental database management and SQL programming skills'
    }
  ]

  const getStatusColor = (status: string) => {
    return status === 'Valid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }

  const getStatusIcon = (status: string) => {
    return status === 'Valid' ? CheckCircle : Award
  }

  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const StatusIcon = getStatusIcon(cert.status)
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <Award className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cert.status)}`}>
                    <StatusIcon size={12} />
                    {cert.status}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  <div className="text-sm text-primary-600 font-semibold">
                    {cert.issuer}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  {cert.certificateUrl ? (
                    <a 
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200">
                      <ExternalLink size={14} />
                      View Details
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-primary-100">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-primary-100">Valid Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-primary-100">Years of Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-primary-100">Different Fields</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
