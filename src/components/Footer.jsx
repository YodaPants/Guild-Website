import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logowhite.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-max bg-purple-400">
      <div className="flex justify-between">
        <div className="flex items-center ml-60">
          <Link to={"/"} className="overflow-hidden relative">
            <img src={Logo} alt="Logo" className="object-scale-down h-16"></img>
          </Link>
          <div className="text-white font-black text-3xl dark:text-black">
            <Link to={"/"}>DungeonCrawlerZ</Link>
          </div>
        </div>
        <div className="flex space-x-10 px-5">
          <div className="flex flex-col py-5 pr-20 items-center">
            <div className="font-medium text-lg text-purple-100 pb-1 mb-1 border-b border-purple-100 border-opacity-20">
              About Us
            </div>
            <Link
              to="/about"
              className=" font-medium text-purple-200 cursor-pointer transform hover:text-purple-100 duration-300"
            >
              Raid Times
            </Link>
            <Link
              to="/about"
              className=" font-medium text-purple-200 cursor-pointer transform hover:text-purple-100 duration-300"
            >
              Raid Progress
            </Link>
            <Link
              to="/history"
              className=" font-medium text-purple-200 cursor-pointer transform hover:text-purple-100 duration-300"
            >
              History
            </Link>
          </div>
          <div className="flex flex-col py-5 pr-44 items-center">
            <div className="font-medium text-lg text-purple-100 pb-1 mb-1 border-b border-purple-100 border-opacity-20">
              Navigation
            </div>
            <Link
              to="/"
              className=" font-medium text-purple-200 cursor-pointer transform hover:text-purple-100 duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" font-medium text-purple-200 cursor-pointer transform hover:text-purple-100 duration-300"
            >
              About
            </Link>
            <Link
              to="/signup"
              className=" font-medium text-purple-200 cursor-pointer transform hover:text-purple-100 duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full h-20 border-t-2 border-opacity-20 border-purple-200 justify-center items-center flex-col">
        <div className="font-medium text-purple-200">
          Copyright © DungeonCrawlerZ. All rights reserved.
        </div>
        <div className="font-medium text-purple-200">
          We do <span className="underline text-bold">NOT</span> use your
          cookies for any nefarious reasons.
        </div>
      </div>
    </div>
  );
};

export default Footer;
