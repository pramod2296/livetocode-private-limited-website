import React, { useState } from 'react'

const Founder = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="founder" className="section-padding bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="gradient-text">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leadership driving innovation in AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                {!imageError ? (
                  <img
                    src="/founder.jpg"
                    alt="Sheetal - Founder of Livetocode Private Limited"
                    className="w-full max-w-md rounded-xl object-cover aspect-square"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full max-w-md min-h-[400px] rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg className="w-24 h-24 mx-auto text-primary-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-primary-600 font-semibold">Founder Photo</p>
                      <p className="text-primary-500 text-sm mt-2">Add founder.jpg to /public folder</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Founder Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Sheetal
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-4">
                Founder & CEO, Livetocode Private Limited
              </p>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Sheetal is the visionary founder of the company, bringing a rare blend 
                of deep technical expertise and product intuition. She holds a Bachelor's 
                degree in Computer Science from NIT Bhopal and a Master's in Computer 
                Science from the University of Texas at Dallas.
              </p>
              <p>
                Currently working as a Software Engineer at Amazon Web Services (AWS) 
                in Seattle, she specializes in building scalable, high-impact systems and 
                is passionate about creating intelligent, AI-driven solutions that transform 
                everyday workflows. As an AI enthusiast, Sheetal constantly explores 
                cutting-edge technologies—from generative models to autonomous systems—to 
                bring innovation into real-world applications.
              </p>
              <p>
                Outside of work, she believes in balancing mind and body. You'll most 
                likely find her at CycleBar every day, pushing her limits, staying 
                disciplined, and carrying the same energy into her professional life.
              </p>
              <p>
                Driven, innovative, and relentlessly curious, Sheetal leads the company 
                with a focus on excellence, creativity, and long-term impact.
              </p>
            </div>

            {/* Key Achievements or Highlights */}
            <div className="pt-6 space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Bachelor's in Computer Science from NIT Bhopal & Master's from UT Dallas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Software Engineer at Amazon Web Services (AWS) in Seattle
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Specializes in building scalable, high-impact systems and AI-driven solutions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Explores cutting-edge AI technologies from generative models to autonomous systems
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links (Optional) */}
            <div className="pt-6 flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder

