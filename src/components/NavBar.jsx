import { Link } from "react-router-dom";
import Logo from "../Assets/logowhite.png";

export const NavBarData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Sign Up",
    path: "/signup"
  },
];


const NavBar = () => {


  return (
    <div className="flex justify-between sticky bg-red-800 h-16 items-center w-full top-0 z-50">
      <div className="flex">
        <Link to={"/"} className="overflow-hidden relative">
          <img src={Logo} alt="Logo" className="object-scale-down h-16"></img>
        </Link>
        <div className="text-white font-black pt-3 text-3xl dark:text-black">
          <Link to={"/"}>DungeonCrawlerZ</Link>
        </div>
      </div>
      <div className="flex space-x-10 px-5">
        {NavBarData.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white rounded-full hover:bg-red-600 py-1 px-4 hover:shadow-md transition-colors duration-500 p-3 justify-self-end font-black text-lg"
            >
              <Link to={item.path}>
                <div>{item.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
