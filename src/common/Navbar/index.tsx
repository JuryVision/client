import { useState } from "react";
import Icon from "../Icon";
import HoverNavItem from "./components/HoverNavItem";
import NavItemDropdown from "./components/NavItemDropdown";
import NavDropdownList from "./components/NavDropdownList";
import { Link } from "react-router-dom";


export default function Navbar() {
  const notificationsUnread = useState(Math.random() < 0.5 ? true : false);
  const [dropdown, setDropdown] = useState<{
    x: number;
    y: number;
    element?: React.ReactNode;
  }>({
    x: 0,
    y: 0,
  });
  return (
    <nav className="bg-background p-page py-4 fixed top-0 left-0 w-full flex items-center justify-center z-[999]">
     <div className="flex-1">
        <Link to="/" className="flex items-center gap-x-2 text-xl w-max group">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[2.2em] group-hover:rotate-[360deg] duration-300 group-hover:scale-[107%]"
          />
          <h1>JuryVision</h1>
        </Link>
      </div>
      <div className="flex gap-x-9 items-center pt-1 group">
        {navbarItems.map((item, key) => (
          <HoverNavItem
            title={item.title}
            setter={setDropdown}
            element={item.element}
            className="font-semibold text-base pt-1 pb-3"
            key={key}
          />
        ))}
        <NavItemDropdown
          x={dropdown.x}
          y={dropdown.y}
          className="group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none opacity-0"
          ShowElement={dropdown.element}
        />
      </div>
      <div className="flex-1 flex items-center">
        <figure className="flex-1" />
        <button className="text-xl relative rounded-full border border-front/20 p-3 mr-5">
          <Icon icon="notification" />
          {notificationsUnread && (
            <figure className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500" />
          )}
        </button>
        <button className="bg-primary px-5 py-2 rounded text-back font-medium hover:saturate-150 duration-300">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}


const navbarItems = [
    {
      title: "Retail",
      element: (
        <NavDropdownList
          items={[
            {
              icon: "contacts",
              title: "Get an account",
              subtitle: "Get Started Using JuryVision",
              link: "/",
            },
            {
              icon: "vote",
              title: "Get Voting Power",
              subtitle: "okay okay",
              link: "/",
            },
            {
              icon: "sportsMma",
              title: "JV League",
              subtitle: "Easy Rewards in tournaments",
              link: "/",
            },
            {
              icon: "contacts",
              title: "Get an account",
              subtitle: "Get Started Using JuryVision",
              link: "/",
            },
            {
              icon: "vote",
              title: "Get Voting Power",
              subtitle: "okay okay",
              link: "/",
            },
            {
              icon: "sportsMma",
              title: "JV League",
              subtitle: "Easy Rewards in tournaments",
              link: "/",
            },
          ]}
        />
      ),
    },
    {
      title: "Business",
      element: (
        <NavDropdownList
          items={[
            {
              icon: "accountBalance",
              title: "Do Nothing",
              subtitle: "Just Useless",
              link: "/",
            },
            {
              icon: "sportsMma",
              title: "JV League",
              subtitle: "Easy Rewards",
              link: "/",
            },
            {
              icon: "contacts",
              title: "Get an account",
              subtitle: "Get Started",
              link: "/",
            },
          ]}
        />
      ),
    },
    {
      title: "Build",
      element: (
        <p className="w-[50vw]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          explicabo accusantium, recusandae eveniet ducimus harum aspernatur quos
          voluptate odio fugiat enim, illum facere quo a quia nihil numquam,
          soluta minima aperiam? Distinctio possimus rem aperiam ut repellat eos
          doloribus expedita qui unde, a reprehenderit, voluptatibus consequuntur
          sint nobis sit repudiandae deserunt? Voluptas, et labore!
        </p>
      ),
    },
    {
      title: "Services",
      element: (
        <NavDropdownList
          items={[
            {
              icon: "contacts",
              title: "Get an account",
              subtitle: "Get Started Using JuryVision",
              link: "/",
            },
            {
              icon: "vote",
              title: "Get Voting Power",
              subtitle: "okay okay",
              link: "/",
            },
            {
              icon: "sportsMma",
              subtitle: "Easy Rewards in tournaments",
              title: "JV League",
              link: "/",
            },
            {
              icon: "contacts",
              title: "Get an account",
              subtitle: "Get Started Using JuryVision",
              link: "/",
            },
            {
              icon: "vote",
              title: "Get Voting Power",
              subtitle: "okay okay",
              link: "/",
            },
            {
              icon: "sportsMma",
              subtitle: "Easy Rewards in tournaments",
              title: "JV League",
              link: "/",
            },
          ]}
        />
      ),
    },
  ];