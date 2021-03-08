import { HashLink } from "react-router-hash-link";

import HeaderImage from "../../images/GeekWeekLocal/code.png";
import DailyImage from "../../images/GeekWeekLocal/hii.png";
import WeekImage from "../../images/GeekWeekLocal/sleep.png";
import RankingImage from "../../images/GeekWeekLocal/sit.png";

const Card: React.FC<{
  className?: string;
  colored?: boolean;
}> = ({ children, colored, className, ...props }) => {
  return (
    <div
      className={`flex flex-col rounded shadow ${className} ${
        colored ? "bg-helix" : "bg-white"
      }`}
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
          className={`text-2xl focus:outline-none relative z-10 transform -translate-x-2 -translate-y-2 border-black border-4 rounded-full hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform py-4 px-10 ${
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
      className={`px-12 py-6 flex justify-center items-center text-4xl gap-8 bg-white rounded shadow ${className}`}
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
    <Card className="p-10 flex flex-col gap-4">
      <div className="text-2xl">{title}</div>
      <div className="font-sans font-bold tracking-normal text-xl">
        {content}
      </div>
    </Card>
  );
};

const Header = () => {
  const options = [
    { name: "Ranking", to: "#ranking" },
    { name: "Challenges", to: "#challenges" },
    { name: "Guilds", to: "#guilds" },
    { name: "Sponsor", to: "#sponsor" },
  ];

  return (
    <header className="mt-5 px-5">
      <Card>
        <div className="flex justify-between p-6 text-black text-lg">
          <a>GEEK WEEK: LOCAL</a>
          <div className="relative flex space-x-8 flex-col md:flex-row">
            {options.map((option) => (
              <span key={option.name}>
                <HashLink to={option.to} className="hover:text-red-500">
                  {option.name}
                </HashLink>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-28">
          <div className="flex flex-col gap-16 py-24 max-w-2xl">
            <div className="flex flex-col gap-8">
              <div className="text-7xl">GEEK WEEK: Local</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                Build your way to greatness all week long at Geek Week: Local by
                completing challenges both big and small. You’ll expand your
                network, skillset, and hacker portfolio, and earn yourself
                rewards.
              </div>
            </div>
            <div className="flex flex-wrap relative right-0  gap-14 sm:gap-8">
              <AnimatedButton colored>Register</AnimatedButton>
              <AnimatedButton>Chat with us</AnimatedButton>
            </div>
          </div>
          <img src={HeaderImage} className="h-96"></img>
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
  week,
}: {
  week: { title: string; content: string }[];
}) => {
  return (
    <a id="ranking">
      <div className="flex flex-col px-5 gap-5 mt-12 items-start">
        <TitlePanel>
          <img src={WeekImage} className="h-20" />
          Week Long Challenges
        </TitlePanel>
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols:2 lg:grid-cols-2">
          {week.map(({ content, title }) => (
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
          <div className="flex justify-between items-end p-24">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="text-4xl">Ranking</div>
                <div className="font-sans tracking-normal font-medium text-lg">
                  Build your way to greatness all week long at Geek Week: Local
                  by completing challenges both big and small. You’ll expand
                  your network, skillset, and hacker portfolio, and earn
                  yourself rewards.
                </div>
              </div>
              <div className="flex flex-wrap gap-24">
                <div>
                  <div className="text-3xl">Guild Ranking</div>
                  <ul className="ml-2 space-y-4 mt-8 text-2xl">
                    {guild.map((name, index) => (
                      <li>{`${index + 1} ${name}`}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-3xl">Hacker Ranking</div>
                  <ul className=" ml-2 space-y-4 mt-8 text-2xl">
                    {hacker.map((name, index) => (
                      <li>{`${index + 1} ${name}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <img src={RankingImage} className="h-72" />
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
          <div className="flex flex-col p-24 gap-14">
            <div className="flex flex-col gap-6">
              <div className="text-4xl">Guild</div>
              <div className="font-sans tracking-normal font-medium text-lg">
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
              <AnimatedButton colored>Create One</AnimatedButton>
              <AnimatedButton>Join a guild</AnimatedButton>
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
          <div className="flex flex-col p-24 gap-14">
            <div className="flex flex-col gap-6">
              <div className="text-4xl">Sponsors</div>
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

const GeekWeekLocal: React.FC = () => {
  const daily = [
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
  ];

  const week = [
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
    {
      title: "Hello everyone",
      content: "This is a content",
    },
  ];

  const guild = ["Someone", "Someone else", "Someone again"];

  const hacker = ["Someone", "Someone else", "Someone again"];

  return (
    <div className="bg-gradient-to-tr from-orange-500 via-red-500 to-pink-700 font-bungee tracking-widest pb-12">
      <Header />
      <DailyChallenges daily={daily} />
      <WeekChallenges week={week} />
      <Ranking guild={guild} hacker={hacker} />
      <Guild />
      <Sponsors />
    </div>
  );
};

export default GeekWeekLocal;
