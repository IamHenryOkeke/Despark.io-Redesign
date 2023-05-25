const Contact = () => {
  return (
    <div className='px-4 py-16 border-2 my-16 border-[#8B1FF4] rounded-[40px]'>
        <h1 className="bg-gradient-to-r from-[#FFFFFF] to-[#8B1FF4] text-transparent bg-clip-text font-bold text-2xl lg:text-4xl text-start">
            Interested in using despark for research? Connect with us!
        </h1>
        <p className='text-[#333333] mt-4'>
            Chat with an expert about how despark fits your research needs.
        </p>
        <form action="" className='text-[#333333] text-sm lg:text-xl mt-9'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="">First Name</label>
                    <input type="text" className='w-full rounded-md h-11 px-4'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='w-full rounded-md h-11 px-4'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="">DAO, Protocol, or Company</label>
                    <input type="text" className='w-full rounded-md h-11 px-4'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="">Email Address</label>
                    <input type="text" className='w-full rounded-md h-11 px-4'/>
                </div>
            </div>
            <h1 className='text-[18px] lg:text-2xl text-white mt-16 mb-7'>
                What can we do for you? 
            </h1>
            <div className='flex flex-col gap-7'>
                <div className='flex gap-4'>
                    <input type="radio" value="HTML"/>
                    <label htmlFor="html">I'm interested in using despark for researchI</label>
                </div>
                <div className='flex gap-4'>
                    <input type="radio" value="CSS"/>
                    <label htmlFor="css">I'm interested in using despark for analytics</label>
                </div>
                <div className='flex gap-4'>
                    <input type="radio" value="JavaScript"/>
                    <label htmlFor="javascript">Something else</label>
                </div>
            </div>
            <button className='px-6 py-4 bg-[#8B1FF4] text-white rounded mt-11'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Contact
