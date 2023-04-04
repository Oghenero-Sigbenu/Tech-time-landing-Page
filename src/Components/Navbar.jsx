import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../Assests/logo1.png";
import { navLinks } from "../helpers/data";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setHover] = useState(false);
  const pageLink = window?.location?.pathname;

  return (
    <header className="uppercase bg-primary text-[#222222]">
      <div className="flex justify-between  items-center py-6 max-w-[90%] lg:max-w-[85%] mx-auto text-sm text-black">
        <div className="flex flex-row gap-10 items-center w-full">
          <Link to="/">
            <img src={Logo} alt="Rasmin" className="max-h-7" />
          </Link>

          <nav className="hidden lg:flex justify-between w-[95%]  ">
            <ul className="flex gap-6 justify-end items-center w-full">
              {navLinks?.map(({ path, title }, i) => (
                <li className="" key={i}>
                  <Link
                    to={path}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <label
                      tabIndex="0"
                      className={`
                      ${pageLink === path && "text-primary font-semibold"} 
                      cursor-pointer hover:border-2 hover:p-2 text-white`}
                    >
                      {title}
                    </label>
                  </Link>
                </li>
              ))}
            </ul>
            <div className=" cursor-pointer ml-12">
              <button className="px-[2rem] bg-white py-[.5rem]">Enroll </button>
            </div>
          </nav>
        </div>

        {/* mobile menu start */}
        <MenuAlt3Icon
          className="lg:hidden w-8 text-white cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        {menuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
            onClick={() => setMenuOpen(false)}
          >
            <AnimatePresence>
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                className="fixed top-0 left-0 bg-[#f9f9f9] h-screen overflow-y-scroll"
                onClick={(e) => e.stopPropagation()}
              >
                <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        {/* mobile menu end */}
      </div>
    </header>
  );
};

export default NavBar;
