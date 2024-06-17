import React, {
  DetailedHTMLProps,
  HTMLProps,
  useEffect,
  useRef,
  useState,
} from "react";
import Icon, { IconType } from "./Icon";
import useRect from "../hooks/useRect";
import { twMerge } from "tailwind-merge";

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
      <div className="flex items-center gap-x-2 text-xl flex-1">
        <img
          src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/65690e5e73e9e2a416e3502f_sui-mark.svg"
          alt="Logo"
        />
        <h1>JuryVision</h1>
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
        <Dropdown
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

function HoverNavItem(props: {
  setter: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
      element?: React.ReactNode;
    }>
  >;
  element: React.ReactNode;
  className?: string;
  title: string;
}) {
  const ref = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const rect = useRect(ref);

  return (
    <button
      className={props.className}
      ref={ref}
      onMouseEnter={() => {
        props.setter({
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height,
          element: props.element,
        });
      }}
    >
      {props.title}
    </button>
  );
}

function Dropdown(props: {
  x: number;
  y: number;
  className?: string;
  ShowElement: React.ReactNode | undefined;
}) {
  const [dim, setDim] = useState({ w: 0, h: 0 });

  console.log(dim);

  return (
    <div
      className={twMerge(
        "duration-500 absolute -translate-x-1/2 -translate-y-1 border overflow-hidden border-front/20 bg-background shadow-lg rounded",
        props.className
      )}
      style={{
        width: `${dim.w}px`,
        height: `${dim.h}px`,
        left: `${props.x}px`,
        top: `${props.y}px`,
      }}
    >
      {props.ShowElement && (
        <Wrapper element={props.ShowElement} setter={setDim} />
      )}
    </div>
  );
}

function Wrapper(props: {
  setter: React.Dispatch<React.SetStateAction<{ w: number; h: number }>>;
  element: React.ReactNode;
}) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    console.log(rect);
    props.setter({ w: rect.width, h: rect.height });
  }, [props.element, props.setter]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0" ref={ref}>
        {props.element}
      </div>
    </div>
  );
}

function NavDropdownList(props: {
  items: Array<{ icon: IconType; title: string; subtitle: string }>;
}) {
  return (
    <ul className={twMerge("px-5 py-3 flex flex-col gap-y-5")}>
      {props.items.map((item, key) => (
        <li key={key} className="flex gap-x-2">
          <Icon icon={item.icon} className="text-[1.7em] pt-1" />
          <div className="flex flex-col whitespace-nowrap">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-xs font-medium text-front/50">{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
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
          },
          {
            icon: "vote",
            title: "Get Voting Power",
            subtitle: "okay okay",
          },
          {
            icon: "sportsMma",
            subtitle: "Easy Rewards in tournaments",
            title: "JV League",
          },
          { icon: "accountBalance", subtitle: "okay okay", title: "Helpful" },
          { icon: "accountBalance", subtitle: "okay okay", title: "Helpful" },
          { icon: "accountBalance", subtitle: "okay okay", title: "Helpful" },
        ]}
      />
    ),
  },
  { title: "Business", element: <NavDropdownList items={[]} /> },
  { title: "Build", element: <NavDropdownList items={[]} /> },
  { title: "Finances", element: <NavDropdownList items={[]} /> },
];
