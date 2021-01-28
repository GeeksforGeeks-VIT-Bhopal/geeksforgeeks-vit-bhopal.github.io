import { useRef, useState } from "react";
import { MdArrowForward, MdDone } from "react-icons/md";

// Firebase
import { database } from "../../store";

// Components
import Layout from "../Layout";
import Navbar from "../Navbar";
import Primary from "../buttons/Primary";

const Header = () => {
  return (
    <header className="flex flex-col gap-5 sm:items-center mt-32 px-8 md:px-0">
      <div className="font-extrabold">
        <span className="text-primary text-4xl md:text-5xl leading-relaxed">
          GeeksforGeeks{" "}
        </span>
        <span className="text-secondary dark:text-white text-3xl md:text-5xl leading-relaxed">
          Student Chapter
        </span>
      </div>
      <div className="text-base font-medium text-gray-500 uppercase tracking-widest">
        Vellore Institute of Technology, Bhopal
      </div>
    </header>
  );
};

const Email = () => {
  const [isSent, setIsSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      const email = inputRef.current.value;

      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(email.toLowerCase())) {
        database.ref("emails").push(email.toLowerCase());
        setIsSent(true);
      } else {
        inputRef.current.value = "";
        inputRef.current.placeholder = "Enter valid email";
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-8 bg-background-secondary-light dark:bg-background-secondary-dark py-14 shadow-sm">
      <div className="text:sm md:text-2xl font-extrabold text-secondary dark:text-white">
        Want to attend our upcoming event?
      </div>
      <form
        className="flex-col flex sm:flex-row items-center gap-3"
        onSubmit={handleEmail}
      >
        {!isSent && (
          <input
            className="h-12 w-72 bg-secondary dark:bg-white text-white dark:text-black font-medium px-4 rounded border border-transparent focus:outline-none focus:ring-4 focus:ring-primary focus:border-transparent shadow-sm"
            placeholder="Enter your email"
            autoFocus={true}
            ref={inputRef}
          />
        )}
        <Primary type="submit" className="w-full">
          {isSent ? <MdDone fontSize={24} /> : <MdArrowForward fontSize={24} />}
          {isSent && <span>You will be notified</span>}
        </Primary>
      </form>
    </div>
  );
};

interface HomeProps {
  handleTheme: Function;
}

const Home: React.FC<HomeProps> = ({ handleTheme }) => {
  return (
    <Layout>
      <Navbar handleTheme={handleTheme} />
      <Header />
      <Email />
    </Layout>
  );
};

export default Home;
