const team = [
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
  { name: "Hello", image: "", position: "Head" },
];

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
    <div className="flex justify-center py-8">
      <div className="flex-1 grid grid-cols-4 gap-5 max-w-5xl">
        {team.map(({ name, position }) => (
          <div className="bg-white rounded-md border shadow-sm flex flex-col items-center py-3">
            <div className="font-semibold py-2">{name}</div>
            <div className="text-sm text-gray-600 bg-gray-50 w-full flex justify-center py-2 uppercase">
              {position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Team;
