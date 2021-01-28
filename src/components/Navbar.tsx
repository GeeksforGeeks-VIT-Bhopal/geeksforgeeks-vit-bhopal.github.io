import { FaDiscord, FaGithub, FaMoon } from "react-icons/fa";
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
        <div className="hidden md:flex items-center h-12">
          <img src={Logo} className="h-8 cursor-pointer" />
        </div>
        <div className="flex-grow md:flex-grow-0 flex justify-end gap-3 h-12">
          <Secondary onClick={() => handleTheme()}>
            <FaMoon fontSize={18} />
          </Secondary>
          <a href="https://github.com/GeeksforGeeks-VIT-Bhopal" target="_blank">
            <Secondary>
              <FaGithub fontSize={20} />
              <span className="md:block hidden">Code with us</span>
            </Secondary>
          </a>
          <a href="https://discord.gg/Mb8B9HcyjT" target="_blank">
            <Secondary>
              <FaDiscord fontSize={20} />
              <span className="md:block hidden">Talk with us</span>
            </Secondary>
          </a>
          <Primary>Join us</Primary>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
