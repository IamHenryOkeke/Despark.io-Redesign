import { ReactComponent as TwitterIcon } from '../assets/svg/Twitter .svg'

const Footer = () => {
  return (
    <div className='pb-14 lg:pb-24 lg:pt-28'>
      <div className='flex justify-between items-center'>
        <h1 className="font-bold text-2xl">
              <span className="text-white">de</span><span className="text-indigo-1000">spark</span>
        </h1>
        <TwitterIcon/>
      </div>
      <p className='mt-4 text-center text-indigo-1000 font-bold text-lg'>Redesigned by <a href="http://twitter.com/thekayboy" className='transition-all delay-150 hover:text-white duration-300 italic' target="_blank" rel="noreferrer">KayBoy Odinaka</a> and Developed by <a href="http://github.com/iamhenryokeke" className='transition-all delay-150 hover:text-white duration-300 italic' target="_blank" rel="noreferrer">Henry Okeke</a></p>
    </div>
    
  )
}

export default Footer

