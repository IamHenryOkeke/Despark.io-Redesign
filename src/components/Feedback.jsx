import {ReactComponent as EthereumIcon} from "../assets/svg/Ethereum-Logo Small.svg";

const Feedback = () => {
  return (
    <div className='bg-[#1B191D] px-4 md:px-10 py-16 lg:px-44 rounded-[40px] mt-24 flex flex-col gap-10 md:grid grid-cols-[1fr_1fr] items-center md:gap-16 lg:gap-20'>
      <div className='flex flex-col gap-6 lg:text-2xl md:text-xl'>
        <h1 className="bg-gradient-to-r from-[#FFFFFF] to-[#8B1FF4] text-transparent bg-clip-text font-bold text-2xl lg:text-4xl text-center md:text-start">Web3 User Feedback</h1>
        <p className='text-[#333333]'>Despark enables you and your organization to get real-time feedback from web3 users. Identify your target audience by demographics, NFT collections, tokens held, and user behavior, powered by wallet and blockchain analysis.</p>
        <h1 className='text-white lg:text-2xl'>Powering:</h1>
        <ul className=' ml-4 text-[#333333] list-disc flex flex-col gap-3'>
            <li>Web3 User Testing</li>
            <li>Web3 User Interviews</li>
            <li>Web3 User Feedback</li>
            <li>Web3 Market Research</li>
            <li>Web3 UX Research</li>
        </ul>
      </div>
      <div className='text-white md:text-[20px] flex flex-col gap-9'>
        <div className='flex gap-4'>
            <EthereumIcon/>
            <p>Live Interviews with web3 users</p>
        </div>
        <div className='flex gap-4'>
            <EthereumIcon/> 
            <p>Usability Testing across blockchains</p>
        </div>
        <div className='flex gap-4'>
            <EthereumIcon/>
            <p>User and Behaviorial Blockchain Analytics</p>
        </div>
        <div className='flex gap-4'>
            <EthereumIcon/>
            <p>User Recruitment and Audience Management</p>
        </div>
        <div className='flex gap-4'>
            <EthereumIcon/>
            <p>Automatic Recordings</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
