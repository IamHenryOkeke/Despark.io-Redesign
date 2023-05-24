import React from 'react'
import PropTypes from 'prop-types'

const FutureCards = ({heading, icon, item1, item2, item3}) => {
  return (
    <div className=''>
      <img className='bg-[#333333] px-[10.25px] py-[9.5px] rounded mb-4' src={icon} alt="" />
      <h1 className='text-white font-semibold text-[22px] mb-4'>{heading}</h1>
      <ul className='flex flex-col gap-6 ml-4'>
        {item1 && (<li className='text-[#333333] list-disc'>
            <p>{item1}</p>
        </li>)}
        {item2 && (<li className='text-[#333333] list-disc'>
            <p>{item2}</p>
        </li>)}
        {item3 && (<li className='text-[#333333] list-disc'>
            <p>{item3}</p>
        </li>)}
      </ul>
    </div>
  )
}

FutureCards.propTypes = {
  heading : PropTypes.string,
  icon : PropTypes.string,
  item1 : PropTypes.string,
  item2 : PropTypes.string,
  item3 : PropTypes.string
}

export default FutureCards
