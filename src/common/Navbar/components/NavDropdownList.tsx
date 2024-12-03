import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "../../Icon";
export default function NavDropdownList(props: {
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