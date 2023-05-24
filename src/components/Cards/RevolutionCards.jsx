import PropTypes from 'prop-types'
import {ReactComponent as EthereumIcon} from "../../assets/svg/Ethereum-Logo Large.svg";

const RevolutionCards = ({heading, description}) => {
    
  return (
    <div className="flex flex-col gap-6 items-center text-center">
      <EthereumIcon/>
      <h1 className="text-white font-semibold text-2xl lg:text-[28px]">{heading}</h1>
      <p className="text-[#ffffff80] text-[14px] md:text-[18px] lg:text-[20px]">{description}</p>
    </div>
  )
}

RevolutionCards.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default RevolutionCards;



