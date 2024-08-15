import { useState } from "react";
import { MenuItem } from "../interfaces/";
import { Menu } from "./Menu";
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
interface Props {
  menuItems: MenuItem[];
}
export const Header = ({ menuItems }: Props) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const handleNavClick = () => setHidden((valor) => !valor);
  return (
    <header className="backdrop-blur-md w-full fixed flex flex-row justify-between items-center p-4">
      <nav className="flex flex-row gap-2 w-1/3">
        <a href="https://github.com/Jesus-Reynaldo" target="_blank" >
          <GitHubIcon className="text-white"/>
        </a>
        <a href="https://www.linkedin.com/in/jesusreynaldo/" target="_blank">
          <LinkedInIcon className="text-white"/>
        </a>
      </nav>
      <div className="flex w-2/3 justify-center">
        <a href="#" className="text-white transition menu_item">JESUS REYNALDO</a>
      </div>
      <nav className="flex flex-row w-1/3 justify-end">
        <button
          onClick={handleNavClick}
          className={`${hidden ? "hidden" : ""} lg:hidden`}
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul className="hidden lg:flex flex-row gap-5">
          <Menu menuItems={menuItems} />
        </ul>
      </nav>
      <div
        className={`${
          hidden ? "" : "hidden"
        } fixed backdrop-blur-md h-screen w-full md:w-2/3 bg-[#1b1b1b] bg-opacity-60 text-white right-0 top-0 p-4 flex flex-col transition-all duration-500 min-w-[60vw] `}
      >
        <div className="flex w-full justify-end">
          <button onClick={handleNavClick} className="cursor-pointer">
            <svg
              className="w-4 h-4 text-white hover:text-[#09E85E]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col w-full justify-center gap-2">
          <Menu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};
