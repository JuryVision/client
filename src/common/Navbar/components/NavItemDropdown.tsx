import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
export default function NavItemDropdown(props: {
  x: number;
  y: number;
  className?: string;
  ShowElement: React.ReactNode | undefined;
}) {
  const [dim, setDim] = useState({ w: 0, h: 0 });
  return (
    <div
      className={twMerge(
        "duration-360 absolute -translate-x-1/2 -translate-y-1 border overflow-hidden border-front/20 bg-background shadow-lg rounded",
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