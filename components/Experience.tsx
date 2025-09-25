import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Finance Business System Specialist',
      company: 'Modinity Group',
      location: 'Jakarta Selatan',
      period: '03/2025 - Present',
      description: 'Served as Scrum Master in the ERP Finance Software Development Project. Collect, Analyze, and Create Data Requirements for ERP Finance related.',
      responsibilities: [
        'Lead ERP Finance software development as Scrum Master',
        'Collect and analyze data requirements for ERP Finance projects',
        'Coordinate cross-functional teams in agile development process'
      ]
    },
    {
      title: 'Product Owner ERP Finance',
      company: 'PT Asuransi Jiwa IFG - Asian Technology Solution',
      location: 'Jakarta Selatan',
      period: '07/2023 - 02/2025',
      description: 'Responsible for and lead the ERP EBS Oracle Finance software development project (GL, AP/AR, CM, FA, Budget, iProc&Purch)',
      responsibilities: [
        'Lead ERP EBS Oracle Finance software development project',
        'Manage GL, AP/AR, CM, FA, Budget, iProc & Purch modules',
        'Resolve issues and remove project blockers',
        'Organize and schedule daily and weekly project progress meetings',
        'Collect, analyze, and create data requirements for ERP Finance projects'
      ]
    },
    {
      title: 'Product Owner',
      company: 'PT Esensi Solusi Buana',
      location: 'Indonesia',
      period: '09/2022 - 03/2023',
      description: 'Create, maintain, and prioritize product roadmap based on business value. Own, manage, and evaluate daily product development, goals, and schedules.',
      responsibilities: [
        'Create, maintain, and prioritize product roadmap based on business value',
        'Own, manage, and evaluate daily product development goals and schedules',
        'Adjust expectations and set priorities for development teams',
        'Translate strategies, roadmaps, user stories, and business requirements to actionable tasks',
        'Coordinate between stakeholders and development teams'
      ]
    },
    {
      title: 'Management Development Program',
      company: 'PT. Pan Brothers Tbk & Group',
      location: 'Indonesia',
      period: '01/2020 - 08/2022',
      description: 'Comprehensive management development program focusing on operational excellence and business process optimization.',
      responsibilities: [
        'Participated in structured management development curriculum',
        'Gained exposure to various business functions and operations',
        'Developed leadership and strategic thinking capabilities',
        'Completed practical projects in supply chain and operations management'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A progressive career path showcasing expertise in Product Management, ERP Implementation, and Business Process Optimization
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                    <Building size={18} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={18} />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    {exp.period}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
