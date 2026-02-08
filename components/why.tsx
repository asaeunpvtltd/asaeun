import React from 'react'

const Why = () => {
  return (

    <div className="flex flex-col container mx-auto items-center justify-center h-80 rounded-2xl px-6 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Why Choose Asaeun?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3">
            Research & Innovation First
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Software isn’t just what we build—it’s what we deeply invest in. Our
            continuous focus on research and development allows us to design,
            control, and optimize our technology stack for performance,
            reliability, and long-term innovation.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3">
            Customer-Driven Growth
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our growth is built on the trust of the people who use our products.
            From early-stage startups to growing businesses, we work closely with
            our customers to adapt to their needs and help them scale with
            confidence.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-3">
            Built for Builders
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            As a young and focused team, we understand the real challenges of
            building and scaling today. We create sustainable, value-driven
            products—shaped by feedback and designed to grow alongside your
            business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Why