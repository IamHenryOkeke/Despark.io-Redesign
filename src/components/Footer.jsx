import { ReactComponent as TwitterIcon } from '../assets/svg/Twitter .svg'

const Footer = () => {
  return (
    <div className='flex justify-between items-center pb-14 lg:pb-24 lg:pt-28'>
      <h1 className="font-bold text-2xl">
            <span className="text-white">de</span><span className="text-indigo-1000">spark</span>
      </h1>
      <TwitterIcon/>
    </div>
  )
}

export default Footer

