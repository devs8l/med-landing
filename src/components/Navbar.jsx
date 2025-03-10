import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
        <div className='w-20 h-20'>
            <img className='object-contain w-full h-full' src="/jnc.svg" alt="" />
        </div>
        <div className='flex gap-10 p-2 items-center'>
            <div >About</div>
            <div>Features</div>
            <div>Certifications</div>
            <button className='bg-primary-btn py-2 text-white rounded-sm px-4 text-sm'>Contact us</button>
        </div>
    </div>
  )
}

export default Navbar