const Hero = () => {
  return (
    <div className='bg-[url("../assets/images/Hero Image Mobile.png")] flex flex-col items-center justify-center gap-6 text-white py-10 font-semibold'>
        <h1 className='text-center text-4xl lg:text-[65px]'>
            Better <span className='text-indigo-1000'>Web3</span> UX Research
        </h1>
        <p className='text-[#ffffff80] text-center'>
            Despark.io enables web3 companies to get feedback from their ideal users. Powered by in-depth blockchain data.
        </p>
        <button className="bg-indigo-1000 px-6 py-4 rounded">
            Participate as a user
        </button>
        <button className="px-6 py-4 rounded border-4 border-[#1F34F4] text-white">
            Conduct web3 ux research
        </button>
    </div>
  )
}

export default Hero;
