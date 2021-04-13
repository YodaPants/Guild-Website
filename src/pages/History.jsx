import React, { useEffect } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const nathriaNormal = [
  {
    title: "Shiekwing",
    isKilled: true,
  },
  {
    title: "Altimor the Huntsman",
    isKilled: true,
  },
  {
    title: "Hungering Destroyer",
    isKilled: true,
  },
  {
    title: "Lady Inerva Darkvein",
    isKilled: true,
  },
  {
    title: "Sun King's Salvation",
    isKilled: true,
  },
  {
    title: "Artificer Xy'mox",
    isKilled: true,
  },
  {
    title: "Council of Blood",
    isKilled: true,
  },
  {
    title: "Sludgefist",
    isKilled: true,
  },
  {
    title: "Stoneborne Generals",
    isKilled: true,
  },
  {
    title: "Sire Denathrius",
    isKilled: true,
  },
];

const nathriaHeroic = [
    {
      title: "Shiekwing",
      isKilled: true,
    },
    {
      title: "Altimor the Huntsman",
      isKilled: true,
    },
    {
      title: "Hungering Destroyer",
      isKilled: true,
    },
    {
      title: "Lady Inerva Darkvein",
      isKilled: true,
    },
    {
      title: "Sun King's Salvation",
      isKilled: true,
    },
    {
      title: "Artificer Xy'mox",
      isKilled: true,
    },
    {
      title: "Council of Blood",
      isKilled: true,
    },
    {
      title: "Sludgefist",
      isKilled: false,
    },
    {
      title: "Stoneborne Generals",
      isKilled: false,
    },
    {
      title: "Sire Denathrius",
      isKilled: false,
    },
  ];

export const History = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-50 flex flex-col pt-16 h-screen">
      <div className="flex justify-center space-x-40">
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-8 mt-16">
          <div className="font-bold text-5xl mb-5">Castle Nathria Normal</div>
          <div className="flex-col flex items-center">
          {nathriaNormal.map((item, index) => {
            if (item.isKilled) {
              return (
                <div className="flex justify-start items-center">
                  <div className="font-medium text-xl">{item.title}</div>
                  <FaCheck className="mt-1 mx-3" />
                </div>
              );
            }
            return (
              <div className="flex justify-start items-center">
                <div className="font-medium text-xl">{item.title}</div>
                <FaTimes className="mt-1 mx-3" />
              </div>
            );
          })}
          </div>
        </div>
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-8 mt-16">
          <div className="font-bold text-5xl mb-5">Castle Nathria Heroic</div>
          <div className="flex-col flex items-center">
          {nathriaHeroic.map((item, index) => {
            if (item.isKilled) {
              return (
                <div className="flex justify-start items-center">
                  <div className="font-medium text-xl">{item.title}</div>
                  <FaCheck className="mt-1 mx-3" />
                </div>
              );
            }
            return (
              <div className="flex justify-start items-center">
                <div className="font-medium text-xl">{item.title}</div>
                <FaTimes className="mt-1 mx-3" />
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
