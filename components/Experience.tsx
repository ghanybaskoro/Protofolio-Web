import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Finance Business System Specialist',
      company: 'Modinity Group',
      location: 'Jakarta Selatan',
      period: '03/2025 - 08/2025',
      description: 'As a Finance Business System Associate, the role focuses on bridging financial operations with technology by leading and supporting ERP Finance initiatives.',
      responsibilities: [
        'Lead ERP Finance software development as Scrum Master',
        'Collect and analyze data requirements for ERP Finance projects',
        'Coordinate cross-functional teams in agile development process',
        'Served as Scrum Master in the ERP Finance Software Development Project.'
      ]
    },
    {
      title: 'Product Owner ERP Finance',
      company: 'PT Asuransi Jiwa IFG - Asian Technology Solution',
      location: 'Jakarta Selatan',
      period: '07/2023 - 02/2025',
      description: 'Experienced in creating a new Chart of Accounts (CoA) and assisting accounting users in mapping recorded transactions into a journal New CoA for IFGLs General Ledger on ERP EBS Oracle. Ive also led the construction and upgrading of the ERP Finance GL Module to meet customer requests for customization. Lead & monitor implementation AR/AP, Cash Management, Fixed Asset, iProc & Purchasing Moduls.',
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
      description: 'Drive end-to-end product development by aligning business strategy with execution, managing roadmap and backlog, and collaborating with cross-functional teams. Experienced in translating requirements into actionable tasks, coordinating third-party integrations, supporting UAT, and proposing continuous product improvements to stakeholders.',
      responsibilities: [
        'Work closely with and not limited to Product Management, Product Engineering, and Business Development teams to create, maintain, and prioritize product roadmap and backlog according to business value.',
        'Own, manage, and evaluate daily product development, goals, and schedules, adjusting expectations and setting priorities.',
        'Responsible for translating strategies, roadmaps, user stories, and business requirements to actionable tasks for development by collaborating with Product Design, Software Engineering, and Innovation Engineering teams.',
        'Together with Innovation Engineer handle coordination with third parties (vendors or clients) for new system integration process.',
        'Assist Quality Assurance in User Acceptance Test.',
        'Schedule and lead internal and client meetings to surface issues, identify fixes, and advance projects.',
        'Conduct research, requirement gathering, and product evaluation on a regular basis and propose product improvement to stakeholders.'
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
