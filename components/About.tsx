import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Expert in creating and maintaining product roadmaps based on business value'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Experienced in leading cross-functional teams and managing development processes'
    },
    {
      icon: TrendingUp,
      title: 'Process Optimization',
      description: 'Skilled in analyzing and optimizing business processes using data-driven approaches'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Passionate about digital transformation and implementing cutting-edge solutions'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Professional Journey</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              My career began in Industrial Engineering, where I developed strong analytical skills and 
              business acumen. After completing my Master's in Technology Management, I transitioned 
              into the IT industry as a Product Owner, where I've been driving digital transformation 
              initiatives and managing complex ERP implementations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in bridging the gap between business requirements and technical solutions, 
              ensuring that technology investments deliver maximum value to organizations. My experience 
              spans across supply chain management, financial systems, and enterprise resource planning.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover">
                <highlight.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-primary-100">ERP Implementations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-primary-100">Degrees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
