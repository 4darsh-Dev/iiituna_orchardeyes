import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rajesh Verma',
    role: 'Apple Orchard Owner, Himachal',
    quote:
      'OrchardEyes transformed the way I manage my farm. Early pest detection saved my crops!',
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Amit Sharma',
    role: 'Farm Consultant',
    quote:
      'The AI-driven insights are game-changing. It makes precision farming a reality!',
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Neha Patel',
    role: 'Agritech Researcher',
    quote:
      'The drone mapping and real-time data sync make OrchardEyes an essential tool for modern farmers.',
    image: 'https://via.placeholder.com/80'
  }
]

const Testimonials = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
          What Farmers Say
        </h2>
        <p className='mt-4 text-lg text-gray-600'>
          Real experiences from people using OrchardEyes.
        </p>

        {/* Testimonials Grid */}
        <div className='mt-10 grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition'
            >
              <div className='mb-4 text-green-500 text-3xl flex justify-center'>
                <FaQuoteLeft />
              </div>
              <p className='text-gray-700 italic'>"{testimonial.quote}"</p>
              <div className='mt-4 flex flex-col items-center'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-16 h-16 rounded-full border-2 border-green-500'
                />
                <h3 className='mt-2 text-lg font-semibold text-gray-800'>
                  {testimonial.name}
                </h3>
                <p className='text-sm text-gray-600'>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
