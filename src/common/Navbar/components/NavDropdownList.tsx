import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "../../Icon";
import { Link } from "react-router-dom";
export default function NavDropdownList(props: {
    items: Array<{
        icon: IconType;
        title: string;
        subtitle: string;
        link: string;
      }>;
}) {
  return (
    <ul className={twMerge("px-5 py-3 flex flex-col gap-y-5")}>
      {props.items.map((item, key) => (
        <li key={key}>
            <Link
            className="flex gap-x-2 group/inner duration-150 active:scale-90"
            to={item.link}
          >
          <Icon
            icon={item.icon}
            className="text-[1.7em] group-hover/inner:scale-y-150 group-hover/inner:text-primary group-hover/inner:-scale-x-150 duration-300 pt-1"
          />
          <div className="flex flex-col whitespace-nowrap">
            <p className="text-sm font-medium group-hover/inner:text-primary">
              {item.title}
            </p>
            <p className="text-xs font-medium text-front/50">
              {item.subtitle}
            </p>
          </div>
        </Link>
        </li>
      ))}
    </ul>
  );
}