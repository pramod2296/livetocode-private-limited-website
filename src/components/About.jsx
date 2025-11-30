import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Livetocode</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Ideas into AI-Powered Reality
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Livetocode Private Limited is at the forefront of AI innovation, 
              dedicated to building next-generation artificial intelligence products 
              that solve real-world problems and drive digital transformation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to harness the power of cutting-edge AI technologies 
              and combine them with the exceptional talent pool available in India 
              to create solutions that are not just innovative, but also scalable, 
              reliable, and impactful.
            </p>
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovation First</h4>
                  <p className="text-gray-600">We stay ahead of the curve with latest AI technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    To be the leading AI product company that bridges the gap between 
                    cutting-edge research and practical, scalable solutions.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Our Approach</h4>
                  <p className="text-gray-600">
                    We combine deep technical expertise with a user-centric design 
                    philosophy to create AI products that truly make a difference.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Our Commitment</h4>
                  <p className="text-gray-600">
                    Delivering excellence through continuous innovation, quality assurance, 
                    and a relentless focus on customer success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

