import { FaDiscord, FaGithub, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import Primary from "./buttons/Primary";
import Secondary from "./buttons/Secondary";

// Image
import Logo from "../images/logo.png";

interface NavbarProps {
  handleTheme: Function;
  hideThemeChanger?: boolean;
  wide?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  handleTheme,
  wide = false,
  hideThemeChanger = false,
}) => {
  return (
    <nav className="flex justify-center items-center">
      <div className={`flex justify-between ${wide ? 'md:max-w-8xl' : 'md:max-w-5xl'} w-full px-3 py-3 md:px-4 md:py-6 ${wide ? 'xl:px-5' : 'xl:px-0'}`}>
        <Link to="/">
          <div className="hidden md:flex items-center h-12">
            <img src={Logo} className="h-8 cursor-pointer" />
          </div>
        </Link>
        <div className="z-10 flex-wrap flex justify-end">
          <Link to="/geekweeklocal" className="h-12 ml-3 mb-3">
            <Primary>Geek Week: Local</Primary>
          </Link>
          <Link to="/" className="h-12 ml-3 mb-3">
            <Secondary>Home</Secondary>
          </Link>
          <Link to="/team" className="h-12 ml-3 mb-3">
            <Secondary>Team</Secondary>
          </Link>
          <a
            href="https://github.com/GeeksforGeeks-VIT-Bhopal"
            target="_blank"
            className="h-12 ml-3 mb-3"
          >
            <Secondary>
              <FaGithub fontSize={20} />
            </Secondary>
          </a>
          <a
            href="https://discord.gg/Mb8B9HcyjT"
            target="_blank"
            className="h-12 ml-3 mb-3"
          >
            <Secondary>
              <FaDiscord fontSize={20} />
            </Secondary>
          </a>
          {!hideThemeChanger && (
            <span className="h-12 ml-3 mb-3">
              <Secondary onClick={() => handleTheme()}>
                <FaMoon fontSize={18} />
              </Secondary>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
