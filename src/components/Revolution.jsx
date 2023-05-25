import {ReactComponent as Icon} from "../assets/svg/Group.svg";
import RevolutionCards from "./Cards/RevolutionCards";

const Revolution = () => {
  return (
    <div className=" bg-[#1B191D] py-16 px-8 rounded-[40px] mb-28 lg:mb-72">
      <div className="flex items-center lg:gap-10 justify-center mb-20">
        <Icon/>
        <h1 className="bg-gradient-to-r from-[#FFFFFF] to-[#8B1FF4] text-transparent bg-clip-text font-bold text-2xl md:text-4xl text-center mx-8">Web3 requires a UX Revolution</h1>
        <Icon/>
      </div>
      <div className="flex flex-col lg:px-9 lg:flex-row gap-16 lg:gap-32">
        <RevolutionCards heading="Web3 UX is Broken" description="It's evident in every bridge, NFT transaction, and wallet. Onboarding is mostly non-existent and the web3 UX can best be described as 'scary'"/>
        <RevolutionCards heading="Connecting with users is very difficult" description="Finding the person behind the wallet is difficult, and understanding the blockchain usage even more so."/>
        <RevolutionCards heading="There is huge opportunity" description="Web3 UX Research will be the most informative in history thanks to the user behavior written on the blockchains. despark can help you hear important user feedback."/>
      </div>
    </div>
  )
}

export default Revolution
