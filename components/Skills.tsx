import { Code, Database, BarChart3, Users, Settings, Globe } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Project Management',
      skills: [
        { name: 'Jira', level: 90 },
        { name: 'Scrum Master', level: 85 },
        { name: 'Six Sigma/PDCA', level: 80 },
        { name: 'Ms.Project', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Excel', level: 90 },
        { name: 'Minitab', level: 75 },
        { name: 'Financial Projection', level: 85 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      skills: [
        { name: 'Supply Chain', level: 80 },
        { name: 'Trello', level: 75 },
        { name: 'Business Process Analytics', level: 85 }
      ]
    },
    {
      icon: Settings,
      title: 'ERP Systems',
      skills: [
        { name: 'EBS Oracle Finance', level: 90 },
        { name: 'Oracle Fusion Finance', level: 85 },
        { name: 'ERP Implementation', level: 80 }
      ]
    }
  ]

  const technicalSkills = [
    'Product Roadmap Planning',
    'Requirements Analysis',
    'Stakeholder Management',
    'Agile Development',
    'Business Process Optimization',
    'Data Analysis',
    'Financial Modeling',
    'System Integration'
  ]

  const softSkills = [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Strategic Thinking',
    'Team Collaboration',
    'Adaptability',
    'Continuous Learning'
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set spanning technical expertise, project management, and business intelligence
          </p>
        </div>

        {/* Technical Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-8 h-8 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-600 to-primary-800 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Technical Expertise</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-primary-50 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Preview */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
            <p className="text-primary-100 mb-6">
              Certified in various methodologies and technologies including SAP, Odoo, ISO 9001:2015, and more
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">7+</div>
                <div className="text-primary-100 text-sm">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-primary-100 text-sm">Years Valid</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-primary-100 text-sm">Industries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-primary-100 text-sm">Committed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
