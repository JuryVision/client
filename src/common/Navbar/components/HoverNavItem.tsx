import { useRef } from "react";
import useRect from "../../../hooks/useRect";
export default function HoverNavItem(props: {
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