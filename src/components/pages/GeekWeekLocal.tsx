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
      className={`px-6 py-3 lg:px-12 lg:py-6 flex justify-center items-center text-xl lg:text-4xl bg-white rounded shadow ${className}`}
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
    <Card className="p-6 lg:p-10 flex flex-col space-y-2 lg:space-y-4 mr-5 mb-5">
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
    // { name: "Challenges", to: "#challenges" },
    // { name: "Ranking", to: "#ranking" },
    { name: "Guilds", to: "#guilds" },
    { name: "Sponsor", to: "#sponsor" },
  ];

  return (
    <header className="mt-5 px-5">
      <Card>
        <div className="flex justify-between py-6 px-8 align-center text-black text-lg">
          <a className="hidden lg:block">GEEK WEEK: LOCAL</a>
          <div className="flex text-sm md:text-base flex-wrap">
            {options.map((option) => (
              <span key={option.name} className="ml-4 lg:mb-4">
                <HashLink to={option.to} className="hover:text-red-500">
                  {option.name}
                </HashLink>
              </span>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between px-8 lg:px-28">
          <div className="flex flex-col space-y-16 py-4 lg:py-24 max-w-2xl">
            <div className="flex flex-col space-y-8">
              <div className="text-4xl lg:text-7xl">GEEK WEEK: Local</div>
              <div className="font-sans tracking-normal font-medium text-base md:text-lg">
                Embark on a fun-filled journey this week at Geek Week: Local by
                completing challenges both big and small. This is a golden
                chance to expand your network, skillset and hacker portfolio,
                all while earning exciting reward.
              </div>
            </div>
            <div className="flex flex-col items-start lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
              <a href="https://forms.gle/kcj5HRCxnTPH5TsB8" target="_blank">
                <AnimatedButton colored>Join a Guild</AnimatedButton>
              </a>
              <a href="https://discord.gg/Mb8B9HcyjT" target="_blank">
                <AnimatedButton>Chat with us</AnimatedButton>
              </a>
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
      <div className="flex flex-col px-5 space-y-5 mt-12 items-start">
        <TitlePanel>
          <img src={DailyImage} className="mr-8 h-20" />
          Daily Challenges
        </TitlePanel>
        <div className="w-full grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3">
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
      <div className="flex flex-col px-5 space-y-5 mt-12 items-start">
        <TitlePanel>
          <img src={WeekImage} className="mr-8 h-20" />
          Week Long Challenges
        </TitlePanel>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
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
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-6">
                <div className="text-xl lg:text-4xl">Ranking</div>
                <div className="font-sans tracking-normal font-medium text-base lg:text-lg">
                  What better award than reward? You can view the top geekiest 3
                  of the Individual and Guild Leaderboards below:
                </div>
              </div>
              <div className="flex lg:flex-row flex-col space-y-12 lg:space-y-0 lg:space-x-24">
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
          <div className="flex flex-col p-6 lg:p-24 space-y-6 lg:space-y-14">
            <div className="flex flex-col space-y-3 lg:space-y-6">
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
            <div className="flex space-x-12">
              <a href="https://forms.gle/kcj5HRCxnTPH5TsB8" target="_blank">
                <AnimatedButton colored>Join a guild</AnimatedButton>
              </a>
              <a href="https://forms.gle/jnmuUSVq79GPC8XY7" target="_blank">
                <AnimatedButton>Make a guild</AnimatedButton>
              </a>
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
          <div className="flex flex-col p-6 lg:p-24 space-y-6 lg:space-y-14">
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <div className="text-2xl lg:text-4xl">Sponsors</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                Want to know about the main forces backing us, who made all of
                this possible? Well, these are event sponsors to whom we are
                ever grateful:
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 gap-8">
              {/* <AnimatedButton>Nice Company</AnimatedButton> */}
              <div className="flex flex-wrap flex-col">
                <div className="text-xl lg:text-3xl">GeeksForGeeks</div>
                <div className="font-sans tracking-normal font-medium text-base md:text-lg">
                  The portal we are all so familiar with and even more so during
                  our examinations. The namesake of this student chapter, it is
                  perhaps India’s largest computer science portal where you can
                  access resources, articles and papers on all technical topics
                  under the Sun. It is fondly also known as the ‘Encyclopaedia
                  of Computer Science’ and has various students chapters across
                  college campuses in India.
                </div>
              </div>

              <div className="flex flex-wrap flex-col">
                <div className="text-xl lg:text-3xl">Repl.it</div>
                <div className="font-sans tracking-normal font-medium text-base md:text-lg">
                  A simple and powerful online IDE, Editor, Compiler,
                  Interpreter and REPL, which can run, host and compile in 50+
                  languages. You don’t have to spend a second in setting up here
                  and it even facilitates GitHub integration and real time
                  collaboration!
                </div>
              </div>

              <div className="flex flex-wrap flex-col">
                <div className="text-xl lg:text-3xl">InterViewCake</div>
                <div className="font-sans tracking-normal font-medium text-base md:text-lg">
                  Sometimes the name does say it all! And this is especially
                  true for InterviewCake, which literally makes programming
                  interviews a cake walk. If you want to gather tips, tricks,
                  secrets or resources to ace programming interviews at those
                  tech giants look no further, as you have found the one-step
                  solution, i.e InterviewCake
                </div>
              </div>
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
      <div className="flex flex-col items-start px-5 mt-12 space-y-5">
        <TitlePanel>About</TitlePanel>
        <Card>
          <div className="flex p-6 lg:p-16 space-x-16 max-w-8xl">
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <div className="text-lg lg:text-4xl">What's Geek Week:Local?</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                Geek Week: Local is a 7 day event comprising various daily and
                week long challenges which one has to solve with their
                respective guilds/teams. The challenges will vary in difficulty
                levels ranging from beginner friendly puzzles to advanced
                conundrums, so worry not, there is something for everyone.
                <br></br>
                Apart from this, we will have webinars with industry experts to
                get a peek at how things work in real life, witty mini events
                and a special sponsor event as the show stopper wherein the
                guild members will gather to bring their hence acquired skills
                to life by creating projects to tackle real life challenges! Lo
                and behold, you will witness magic! And did we mention the the
                late night hangout and music sessions in between?
              </div>
            </div>
            <img src={DailyImage} className="hidden lg:block h-32"></img>
          </div>
        </Card>
        <Card>
          <div className="flex p-6 lg:p-16 space-x-16  max-w-8xl">
            <div className="flex flex-col space-y-3 lg:space-y-6">
              <div className="text-lg lg:text-4xl">FAQ</div>
              <div className="font-sans tracking-normal font-medium text-lg">
                These are some frequently asked questions regarding Geek Week:
                Local. We are sure that your queries, if any will find answers
                here. If problems still persist, you can always chat with us.
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
      {/* <DailyChallenges daily={daily} />
      <WeekChallenges weekly={weekly} />
      <Ranking guild={guild} hacker={hacker} /> */}
      <Guild />
      <Sponsors />
    </div>
  );
};

export default GeekWeekLocal;
