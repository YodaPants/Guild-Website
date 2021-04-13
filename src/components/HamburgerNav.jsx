import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/D9DDED.png";
import { GiHamburgerMenu } from "react-icons/all";

export const HamburgerNav = () => {
  return (
    <div className="flex md:hidden justify-between sticky bg-steel-800 h-16 items-center w-full top-0 z-50">
      <div className="flex">
        <Link to={"/"} className="overflow-hidden relative">
          <img src={Logo} alt="Logo" className="object-scale-down h-10"></img>
        </Link>
        <div className="text-steel-200 font-black pt-3 text-lg dark:text-black">
          <Link to={"/"}>DungeonCrawlerZ</Link>
        </div>

        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};
