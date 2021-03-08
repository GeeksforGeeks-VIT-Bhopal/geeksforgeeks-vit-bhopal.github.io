import { HashLink } from "react-router-hash-link";

// Images
import HeaderImage from "../../images/GeekWeekLocal/code.png";
import DailyImage from "../../images/GeekWeekLocal/hii.png";
import WeekImage from "../../images/GeekWeekLocal/sleep.png";
import RankingImage from "../../images/GeekWeekLocal/sit.png";

// Data
import daily from "../../data/daily-challenges";
import weekly from "../../data/weekly-challenges";
import guild from "../../data/guild-ranking";
import hacker from "../../data/hacker-ranking";

const Card: React.FC<{
  className?: string;
}> = ({ children, className, ...props }) => {
  return (
    <div
      className={`flex flex-col bg-white rounded shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AnimatedButton: React.FC<{ colored?: boolean }> = ({
  children,
  colored,
  ...props
}) => {
  return (
    <div>
      <div className="rounded-full bg-black">
        <button
          className={`text-sm md:text-2xl focus:outline-none relative z-10 transform -translate-x-2 -translate-y-2 border-black border-4 rounded-full hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform py-3 px-6 md:py-4 md:px-10 ${
            colored
              ? "bg-gradient-to-tr from-orange-500 via-red-500 to-pink-600"
              : "bg-white"
          }`}
          {...props}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

const TitlePanel: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`px-6 py-3 lg:px-12 lg:py-6 flex justify-center items-center text-xl lg:text-4xl gap-8 bg-white rounded shadow ${className}`}
    >
      {children}
    </div>
  );
};

const Challenge: React.FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  return (
    <Card className="p-6 lg:p-10 flex flex-col gap-2 lg:gap-4">
      <div className="text-lg lg:text-2xl">{title}</div>
      <div className="font-sans font-bold tracking-normal text-base lg:text-lg">
        {content}
      </div>
    </Card>
  );
};

const Header = () => {
  const options = [
    { name: "About", to: "#about" },
    { name: "Challenges", to: "#challenges" },
    { name: "Ranking", to: "#ranking" },
    { name: "Guilds", to: "#guilds" },
    { name: "Sponsor", to: "#sponsor" },
  ];

  return (
    <header className="mt-5 px-5">
      <Card>
        <div className="flex justify-between py-6 px-8 text-black text-lg">
          <a className="hidden lg:block">GEEK WEEK: LOCAL</a>
          <div className="flex gap-4 lg:gap-8 text-sm md:text-base flex-wrap">
            {options.map((option) => (
              <span key={option.name}>
                <HashLink to={option.to} className="hover:text-red-500">
                  {option.name}
                </HashLink>
              </span>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between px-8 lg:px-28">
          <div className="flex flex-col gap-16 py-4 lg:py-24 max-w-2xl">
            <div className="flex flex-col gap-8">
              <div className="text-4xl lg:text-7xl">GEEK WEEK: Local</div>
              <div className="font-sans tracking-normal font-medium text-base md:text-lg">
                Build your way to greatness all week long at Geek Week: Local by
                completing challenges both big and small. You’ll expand your
                network, skillset, and hacker portfolio, and earn yourself
                rewards.
              </div>
            </div>
            <div className="flex flex-col items-start lg:flex-row gap-8">
              <AnimatedButton colored>Register</AnimatedButton>
              <AnimatedButton>Chat with us</AnimatedButton>
            </div>
          </div>
          <img src={HeaderImage} className="h-32 my-6 lg:h-96"></img>
        </div>
      </Card>
    </header>
  );
};

const DailyChallenges = ({
  daily,
}: {
  daily: { title: string; content: string }[];
}) => {
  return (
    <a id="ranking">
      <div className="flex flex-col px-5 gap-5 mt-12 items-start">
        <TitlePanel>
          <img src={DailyImage} className="h-20" />
          Daily Challenges
        </TitlePanel>
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols:2 lg:grid-cols-3">
          {daily.map(({ content, title }) => (
            <Challenge content={content} title={title} />
          ))}
        </div>
      </div>
    </a>
  );
};

const WeekChallenges = ({
  weekly,
}: {
  weekly: { title: string; content: string }[];
}) => {
  return (
    <a id="ranking">
      <div className="flex flex-col px-5 gap-5 mt-12 items-start">
        <TitlePanel>
          <img src={WeekImage} className="h-20" />
          Week Long Challenges
        </TitlePanel>
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols:2 lg:grid-cols-2">
          {weekly.map(({ content, title }) => (
            <Challenge content={content} title={title} />
          ))}
        </div>
      </div>
    </a>
  );
};

const Ranking = ({ guild, hacker }: { guild: string[]; hacker: string[] }) => {
  return (
    <a id="ranking">
      <div className="px-5 mt-12">
        <Card>
          <div className="flex justify-between items-end p-6 lg:p-24">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="text-xl lg:text-4xl">Ranking</div>
                <div className="font-sans tracking-normal font-medium text-base lg:text-lg">
                  Build your way to greatness all week long at Geek Week: Local
                  by completing challenges both big and small. You’ll expand
                  your network, skillset, and hacker portfolio, and earn
                  yourself rewards.
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-12 lg:gap-24">
                <div>
                  <div className="text-xl lg:text-3xl">Guild Ranking</div>
                  <ul className="ml-2 space-y-4 mt-8 text-base lg:text-2xl">
                    {guild.map((name, index) => (
                      <li>{`${index + 1} ${name}`}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xl lg:text-3xl">Hacker Ranking</div>
                  <ul className=" ml-2 space-y-4 mt-8 text-base lg:text-2xl">
                    {hacker.map((name, index) => (
                      <li>{`${index + 1} ${name}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <img src={RankingImage} className="hidden lg:block h-72" />
          </div>
        </Card>
      </div>
    </a>
  );
};

const Guild = () => {
  return (
    <a id="guild">
      <div className="px-5 mt-12">
        <Card>
          <div className="flex flex-col p-6 lg:p-24 gap-6 lg:gap-14">
            <div className="flex flex-col gap-3 lg:gap-6">
              <div className="text-xl lg:text-4xl">Guild</div>
              <div className="font-sans tracking-normal font-medium text-base lg:text-lg">
                One of the best parts of our community is that it allows people
                to meet and make connections with others, regardless of where
                you live. Form a guild of hackers and fight for a spot on the
                leaderboard. Every time you complete a challenge during the week
                of Geek Week: Local, you’ll earn points for your Guild. There’s
                strength in numbers so it’s important to spread the word and we
                are here to help by providing you with pre-made marketing
                templates. Use these to share the excitement with your club,
                friends, and local hackers! The more members you have, the more
                points you’ll get and the faster you’ll climb your way up the
                leaderboard.
              </div>
            </div>
            <div className="flex gap-12">
              <AnimatedButton colored>Join a guild</AnimatedButton>
            </div>
          </div>
        </Card>
      </div>
    </a>
  );
};

const Sponsors = () => {
  return (
    <a id="sponsor">
      <div className="px-5 mt-12">
        <Card>
          <div className="flex flex-col p-6 lg:p-24 gap-6 lg:gap-14">
            <div className="flex flex-col gap-3 lg:gap-6">
              <div className="text-xl lg:text-4xl">Sponsors</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                Some thing about sponsor
              </div>
            </div>
            <div className="flex gap-12">
              <AnimatedButton>Nice Company</AnimatedButton>
            </div>
          </div>
        </Card>
      </div>
    </a>
  );
};

const About = () => {
  return (
    <a id="about">
      <div className="flex flex-col items-start px-5 mt-12 gap-5">
        <TitlePanel>About</TitlePanel>
        <Card>
          <div className="flex p-6 lg:p-16 gap-16 max-w-4xl">
            <div className="flex flex-col gap-3 lg:gap-6">
              <div className="text-lg lg:text-4xl">What's Geek Week:Local?</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                Some thing here
              </div>
            </div>
            <img src={DailyImage} className="hidden lg:block h-32"></img>
          </div>
        </Card>
        <Card>
          <div className="flex p-6 lg:p-16 gap-16  max-w-4xl">
            <div className="flex flex-col gap-3 lg:gap-6">
              <div className="text-lg lg:text-4xl">What's Geek Week:Local?</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                Some thing here
              </div>
            </div>
            <img src={WeekImage} className="hidden lg:block h-32"></img>
          </div>
        </Card>
      </div>
    </a>
  );
};

const GeekWeekLocal: React.FC = () => {
  return (
    <div className=" z-20 bg-gradient-to-tr from-orange-500 via-red-500 to-pink-700 font-bungee tracking-widest pb-12">
      <Header />
      <About />
      <DailyChallenges daily={daily} />
      <WeekChallenges weekly={weekly} />
      <Ranking guild={guild} hacker={hacker} />
      <Guild />
      <Sponsors />
    </div>
  );
};

export default GeekWeekLocal;
