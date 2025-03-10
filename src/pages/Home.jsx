import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col '>

      {/* part1 */}
      <div className='w-full h-[80vh] z-100 rounded-3xl overflow-hidden flex flex-col items-center justify-center relative bg-white  '>
        <img src="/hero-main.png" className='opacity-60 object-cover w-full h-full absolute ' alt="" />
        <div className='flex flex-col justify-center items-center gap-9 relative z-10'>
          <h1 className='text-primary-text text-5xl font-medium '>Revolutionize patient care with MedCoPilot</h1>
          <h3 className='text-sec-text text-lg mb-8'>Your AI-Powered Clinical Assistant</h3>
          <button className='bg-sec-btn text-white py-3 px-8 rounded-sm'>Request Demo</button>
        </div>
      </div>

      {/* part2 */}
      <div className='grad w-full h-[150vh] absolute top-100 left-0'></div>

      <div className='flex justify-between items-center mt-5 h-[40vh] z-100 gap-5 relative'>
        <div className='flex flex-col w-1/2 h-full  px-20 justify-center gap-5 bg-[#FFFFFF99] rounded-3xl'>
          <h1 className='text-primary-text text-5xl  font-medium '>Reclaim Your Time,<br />
            Enhance Patient Care</h1>
          <h3 className='text-sec-text text-lg mb-8 '>Empowering Physicians with AI-Driven Efficiency,<br /> Insightful Support, and Seamless Integration.</h3>
        </div>
        <div className='w-1/2 h-full overflow-hidden rounded-3xl'>
          <img src="/Visual.png" alt="" className='w-full h-full object-cover' />
        </div>
      </div>


      {/* part3 */}
      <div className='flex justify-between flex-col items-center p-10 mt-5 z-100 gap-5 bg-[#fffffff8]   rounded-3xl'>
        <h1 className='text-primary-text text-4xl font-medium '>Challenges in typical documentation setting</h1>
        <div className='flex gap-10 mt-10'>
          <div className='w-1/3 p-5 flex flex-col  gap-6'>
            <img src="/doc.png" alt="" />
            <h4>Time Consuming</h4>
            <p>Physicians spend more time documenting than caring for patients.</p>
          </div>
          <div className='w-1/3 p-5 flex flex-col  gap-6'>
            <img src="/doc.png" alt="" />
            <h4>Time Consuming</h4>
            <p>Physicians spend more time documenting than caring for patients.</p>
          </div>
          <div className='w-1/3 p-5 flex flex-col  gap-6'>
            <img src="/doc.png" alt="" />
            <h4>Time Consuming</h4>
            <p>Physicians spend more time documenting than caring for patients.</p>
          </div>

        </div>
      </div>


      {/* part4 */}
      <div className='z-100 flex flex-col justify-between mt-20 items-center w-full'>

        <h1 className='text-primary-text text-4xl font-medium '>This is how MedCopilot bridges the gap</h1>

        <div className='flex gap-5 justify-start items-center relative h-[50vh] mt-20 w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
          <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" />
          <div className='flex flex-col gap-10 z-100 justify-center items-center w-1/2'>
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='text-white text-4xl'>Comprehensive <br /> Data Retrieval &<br /> Summarization</h1>
              <h3 className='text-[#FFFFFFCC] text-md'>Instantly access and summarize <br /> patient data, including diagnoses,<br /> medications, labs, and imaging.</h3>
            </div>
          </div>
          <div className='w-1/3 h-[90%] overflow-hidden rounded-xl z-100'>
            <img className='w-full h-full object-cover ' src="/col-1.png" alt="" />
          </div>

        </div>

        <div className='flex flex-row-reverse items-center gap-5 relative h-[50vh] mt-20 w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
          <img src="/hero-main.png" className='absolute w-full h-full object-cover  opacity-30' alt="" style={{ objectPosition: '95% 100%' }} />
          <div className='flex flex-col gap-10 z-100 justify-start items-center w-1/2'>
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='text-white text-4xl'>Intelligent <br /> Diagnosis <br />Insights</h1>
              <h3 className='text-[#FFFFFFCC] text-md'>Instantly access and summarize <br /> patient data, including diagnoses,<br /> medications, labs, and imaging.</h3>
            </div>
          </div>
          <div className='w-[45%]  h-[90%] overflow-hidden rounded-xl z-100'>
            <img src="/col-2.png" className='w-full h-full object-cover ' alt="" />
          </div>

        </div>

        <div className='flex gap-5 relative h-[50vh] items-center mt-20 w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
          <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" />
          <div className='flex flex-col gap-10 z-100 justify-center items-center w-1/2'>
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='text-white text-4xl'>Real-Time <br />
                Data Analysis</h1>
              <h3 className='text-[#FFFFFFCC] text-md'>Leverage AI to analyze both historical <br /> records and real-time inputs for pattern <br />detection and informed decisions.</h3>
            </div>
          </div>
          <div className='w-[45%]  h-[90%] overflow-hidden rounded-xl z-100'>
            <img src="/col-3.png" className='w-full h-full object-contain ' alt="" />
          </div>

        </div>
      </div>


      {/* part5 */}
      <div className='flex gap-5 justify-center items-center relative h-[50vh] mt-20 w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
        <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" />
        <div className='flex flex-col gap-10 z-100 justify-center items-center'>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-white text-4xl text-center'>Ready to Experience the <br /> Power of MediCoPilot?</h1>
            <h3 className='text-[#FFFFFFCC] text-md'>Request a demo today and discover how <br /> MediCoPilot can transform your practice.</h3>
            <button className='px-5 py-2 text-sm bg-white rounded-sm'>Contact Us Today </button>
          </div>
        </div>
        

      </div>

    </div>
  )
}

export default Home