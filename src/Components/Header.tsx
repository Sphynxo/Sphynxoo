import { useLocation } from "react-router-dom";
import { navlinks } from "../Data/navlinks.json";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const activeLink =
    navlinks.find(
      (link) =>
        `/${link.toLowerCase().replace(" ", "-")}` ===
        location.pathname
    ) || "home";

  return (
    <div>
      <RxHamburgerMenu
        className={`absolute top-[2.4rem] right-[2.4rem] md:right-[12rem] md:top-[4.8rem] text-[2.4rem] z-20 ${
          !openNav ? "visible" : "hidden"
        } xl:hidden`}
        onClick={toggleNav}
      />

      <RxCross2
        className={`absolute top-[2.4rem] right-[2.4rem] md:right-[12rem] md:top-[4.8rem] text-[2.4rem] z-20 ${
          openNav ? "visible" : "hidden"
        } xl:hidden`}
        onClick={toggleNav}
      />
      <ul
        className={`fixed w-full h-full bg-dark top-0 right-0 flex flex-col justify-center items-center gap-[2rem] text-[2rem] ${
          openNav ? "translate-x-0" : "translate-x-[100%]"
        } lg:items-end lg:text-center lg:pr-[20rem]
      transition-right duration-500 xl:static xl:flex-row xl:text-[1.6rem] xl:border-[2px] xl:gap-[1.6rem] xl:border-green xl:rounded-[5rem] xl:py-[2.7rem] xl:justify-between xl:px-[5.6rem] xl:translate-x-0 xl:bg-transparent z-10 3xl:px-[7.2rem]`}
      >
        {navlinks.map((link, index) => (
          <Link
            className={`group flex gap-[0.8rem] xl:gap-[0.2rem] xl-mid:gap-[0.8rem] cursor-pointer hover:text-green transition-all duration-300 ${
              activeLink === link
                ? "text-green hover:scale-100"
                : "text-white hover:scale-110"
            }`}
            to={`/${link.toLowerCase().replace(" ", "-")}`}
            key={index}
            onClick={toggleNav}
          >
            <span
              className={`${
                activeLink === link
                  ? "opacity-1"
                  : "opacity-0 group-hover:opacity-100 transition-all duration-300 text-green"
              }`}
            >
              {"<"}
            </span>
            {link}
            <span
              className={`${
                activeLink === link
                  ? "opacity-1"
                  : "opacity-0 group-hover:opacity-100 transition-all duration-300 text-green"
              }`}
            >
              {">"}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
}
