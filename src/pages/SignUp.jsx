import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { UnDrawTeam } from "../components/UnDrawTeam";

export const SignUp = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-steel-800 flex flex-col text-steel-200 overflow-hidden">
      <div className="container mx-auto pb-20">
      <motion.div
          animate={{
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.4,
            },
          }}
          initial={{
            x: 500,
          }}
          // whileHover={{scale:1.3}} // Testing scale for nick, remove later!
        >
        <div className="bg-steel-900 pt-5 w-2/3 rounded-lg shadow-lg mt-5 flex mx-auto">
          <div className="flex w-full justify-center">
            <div className="font-bold text-6xl text-center pb-5 ">
              Join the Guild today!
            </div>
          </div>
        </div>
        </motion.div>
        
        <motion.div
          animate={{
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.4,
            },
          }}
          initial={{
            x: -500,
          }}
        >
        <div className="flex justify-center py-5">
        <div className="flex w-max h-auto bg-steel-900 shadow-lg rounded-lg py-5 justify-center">
          <UnDrawTeam className="w-2/3 h-auto"/>
        </div>
        </div>
        </motion.div>
        <motion.div
          animate={{
            y: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.2,
            },
          }}
          initial={{
            y: 500,
          }}
        >
        <div className="bg-steel-900 pt-2 pb-2 w-1/3 rounded-lg shadow-lg mt-5 flex mx-auto">
          <div className="flex w-full justify-center">
            <div className="font-bold text-xl ">Ways to join the Guild</div>
          </div>
        </div>
        </motion.div>
        <div className="flex lg:space-x-5 mt-10 flex-col lg:flex-row lg:space-y-0 space-y-5">
          <div className="bg-steel-900 p-5 flex-1 rounded-lg shadow-lg">
            <div className="text-center font-bold text-3xl">
              Mail The Officers
            </div>
            <div className="py-5 flex-col flex items-center">
              <div className="text-center font-medium text-lg">
                Healsordeals-Magtheradon
              </div>
              <div className=" font-medium text-lg">Rolff-Magtheradon</div>
              <div className=" font-medium text-lg">Aradana-Magtheradon</div>
            </div>
          </div>
          <div className="bg-steel-900 p-5 flex-1 flex-col items-center flex rounded-lg shadow-lg">
            <div className="font-bold text-3xl">
              Use The In-Game Guild Finder
            </div>
            <div className="py-10">
              <div className="font-medium text-lg">
                Search for "DungeonCrawlerZ" in the guild finder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
