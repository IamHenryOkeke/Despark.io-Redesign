import SliderImage from "../assets/images/Slider.png"
import FutureCards from "./Cards/FutureCards"
import Icon1 from "../assets/svg/Vector(9).svg";
import Icon2 from "../assets/svg/Vector(10).svg";
import Icon3 from "../assets/svg/Vector(11).svg";


const Future = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={SliderImage} className="md:w-[100%] lg:w-1/2 md:mr-24" alt="" />
      <div>
        <h1 className="bg-gradient-to-r from-[#FFFFFF] to-[#8B1FF4] text-transparent bg-clip-text font-bold text-2xl md:text-3xl lg:text-4xl md:text-center mt-28 mb-8 md:mb-11">The Future of Web3 UX</h1>
        <div className="flex flex-col gap-16">
          <FutureCards heading="Zero Friction Connections" item1="Instantly connect with and get feedback from Users across Web3, regardless of which blockchain they use" item2=" No translating wallets to emails - we handle the connections, you handle the research" icon={Icon1}/>
          <FutureCards heading="Precisely Targeted User Research" item1="We connect you directly to verified users (with proven wallet ownership)" item2="Specify exact user types by blockchain usage, protocol usage, NFT ownership, and user demographics" icon={Icon2}/>
          <FutureCards heading="Empowered & Anonymous Research" item1="Maintains User anonymity" item2=" Pays Users for their time and experience" item3=" Enables Users to contribute to better web3 UX" icon={Icon3}/>
        </div>
      </div>
    </div>
  )
}

export default Future
