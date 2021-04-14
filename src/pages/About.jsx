import React, { useEffect } from "react";
import { UnDrawMoon } from "../components/UnDrawMoon";
import { motion } from "framer-motion";

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-steel-800 flex flex-col pt-16">
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
        >
          <div className="bg-steel-900 pt-10 w-full rounded-lg shadow-lg mt-20">
            <div className="flex items-center flex-col space-y-5">
              <UnDrawMoon className="h-auto w-2/3 lg:w-1/3" />
              <div className="font-bold text-4xl text-steel-200">About the Guild</div>
              <div className="font-medium text-beaver-400 text-lg pl-20 pr-20 pb-10">
                DungeonCrawlerZ is a casual guild on Magtheradon-EU that aim to clear Heroic each
                tier. We welcome new players as well as seasoned veterans! We
                have been a community of many people from all stides of life,
                but only recently started as a World of Warcraft Guild. We have
                lots to learn and we are keen to keep learning new things!
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
          <div className="flex lg:space-x-5 mt-10 text-steel-200 flex-col lg:flex-row lg:space-y-0 space-y-5">
            <div className="bg-steel-900 p-5 flex-1 rounded-lg shadow-lg">
              <div className="font-bold text-center text-4xl">Raid Days</div>
              <div className="font-medium text-center pt-5">
                Thursday 8:30 PM Server Time
              </div>
              <div className="font-medium text-center pt-5">
                Sunday 8:30 PM Server Time
              </div>
            </div>
            <div className="bg-steel-900 p-5 flex-1 rounded-lg shadow-lg">
              <div className="font-bold text-center text-4xl">
                Raid Progress
              </div>
              <div className="font-bold text-center pt-2">Castle Nathria</div>
              <div className="font-medium text-center pt-2">Normal: 10/10</div>
              <div className="font-medium text-center pt-2">Heroic: 10/10</div>
              <div className="font-medium text-center pt-2">Mythic: 0/10</div>
            </div>
          </div>
        </motion.div>

        <div className="bg-steel-900 pt-10 rounded-lg shadow-lg mt-10 w-1/2 mx-auto text-steel-200">
          <div className="text-center font-bold text-6xl pb-10">
            Meet the leaders
          </div>
        </div>
        <div className="flex text-steel-200 lg:space-x-5 mt-10 flex-col lg:flex-row lg:space-y-0 space-y-5">
          <div className="bg-steel-900 p-5 flex-1 rounded-lg shadow-lg">
            <div className="font-bold text-center text-4xl">Healsordeals</div>
            <div className="font-medium text-center text-xl">Guild Leader</div>
            <div className="font-medium text-center pt-5">
              I am the Guild Creator and Raid Lead. I have mained Tank since
              Legion and have played druid for the same amount of time. I am new
              to Raid Leading as well as Guild Leading, but I hope that we can
              grow and learn together as a Guild!
            </div>
          </div>
          <div className="bg-steel-900 p-5 flex-1 rounded-lg shadow-lg">
            <div className="font-bold text-center text-4xl">Aradana</div>
            <div className="font-medium text-center text-xl">Officer</div>
          </div>
          <div className="bg-steel-900 p-5 flex-1 rounded-lg shadow-lg">
            <div className="font-bold text-center text-4xl">Rolff</div>
            <div className="font-medium text-center text-xl">Officer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
