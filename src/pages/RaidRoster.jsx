import React from "react";

export const RaidRoster = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-50 flex flex-col pt-16 h-screen">
      <div className="flex justify-center space-x-40">
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-8 mt-16">
          <div className="font-bold text-5xl mb-5">Meet the Raiders</div>
        </div>
      </div>
      <div className="flex justify-center space-x-5">
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-4 mt-5">
          <div className="flex-col flex items-center">
            <div className="font-bold text-lg">The Tanks</div>
            <div className="font-medium">Kattriana</div>
            <div className="font-medium">Tankorspank</div>
          </div>
        </div>
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-4 mt-5">
          <div className="flex-col flex items-center">
            <div className="font-bold text-lg">The Healers</div>
            <div className="font-medium">Rolff</div>
            <div className="font-medium">Mortui</div>
            <div className="font-medium">Drzeo</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-4 mt-5">
          <div className="flex-col flex items-center">
            <div className="font-bold text-lg">The DPS</div>
          </div>
        </div>
        </div>
        <div className="flex justify-center space-x-4">
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-4 mt-5">
        <div className="flex-col flex items-center">
            <div className="font-bold text-lg">The Ranged</div>
          </div>
        </div>
        <div className="bg-purple-100 shadow-lg rounded-lg w-max h-auto p-4 mt-5">
        <div className="flex-col flex items-center">
            <div className="font-bold text-lg">The Melee</div>
          </div>
        </div>
        </div>
    </div>
  );
};
