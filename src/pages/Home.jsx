import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { UnDrawThinking } from "../components/UnDrawThinking";
import Scrn1 from "../Assets/WoWScrnShot_010321_223607.jpg";
import Scrn2 from "../Assets/WoWScrnShot_112420_165958.jpg";
import Scrn3 from "../Assets/WoWScrnShot_122420_002902.jpg";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showThumbnailsButton: false,
    showNextButton: false,
    showPrevButton: false,
  }
};

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div className="bg-gradient-to-b from-red-800 to-black flex flex-col pt-16">
      <div className="container mx-auto pb-20">
        <div className="bg-gray-400 pt-10 w-full rounded-lg shadow-lg mt-20 bg-opacity-80">
          <div className="flex items-center flex-col space-y-5">
            <div className="font-semibold text-4xl">Welcome to DCZ</div>
            <div className="font-medium text-red-600 text-lg">
              This is our fun little corner in the internet
            </div>
            {/* <UnDrawThinking className="w-full h-auto px-20 lg:w-2/3" /> */}
            <Link
              to="/about"
              className="p-5 bg-blue-500 rounded-full transform translate-y-7 text-white font-bold focus:outline-none outline-none hover:bg-indigo-500 hover:scale-110 hover:shadow-lg duration-500"
            >
              Read More
            </Link>
          </div>
        </div>
        <SRLWrapper options={options}>
        <div className="flex lg:space-x-5 mt-10 flex-col lg:flex-row lg:space-y-0 space-y-5">
          <div className="bg-purple-100 p-5 w-full rounded-lg shadow-lg">
            
            <img
              src={Scrn1}
              alt="Our First Sire Kill"
              className="w-full h-auto rounded-lg transform hover:scale-110 hover:shadow-lg duration-500"
            />
            
          </div>

          <div className="bg-purple-100 p-5 w-full rounded-lg shadow-lg">
            <img
              src={Scrn2}
              alt="Bastion"
              className="w-full h-auto rounded-lg transform hover:scale-110 hover:shadow-lg duration-500"
            />
          </div>

          <div className="bg-purple-100 p-5 w-full rounded-lg shadow-lg">
            <img
              src={Scrn3}
              alt="Our First Christmas Together"
              className="w-full h-auto rounded-lg transform hover:scale-110 hover:shadow-lg duration-500"
            />
          </div>
        </div>
        </SRLWrapper>
      </div>
    </div>
  );
};
export default Home;
