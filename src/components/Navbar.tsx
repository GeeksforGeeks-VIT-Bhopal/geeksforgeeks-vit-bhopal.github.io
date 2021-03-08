import { FaDiscord, FaGithub, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import Primary from "./buttons/Primary";
import Secondary from "./buttons/Secondary";

// Image
import Logo from "../images/logo.png";

interface NavbarProps {
  handleTheme: Function;
}

const Navbar: React.FC<NavbarProps> = ({ handleTheme }) => {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex justify-between md:max-w-5xl w-full px-3 py-3 md:px-4 md:py-6 xl:px-0">
        <Link to="/">
          <div className="hidden md:flex items-center h-12">
            <img src={Logo} className="h-8 cursor-pointer" />
          </div>
        </Link>
        <div className="flex-grow z-10 flex-wrap md:flex-grow-0 flex justify-end space-x-3 h-12">
          <Link to="/geekweeklocal" className="mb-3 md:mb-0">
            <Primary>Geek Week: Local</Primary>
          </Link>
          <Link to="/" className="mb-3 md:mb-0">
            <Secondary>Home</Secondary>
          </Link>
          <Link to="/team" className="mb-3 md:mb-0">
            <Secondary>Team</Secondary>
          </Link>
          <a href="https://github.com/GeeksforGeeks-VIT-Bhopal" target="_blank">
            <Secondary>
              <FaGithub fontSize={20} />
            </Secondary>
          </a>
          <a href="https://discord.gg/Mb8B9HcyjT" target="_blank">
            <Secondary>
              <FaDiscord fontSize={20} />
            </Secondary>
          </a>
          <Secondary onClick={() => handleTheme()}>
            <FaMoon fontSize={18} />
          </Secondary>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
