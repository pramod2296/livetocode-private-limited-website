import React from 'react'

const Talent = () => {
  const strengths = [
    {
      title: 'Expert AI Engineers',
      description: 'Our team comprises highly skilled AI engineers with deep expertise in machine learning, deep learning, and neural networks.',
    },
    {
      title: 'Research Excellence',
      description: 'We collaborate with top research institutions and maintain a culture of continuous learning and innovation.',
    },
    {
      title: 'Industry Experience',
      description: 'Our talent pool includes professionals with extensive experience across various industries and domains.',
    },
    {
      title: 'Cutting-Edge Skills',
      description: 'Proficiency in the latest AI frameworks, tools, and technologies including TensorFlow, PyTorch, and more.',
    },
  ]

  return (
    <section id="talent" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powered by <span className="gradient-text">Top Talents in India</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strength lies in our exceptional team of AI professionals from across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              India's Finest AI Talent
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Livetocode, we've assembled a team of the brightest minds in artificial 
              intelligence from across India. Our talent pool includes graduates from 
              premier institutions, experienced industry veterans, and passionate innovators 
              who are pushing the boundaries of what's possible with AI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that India's rich talent ecosystem, combined with our commitment 
              to excellence and innovation, positions us uniquely to build next-generation 
              AI products that compete on a global scale.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="text-5xl font-bold">100%</div>
                <div className="text-2xl font-semibold">Indian Talent</div>
                <p className="text-primary-100 leading-relaxed">
                  We're proud to be powered entirely by exceptional talent from India, 
                  showcasing the country's capabilities in AI and technology innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{strength.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Are you passionate about AI and want to work with India's top talents? 
              We're always looking for exceptional individuals to join our mission.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Talent

