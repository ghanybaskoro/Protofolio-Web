import { FileText, Image as ImageIcon, ExternalLink, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

interface Activity {
  id: string
  title: string
  description: string
  date: string
  category: string
  type: 'pdf' | 'image'
  thumbnail?: string
  fileUrl: string
  tags: string[]
}

export default function Activity() {
  const activities: Activity[] = [
    {
      id: 'gekko-project',
      title: 'Gekko Project - Pitch Deck',
      description: 'Comprehensive pitch deck presentation for Gekko project showcasing business model, market analysis, and financial projections.',
      date: '2023',
      category: 'Business Development',
      type: 'pdf',
      fileUrl: 'https://drive.google.com/file/d/1vKCQ6Ig-1-H-1nal7KZ0X_jTLr_gnAaC/view?usp=sharing',
      tags: ['Pitch Deck', 'Business Model', 'Financial Analysis', 'Presentation']
    },
    {
      id: 'kotig-karsa-project',
      title: 'Kotig Karsa Pitch Deck',
      description: 'Digital transformation pitch deck for Kotig Karsa project focusing on digital innovation, technology implementation, and business process optimization.',
      date: '2024',
      category: 'Digital Transformation',
      type: 'pdf',
      fileUrl: 'https://drive.google.com/file/d/1zOl7_CbBRKq-pzCdGYpd4bX69rzUMpwa/view?usp=sharing',
      tags: ['Digital Transformation', 'Technology Innovation', 'Business Process', 'Pitch Deck']
    },
    {
      id: 'wms-sclc-project',
      title: 'Warehouse Management System SCLC IT',
      description: 'Functional specification document for Warehouse Management System (WMS) implementation at SCLC ITI, covering system requirements, workflows, and technical specifications.',
      date: '2025',
      category: 'System Development',
      type: 'pdf',
      fileUrl: 'https://drive.google.com/file/d/1hTjZcYYLvwiO5ZvFwnPBwULWkJ3agm35/view?usp=sharing',
      tags: ['WMS', 'System Specification', 'Warehouse Management', 'Technical Documentation']
    }
  ]

  const getFileIcon = (type: string) => {
    return type === 'pdf' ? FileText : ImageIcon
  }

  const getFileTypeColor = (type: string) => {
    return type === 'pdf' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
  }

  return (
    <section id="activity" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Activities & Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcase of professional work, projects, and deliverables throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const FileIcon = getFileIcon(activity.type)
            return (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                {/* Thumbnail Section */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                  {activity.thumbnail ? (
                    <Image
                      src={activity.thumbnail}
                      alt={activity.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="relative">
                        <FileIcon size={48} className="text-primary-600 mx-auto mb-2" />
                        {activity.id === 'gekko-project' && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                        {activity.id === 'kotig-karsa-project' && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                        {activity.id === 'wms-sclc-project' && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <div className="text-primary-600 font-semibold text-sm mb-1">
                        {activity.type.toUpperCase()} Document
                      </div>
                      {activity.id === 'gekko-project' && (
                        <div className="text-xs text-primary-500 font-medium">
                          GEKKO PROJECT
                        </div>
                      )}
                      {activity.id === 'kotig-karsa-project' && (
                        <div className="text-xs text-primary-500 font-medium">
                          KOTIG KARSA
                        </div>
                      )}
                      {activity.id === 'wms-sclc-project' && (
                        <div className="text-xs text-primary-500 font-medium">
                          WMS SCLC IT
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* File Type Badge */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${getFileTypeColor(activity.type)}`}>
                    {activity.type.toUpperCase()}
                  </div>
                  
                  {/* Custom overlay for projects */}
                  {activity.id === 'gekko-project' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  )}
                  {activity.id === 'kotig-karsa-project' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  )}
                  {activity.id === 'wms-sclc-project' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary-600">
                      <Tag size={14} />
                      <span className="font-medium">{activity.category}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {activity.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href={activity.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      View Document
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State (when no activities) */}
        {activities.length === 0 && (
          <div className="text-center py-16">
            <FileText size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No Activities Yet</h3>
            <p className="text-gray-400">Work activities and projects will be displayed here.</p>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-4">
                <svg className="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">More Work Samples Available</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                I have numerous examples of my work related to business processing, flow charting, diagrams, and more that I would be happy to share. Feel free to contact me, and let's discuss any topics or questions you may have.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  Business Process Analysis
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  Flow Charting
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  System Diagrams
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  Technical Documentation
                </span>
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  Financial Projection & Feasebility Study
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
