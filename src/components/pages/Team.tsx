import team from "../../constants/team";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="flex flex-col gap-5 sm:items-center py-8 px-8 md:px-0">
      <div className="font-extrabold">
        <span className="text-secondary dark:text-white text-3xl md:text-5xl leading-relaxed">
          Team
        </span>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <div className="flex justify-center py-8 mb-48">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
        {team.map(({ name, position, image, links }) => (
          <div className="px-3 py-8 bg-white dark:bg-secondary rounded-md border dark:border-transparent shadow-sm hover:shadow flex flex-col items-center gap-5">
            <img src={image} className="w-24 h-24 rounded-full" />
            <div className="flex flex-col items-center gap-1">
              <div className="font-semibold dark:text-white">{name}</div>
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                {position}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team: React.FC<{ handleTheme: () => void }> = ({ handleTheme }) => {
  return (
    <>
      <Navbar handleTheme={handleTheme} />
      <Header />
      <Main />
    </>
  );
};

export default Team;
