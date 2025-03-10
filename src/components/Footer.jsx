import React from 'react'

const Footer = () => {
  return (
    <div className='grid mt-20 grid-cols-1 md:grid-cols-5 gap-8 px-8 py-16 bg-white'>
      {/* Logo and Certificates Section */}
      <div className='flex flex-col gap-6'>
        <div className='w-20 h-20'>
          <img src="/jnc.png" alt="" />
        </div>
        <h3 className='text-sec-text font-medium text-xl'>Certificates</h3>
        <div className='flex gap-6 mt-2'>
          <div className='flex flex-col items-center'>
            <img src="/foot-1.png" alt="HIPAA" className='h-15 w-auto' />
            <span className='text-xs text-gray-500 mt-2'>(Coming soon)</span>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/foot-2.png" alt="HL7 FHIR" className='h-15 w-auto filter grayscale' />
            <span className='text-xs text-gray-500 mt-2'>(Coming soon)</span>
          </div>
        </div>
      </div>

      {/* Company Section */}
      <div className='flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Company</h3>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Company</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Blog</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Resources</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Careers</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Privacy Policy</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>DPA</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Contact Us</a>
      </div>

      {/* Solutions Section */}
      <div className='flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Solutions</h3>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Cloud Migration</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Gen-AI Solutions</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Security Solutions</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Application Modernization</a>
      </div>

      {/* Follow Us Section */}
      <div className='flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Follow Us</h3>
        <a href="#" className='text-gray-600 hover:text-blue-500'>LinkedIn</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>X (Formerly Twitter)</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Instagram</a>
      </div>

      {/* Subscribe Section */}
      <div className='flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Subscribe to Newsletter</h3>
        <div className='flex'>
          <input 
            type="email" 
            placeholder="you@gmail.com" 
            className='border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 flex-grow bg-transparent'
          />
          <button className='text-blue-500 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className='col-span-1 md:col-span-5 mt-8 text-center text-blue-500'>
        @2025 MedCopilot
      </div>
    </div>
  )
}

export default Footer